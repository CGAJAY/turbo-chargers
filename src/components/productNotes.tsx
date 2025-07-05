const ProductNotes = ({ notes }: { notes: string[] }) => {
    return (
        <ul className="list-disc pl-6 text-sm text-orange-700">
            {notes.map((note, i) => (
                <li key={i} className="mb-1">
                    {note}
                </li>
            ))}
        </ul>
    );
};

export { ProductNotes };
