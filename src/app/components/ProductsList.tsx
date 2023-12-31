/* eslint-disable @next/next/no-img-element */
import { Product } from "../../Types/Product";
import AddCartBtn from "./Buttons/AddCartBtn";
import ProductImage from "./ProductImage";

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
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product.category}</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">{product.title}</h2>
              <p className="mt-1">${product.price}</p>
            </div>

            <AddCartBtn/>
          </li>
        ))
      }
    </ul>
  )
}

const getProducts = async () => {
  const url = 'https://fakestoreapi.com/products';

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Error while fetching data");

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error)
    return [];
  }
};
