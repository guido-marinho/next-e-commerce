import Stripe from 'stripe';

import { Product } from "../../../Types/Product";

import AddCartBtn from "../Buttons/AddCartBtn";
import ProductImage from "./ProductImage";

import { formatPrice } from '../../../lib/utils';

export default async function ProductsList() {
  const products = await getProducts();
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6">
      {
        products.map((product: Product) => (
          <li key={product.id} className="bg-white rounded-lg shadow-lg flex flex-col">
            <div className="block relative h-48 rounded overflow-hidden">
              <ProductImage product={product} fill/>
            </div>
            <div className="p-4">
              <h2 className="text-gray-900 title-font text-lg font-medium">{product.name}</h2>
              <p className="mt-1">{formatPrice(product.price)}</p>
            </div>

            <AddCartBtn/>
          </li>
        ))
      }
    </ul>
  )
}

const getProducts = async (): Promise<Product[]> => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2023-10-16',
  });

  const products = await stripe.products.list();
  const formetedProducts = await Promise.all(products.data.map(async (product) => {

    const price = await stripe.prices.list({
      product: product.id,
      limit: 1,
    });

    return {
      id: product.id,
      name: product.name,
      // category: product.metadata.category,
      description: product.description,
      image: product.images[0],
      price: price.data[0].unit_amount,
      currency: price.data[0].currency,
    };
  }));

  return formetedProducts;
};
