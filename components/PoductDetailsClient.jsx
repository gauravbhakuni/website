"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { urlFor } from "@/app/lib/sanity";
import { MdShoppingCart } from "react-icons/md";

import { getData, getAllData } from "@/components/GetData";
import { Button } from "@/components/ui/button";
import ImageCarousel from "@/components/ImageCarousel";
import { useCart } from "@/app/context/CartContext";

import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from "next/link";

const getRandomProducts = (products, num) => {
    const shuffled = products.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
};

const ProductDetailsClient = () => {
    const searchParams = useSearchParams();
    const [product, setproduct] = useState();
    const [products, setProducts] = useState([]);
    const [randomProducts, setRandomProducts] = useState([]);
    const { addToCart } = useCart();

    const slug = searchParams.get("slug");

    useEffect(() => {
        const fetchData = async () => {
            const product = await getData(slug);
            setproduct(product);

            const allProducts = await getAllData();
            setProducts(allProducts);
            const randomSubset = getRandomProducts(allProducts, 8);
            setRandomProducts(randomSubset);
        };

        fetchData();
    }, [slug]);

    const handle = () => {
        if (product) {
            addToCart(product);
        } else {
            console.log("Product data is not set yet.");
        }
    };

    return (
        <>
            {product && (
                <div className="h-full bg-white pt-10">
                    <div className="smm:px-4 sm:container h-[8vh] bg-black flex justify-center items-center">
                        <div>
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/products">All Products</BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbPage>{product.name}</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>
                    </div>
                    <div className="max-w-full mx-auto px-4 sm:px-0 md:px-8">
                        <div className="flex flex-col xl:flex-row px-8 items-center justify-evenly py-12 sm:py-24 md:py-32">
                            <div className="h-[40vh] w-[36vh] sm:h-[56vh] sm:w-[50vh] relative">
                                <Image
                                    src={urlFor(product.images[0]).url()}
                                    alt={product.name}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg"
                                />
                            </div>
                            <div className="w-full md:w-full xl:w-1/4 pt-8 xl:pt-0">
                                <h1 className="text-4xl text-black font-light">{product.name}</h1>
                                <p className="pt-4 text-black text-xl">MRP: ₹ {product.price}.00</p>
                                <p className="text-md text-black/80">incl. of taxes</p>
                                <div className="flex flex-col pt-4 pb-4">
                                    <div>
                                        <h1 className="text-black">Select Size (UK) :</h1>
                                    </div>
                                    <div className="flex justify-evenly sm:justify-normal">
                                        <Button variant="outline" className="text-black focus:text-white focus:bg-black w-10 sm:w-20">UK 7</Button>
                                        <Button variant="outline" className="text-black focus:text-white focus:bg-black w-10 sm:w-20">UK 8</Button>
                                        <Button variant="outline" className="text-black focus:text-white focus:bg-black w-10 sm:w-20">UK 9</Button>
                                        <Button variant="outline" className="text-black focus:text-white focus:bg-black w-10 sm:w-20">UK 10</Button>
                                        <Button variant="outline" className="text-black focus:text-white focus:bg-black w-10 sm:w-20">UK 11</Button>
                                    </div>
                                </div>
                                <button onClick={handle} className="bg-black hover:bg-black/60 hover:text-black p-2 sm:p-4">
                                    <div className="flex">
                                        <h1 className="pr-3">Add to Cart</h1>
                                        <span className="py-2">
                                            <MdShoppingCart />
                                        </span>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="h-full py-6 sm:py-0 sm:pb-10 px-8">
                            <h1 className="text-3xl text-black font-bold">Product Description</h1>
                            <p className="pt-4 text-black text-xl">{product.description}</p>
                        </div>
                    </div>
                    <div className="bg-black flex flex-col items-center h-[60vh] sm:h-[50vh] md:h-[70vh] xl:h-[60vh] smm:pt-24 sm:pt-4 md:pt-20 xl:pt-10">
                        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl text-left pb-6">Similar Products</h1>
                        <ImageCarousel products={randomProducts} />
                    </div>
                </div>
            )}
        </>
    )
}

export default ProductDetailsClient