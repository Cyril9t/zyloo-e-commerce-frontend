
import { MoveRight, Sparkles } from 'lucide-react';

import productList from "../../../../components/ui/productList.js"
import b2 from "../../../../assets/bg2.jpg"
import { Button } from '../../../../components/ui/button.js';

function categorySection() {
    return (
        <div className="mx-auto max-w-7xl ">

            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <p className='font-bold flex gap-4 mb-3 mt-20'><Sparkles /> Fashion</p>
                    <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                        Shop by categories
                    </h2>

                    <p className="mt-3 max-w-lg text-muted-foreground">
                        Find exactly what you want
                    </p>
                </div>

                <Button variant="link" className="self-start px-0 sm:self-auto flex">
                    View All <MoveRight />
                </Button>
            </div>
            <div className="mb-1 mt-10 flex gap-6 overflow-x-auto scroll-smooth scrollbar-none pb-4">

                {productList.map((item) => (
                    <div
                        key={item.id}
                        className="mb-22 group relative shrink-0 w-[300px] h-[350px] bg-muted border rounded-3xl overflow-hidden"
                    >

                        <div className="relative h-full overflow-hidden">
                            <img
                                src={b2}
                                alt={item.name}
                                className="relative w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* <Badge
                                variant="outline"
                                className="absolute top-4 left-4 text-white"
                            >
                                
                            </Badge> */}

                        </div>


                        <div className="absolute bg-linear-to-t from-(--color-foreground)  w-full p-5 top-64 bottom-0 text-white">
                            <h3 className="text-2xl font-bold">
                                {item.category}
                            </h3>

                            <p className="text-sm tracking-tight">
                                {item.remainingInStock} Products
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default categorySection;