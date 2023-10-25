'use client'

import Image from "next/image";
import { useState } from "react";
import { ProductImage } from "../../../Types/Product";


export default function ProductImage({product, fill} : ProductImage) {

  const [loading, setLoading] = useState(true);

  return fill ? (
    <Image
      className={ `object-cover ${ 
        loading ? 'scale-110  blur-3xl grayscale' : 'scale-100 blur-0 grayscale-0' 
      }` }
      src={ product.image }
      alt={ product.title }
      fill
      onLoadingComplete={ () => setLoading(false) }
    />
  ) : (
    <Image
      className={ `object-cover ${ 
        loading ? 'scale-110  blur-3xl grayscale' : 'scale-100 blur-0 grayscale-0' 
      }` }
      src={ product.image }
      alt={ product.title }
      width={ 400 }
      height={ 700 }
      onLoadingComplete={() => setLoading(false)}
    />
  ); 
}
