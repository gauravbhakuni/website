"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { useCart } from "../context/CartContext";
import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import { motion } from "framer-motion";
import { MdDelete, MdShoppingCart } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import Link from "next/link";

const Cart = () => {
    const { cartItems, cartQuantities, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

    const calculateTotal = () => {
        return cartItems.reduce((total, item, index) => {
            return total + (item.price * cartQuantities[index]);
        }, 0);
    };

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
            <div className="container mx-auto px-4">
                {cartItems.length === 0 ? (
                    <motion.div 
                        className="flex flex-col items-center justify-center gap-6 py-20"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <MdShoppingCart className="text-7xl text-gray-400" />
                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">Your Cart is Empty</h1>
                        <p className="text-gray-600 text-center max-w-md">
                            Looks like you have not added anything to your cart yet.
                        </p>
                        <Link 
                            href="/products"
                            className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-900 transition-colors"
                        >
                            Continue Shopping
                        </Link>
                    </motion.div>
                ) : (
                    <motion.div 
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="max-w-6xl mx-auto"
                    >
                        <motion.h1 
                            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center"
                            variants={item}
                        >
                            Shopping Cart
                        </motion.h1>

                        <div className="flex flex-col lg:flex-row gap-8">
                            {/* Cart Items */}
                            <div className="flex-grow">
                                <ScrollArea className="h-[60vh] pr-4">
                                    <motion.ul 
                                        variants={container}
                                        className="space-y-4"
                                    >
                                        {cartItems.map((item, index) => (
                                            <motion.li 
                                                key={index}
                                                variants={item}
                                                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4"
                                            >
                                                <div className="flex flex-col sm:flex-row items-center gap-4">
                                                    {/* Product Image */}
                                                    <div className="relative w-32 h-32 bg-gray-50 rounded-lg overflow-hidden">
                                                        <Image
                                                            src={urlFor(item.images[0]).url()}
                                                            alt={item.name}
                                                            fill
                                                            className="object-contain p-2"
                                                        />
                                                    </div>

                                                    {/* Product Details */}
                                                    <div className="flex-grow space-y-1">
                                                        <h3 className="font-semibold text-gray-900">{item.name}</h3>
                                                        <p className="text-sm text-gray-600">Size: UK {item.selectedSize}</p>
                                                        <p className="font-medium text-gray-900">₹{item.price.toFixed(2)}</p>
                                                    </div>

                                                    {/* Quantity Controls */}
                                                    <div className="flex items-center gap-3 bg-gray-50 rounded-lg px-3 py-2">
                                                        <button 
                                                            onClick={() => decreaseQuantity(item)}
                                                            className="text-gray-500 hover:text-gray-700"
                                                        >
                                                            <FiMinus />
                                                        </button>
                                                        <span className="w-8 text-center font-medium">
                                                            {cartQuantities[index]}
                                                        </span>
                                                        <button 
                                                            onClick={() => increaseQuantity(item)}
                                                            className="text-gray-500 hover:text-gray-700"
                                                        >
                                                            <IoIosAdd />
                                                        </button>
                                                    </div>

                                                    {/* Total and Remove */}
                                                    <div className="flex flex-col items-end gap-2">
                                                        <p className="font-semibold text-gray-900">
                                                            ₹{(item.price * cartQuantities[index]).toFixed(2)}
                                                        </p>
                                                        <button
                                                            onClick={() => removeFromCart(item)}
                                                            className="text-red-500 hover:text-red-700 flex items-center gap-1 text-sm"
                                                        >
                                                            <MdDelete />
                                                            <span>Remove</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </motion.li>
                                        ))}
                                    </motion.ul>
                                </ScrollArea>
                            </div>

                            {/* Order Summary */}
                            <motion.div 
                                variants={item}
                                className="lg:w-80 bg-white rounded-xl shadow-sm p-6 h-fit"
                            >
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>
                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between text-gray-600">
                                        <span>Subtotal</span>
                                        <span>₹{calculateTotal().toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>Shipping</span>
                                        <span>Free</span>
                                    </div>
                                    <div className="border-t pt-3">
                                        <div className="flex justify-between font-semibold text-gray-900">
                                            <span>Total</span>
                                            <span>₹{calculateTotal().toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>
                                <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition-colors">
                                    Proceed to Checkout
                                </button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Cart;
