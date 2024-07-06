"use client";

import { useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react';
import { getCollectionData } from '@/components/GetData';
import { Card, CardContent } from "@/components/ui/card"
import { urlFor } from '../lib/sanity';
import Image from 'next/image';
import Link from 'next/link';

const Collection = () => {
    const [products, setProducts] = useState([]);
    const searchParams = useSearchParams();
    const collection = searchParams.get("collection");

    useEffect(() => {
        const fetchData = async () => {
            const products = await getCollectionData(collection);
            setProducts(products);
        };
        fetchData();
    }, [collection]);

    return (
        <div className='h-full'>
            <h1 className='text-black text-5xl text-center py-8'>{collection} Collection</h1>
            <div className='h-full grid grid-cols-2 md:grid-cols-4 gap-6 text-black p-8'>
                {products.map((product, index) => (
                    <Link href={{
                        pathname: `/products/${product.slug}`,
                        query: { slug: product.slug },
                    }} key={index}
                    >
                        <Card className='h-[24vh] sm:h-[32vh] md:h-[38vh] xl:h-[34vh] bg-black/80 border border-black/10 group'>
                            <CardContent className="relative flex flex-col items-center p-4 h-full">
                                <div className="hidden group-hover:flex absolute top-0 z-40 space-x-2 mt-4 justify-start">
                                    {product.categories.map((category, tagIndex) => (
                                        <span key={tagIndex} className="text-sm bg-blue-200 text-blue-800 opacity-70 rounded-sm px-2 py-1">
                                            {category.name}
                                        </span>
                                    ))}
                                </div>
                                <Image
                                    src={urlFor(product.images[0]).url()}
                                    alt={product.name}
                                    width={100}
                                    height={100}
                                    className="mb-4"
                                />
                                <span className="text-[0.7rem] md:text-[1rem] text-white text-center">{product.name}</span>
                                <span className="text-lg text-gray-300">₹{product.price.toFixed(2)}</span>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Collection