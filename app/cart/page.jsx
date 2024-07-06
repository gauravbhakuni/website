"use client";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useCart } from "../context/CartContext";
import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";

const Cart = () => {
    const { cartItems, removeFromCart } = useCart();
    console.log(cartItems);

    return (
        <>
            <div className="flex h-screen bg-white text-black justify-center items-center">
                {cartItems.length === 0 ? (
                    <h1 className="text-4xl text-black font-bold text-center">Cart is Empty</h1>
                ) : (
                    <div className="flex flex-col gap-[30px] w-[150vh] text-center xl:text-left">
                        <h3 className="text-4xl text-center font-bold">Your Cart</h3>
                        <ScrollArea className="px-6 h-[50vh]">
                            <ul className="grid grid-cols-1 gap-[30px]">
                                {cartItems.map((item, index) => (
                                    <li key={index} className="border px-4 border-black grid grid-cols-6">
                                        <Image
                                            src={urlFor(item.images[0]).url()}
                                            alt={item.name}
                                            width={40}
                                            height={40}
                                            className="xl:mb-4"
                                        />
                                        <h4 className="text-sm py-5 font-bold">{item.name}</h4>
                                        <p className="text-sm py-5">MRP: ₹{item.price}</p>
                                        <p className="text-sm py-5">count: 1</p>
                                        <button
                                            onClick={() => removeFromCart(item)}
                                            className="bg-red-500 my-5 text-white rounded hover:bg-red-700"
                                        >
                                            Remove
                                        </button>
                                        <button
                                            onClick={() => removeFromCart(item)}
                                            className="bg-green-500 my-5 text-white rounded hover:bg-green-700"
                                        >
                                            Checkout
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            <ScrollBar orientation="vertical" />
                        </ScrollArea>
                    </div>
                )}
            </div>
        </>
    );
};

export default Cart;
