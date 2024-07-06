"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { urlFor } from "@/app/lib/sanity";
import { getAllData } from "@/components/GetData";
import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [sortType, setSortType] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const allProducts = await getAllData();
      setProducts(allProducts);
    };

    fetchData();
  }, []);

  const handleSortChange = (e) => {
    const sortValue = e.target.value;
    setSortType(sortValue);
    sortProducts(sortValue);
  };

  const sortProducts = (type) => {
    let sortedProducts = [...products];
    if (type === "Price - Low to High") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (type === "Price - High to Low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (type === "Featured") {
      sortedProducts.sort(() => Math.random() - 0.5);
    }
    setProducts(sortedProducts);
  };

  return (
    <div className="pt-8 bg-white">
      <div className="smm:px-4 sm:container mt-6 h-[8vh] bg-black flex justify-between items-center">
        <div>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>All Products</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div>
          <select
            className="mt-2 w-full bg-black/80 border rounded shadow-lg z-10"
            onChange={handleSortChange}
            value={sortType}
          >
            <option disabled value="">
              Sort By
            </option>
            <option>Featured</option>
            <option>Price - Low to High</option>
            <option>Price - High to Low</option>
          </select>
        </div>
      </div>

      <div className="h-full">
        <h1 className="text-black text-5xl text-center py-8">All Products</h1>
        <div className="h-full grid grid-cols-2 md:grid-cols-4 gap-6 text-black p-8">
          {products.map((product) => (
            <Link
              key={product._id}
              href={{
                pathname: `/products/${product.slug}`,
                query: { slug: product.slug },
              }}
            >
              <Card className="h-[24vh] sm:h-[32vh] md:h-[38vh] xl:h-[34vh] bg-black/80 border border-black/10 group">
                <CardContent className="relative flex flex-col items-center p-4 h-full">
                  <div className="hidden group-hover:flex absolute top-0 z-40 space-x-2 mt-4 justify-start">
                    {product.categories.map((category) => (
                      <span
                        key={category._id}
                        className="text-sm bg-blue-200 text-blue-800 opacity-70 rounded-sm px-2 py-1"
                      >
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
                  <span className="text-[0.7rem] md:text-[1rem] text-white text-center">
                    {product.name}
                  </span>
                  <span className="text-lg text-gray-300">
                    ₹{product.price.toFixed(2)}
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
