import ProductCard from "../../products/components/ProductCard";
import { useAuth } from "../../../context/AuthProvider";
import { Link } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { MoveRightIcon, Zap } from "lucide-react";
import { PATHS } from "../../../routes/paths";



export default function FeaturedProducts() {
    const { products } = useAuth()
    return (
        <section className="container-page py-6 md:py-8 lg:py-10 mt-4 md:mt-6 lg:mt-8">

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">Featured Products</h2>



            <div className="mb-6 md:mb-7 lg:mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    {/* <p className='font-bold flex gap-4 mb-3 mt-20'><Zap /> Flash Sale</p>
                          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                              Limited Time Deals
                          </h2> */}

                    <p className="mt-2 text-sm md:text-base text-muted-foreground">
                        Discover our most popular products.
                    </p>
                </div>

                <Link to={PATHS.customer.products}>
                    <Button variant="link" className="self-start px-0 sm:self-auto flex text-sm md:text-base">
                        View All <MoveRightIcon className="ml-2 h-4 w-4" />
                    </Button>
                </Link>
            </div>
            <div className="grid gap-4 sm:gap-5 md:gap-6 lg:gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {products?.splice(0, 4)?.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}