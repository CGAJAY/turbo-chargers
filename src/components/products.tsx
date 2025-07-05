"use client";

import { ProductCard } from "./productCard";
import { products } from "@/constants/index";

const Products = () => {
    return (
        <section className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </section>
    );
};

export { Products };
