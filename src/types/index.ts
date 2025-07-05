export interface Product {
    id: string;
    name: string;
    description: string;
    images: string[];
    specs: {
        turbine: string;
        ar: string;
        compressor: string;
    }[];
    notes: string[];
}
