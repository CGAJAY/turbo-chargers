import { Product } from "@/types/index";

const ProductSpecs = ({ specs }: { specs: Product["specs"] }) => {
    return (
        <table className="w-full text-sm mb-4 border">
            <thead>
                <tr className="bg-gray-100">
                    <th className="p-2 border">Turbine Wheel</th>
                    <th className="p-2 border">AR</th>
                    <th className="p-2 border">Compressor</th>
                </tr>
            </thead>
            <tbody>
                {specs.map((s, i) => (
                    <tr key={i} className="border-t">
                        <td className="p-2 border">{s.turbine}</td>
                        <td className="p-2 border text-center">{s.ar}</td>
                        <td className="p-2 border text-center">
                            {s.compressor}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export { ProductSpecs };
