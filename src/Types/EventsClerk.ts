export type EventType = 'user.created' | 'user.update' | '*';

export type Event = {
  data: EventDataType;
  object: 'event';
  type: EventType;
};

export type EventDataType = {
  id: string;
  first_name: string;
  last_name: string;
  email_address: EmailAddressType[];
  primary_email_address_id: string;
  attributes: Record<string, string | number>;
};

export type EmailAddressType = {
  id: string;
  email_address: string;
};

