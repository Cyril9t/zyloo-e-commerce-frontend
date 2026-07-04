export default function ProductGallery() {
    return (
        <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-2xl border bg-muted">
                <img
                    src="https://picsum.photos/800"
                    alt="Product"
                    className="h-full w-full object-cover"
                />
            </div>

            <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((item) => (
                    <div
                        key={item}
                        className="aspect-square cursor-pointer overflow-hidden rounded-xl border"
                    >
                        <img
                            src={`https://picsum.photos/200?random=${item}`}
                            alt=""
                            className="h-full w-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}