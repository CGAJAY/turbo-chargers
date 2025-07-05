"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/index";

const ProductCard = ({ product }: { product: Product }) => {
    return (
        <Link href={`/products/${product.id}`}>
            <div className="rounded-xl shadow-lg overflow-hidden bg-white hover:scale-105 transition p-4">
                <Image
                    src={product.images[0]}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="rounded-md object-cover"
                />
                <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
                <p className="text-sm text-gray-600 mt-1">
                    {product.description.slice(0, 60)}...
                </p>
            </div>
        </Link>
    );
};

export { ProductCard };
