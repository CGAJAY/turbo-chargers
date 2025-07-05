"use client";
import Link from "next/link";
import React from "react";

const Header = () => {
    return (
        <header>
            <div className="py-6 border-b-2 border-gray-900 text-center">
                <Link href="/">
                    <h1 className="text-3xl font-bold">Turbochargers Shop</h1>
                </Link>
            </div>
        </header>
    );
};

export { Header };
