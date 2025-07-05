"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const ProductGallery = ({
    images,
    name,
}: {
    images: string[];
    name: string;
}) => {
    const [mainImage, setMainImage] = useState(images[0]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        const nextIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(nextIndex);
        setMainImage(images[nextIndex]);
    };

    const handlePrev = () => {
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        setCurrentIndex(prevIndex);
        setMainImage(images[prevIndex]);
    };
    return (
        <div>
            <Image
                src={mainImage}
                alt={`${name} main image`}
                width={500}
                height={400}
                className="mb-4 rounded shadow"
            />

            <div className="flex items-center justify-between mb-4">
                <Button onClick={handlePrev}>Prev</Button>
                <div className="flex gap-2 overflow-x-auto">
                    {images.map((img, i) => (
                        <Image
                            key={i}
                            src={img}
                            alt={`${name} thumb ${i + 1}`}
                            width={80}
                            height={60}
                            onClick={() => {
                                setMainImage(img);
                                setCurrentIndex(i);
                            }}
                            className={`cursor-pointer rounded border-2 ${
                                mainImage === img
                                    ? "border-blue-500"
                                    : "border-transparent"
                            }`}
                        />
                    ))}
                </div>
                <Button onClick={handleNext}>Next</Button>
            </div>
        </div>
    );
};

export { ProductGallery };
