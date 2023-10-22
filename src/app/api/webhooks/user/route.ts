// endpoint: /api/webhooks/user

import { IncomingHttpHeaders } from 'http';
import { headers } from 'next/headers';
import { NextResponse } from "next/server";
import { Webhook, WebhookRequiredHeaders } from 'svix';
import { Event, EventType } from '../../../../Types/EventsClerk';
import prisma from "../../../../lib/prisma";

const webhookSecret = process.env.CLERK_WEBHOOK_SECRET || '';

const handler = async (req: Request) => {
  const payload = await req.json();

  const headerList = headers();

  const heads = {
    'svix-id': headerList.get('svix-id'),
    'svix-signature': headerList.get('svix-signature'),
    'svix-timestamp': headerList.get('svix-timestamp'),
  };

  const webhook = new Webhook(webhookSecret);

  let event: Event | null = null;

  try {
    event = webhook.verify(JSON.stringify(payload), heads as IncomingHttpHeaders & WebhookRequiredHeaders) as Event;
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Invalid webhook' }, { status: 400 });
  }

  const eventType: EventType = event.type;
  if (eventType === 'user.created' || eventType === 'user.update') {
    const { id, first_name, last_name, email_address, primary_email_address_id, ...attributes } = event.data;

    await prisma.user.upsert({
      where: { externalId: id as string },
      create: {
        externalId: id as string,
        attributes,
      },
      update: {
        attributes,
      },
    });
  }

  return NextResponse.json({}, { status: 200 });
};

export const GET = handler;
export const POST = handler;
export const PUT = handler;
