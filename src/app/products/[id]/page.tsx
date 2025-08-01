import { notFound } from "next/navigation";
import { products } from "@/constants";
import { ProductGallery } from "@/components/productGallery";
import { ProductSpecs } from "@/components/productSpecs";
import { ProductNotes } from "@/components/productNotes";

// Define the props type to handle async params
interface ProductDetailProps {
    params: Promise<{ id: string }>; // Use Promise for params
}

const ProductDetail = async ({ params }: ProductDetailProps) => {
    // Await the params to resolve the Promise
    const { id } = await params;
    const product = products.find((p) => p.id === id);
    if (!product) return notFound();

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="grid md:grid-cols-2 gap-8">
                <ProductGallery images={product.images} name={product.name} />

                <div>
                    <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
                    <p className="text-gray-700 mb-4">{product.description}</p>

                    <h2 className="font-semibold mb-2">
                        Turbo Configurations:
                    </h2>
                    <ProductSpecs specs={product.specs} />

                    <ProductNotes notes={product.notes} />
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
