import { Croissant, MoveRight } from "lucide-react";

import Navbar from "../components/navbar/navbar";
import bg1 from "../../../assets/bg2.jpg";
import HeroSection from "../components/hero-section/hero-section";
import { Button } from "../../../components/ui/button"
import EnhancedProductCard from "../components/landingPage/product"
import Footer from "../components/landingPage/footer";
import CategorySection from "../components/landingPage/categories";
import TrendingNow from "../components/landingPage/trendingNow";
import Reviews from "../components/landingPage/reviews";
import Newsletter from "../components/landingPage/Newsletter";



export default function HomePage() {


    return (
        <div className="" >
            <Navbar />
            <HeroSection />

            <div className="bg-muted">
                <CategorySection />
            </div>
            <div className="">

                <section className=" mx-auto max-w-[85%] px-6 py-16 lg:px-8">
                    {/* Section Header */}
                    <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

                        <div>
                            <p className='font-bold flex gap-4 mb-3'><Croissant /> Collections</p>
                            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                                Curated Collections
                            </h2>

                            <p className="mt-3 max-w-lg text-muted-foreground">
                                Explore our seasonal edits and timeless capsules.
                            </p>
                        </div>

                        <Button variant="link" className="self-start px-0 sm:self-auto flex">
                            View All Collections <MoveRight />
                        </Button>
                    </div>

                    {/* Collections */}
                    <div className="pb-10 grid gap-6 lg:grid-cols-3">
                        {/* Featured Collection */}
                        <div className="group relative overflow-hidden rounded-3xl lg:col-span-2">
                            <img
                                src={bg1}
                                alt="Editorial Collection"
                                className="h-[580px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                            <div className="absolute bottom-8 left-8 z-10 max-w-md text-white">
                                <h3 className="text-3xl font-bold md:text-4xl">
                                    The Editorial Edit
                                </h3>

                                <p className="mt-3 text-white/80">
                                    Elevated basics for the discerning professional.
                                </p>

                                <Button
                                    variant="secondary"
                                    className="mt-6 rounded-full"
                                >
                                    Explore Now →
                                </Button>
                            </div>
                        </div>

                        {/* Right Side */}
                        <div className="flex flex-col gap-6">
                            {/* Essentials */}
                            <div className="group relative overflow-hidden rounded-3xl">
                                <img
                                    src={bg1}
                                    alt="Essentials Collection"
                                    className="h-[280px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                                <div className="absolute bottom-6 left-6 text-white">
                                    <h3 className="text-2xl font-bold">
                                        Essentials
                                    </h3>

                                    <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/80">
                                        Shop Collection
                                    </p>
                                </div>
                            </div>

                            {/* Sale Card */}
                            <div className="flex h-[280px] flex-col items-center justify-center rounded-3xl bg-primary p-8 text-center text-primary-foreground">
                                <h3 className="text-5xl font-bold">
                                    Sale
                                </h3>

                                <p className="mt-4 max-w-xs text-primary-foreground/80">
                                    Up to 40% off archival pieces.
                                </p>

                                <Button
                                    variant="secondary"
                                    className="mt-8 rounded-full"
                                >
                                    Browse Sale
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

            <section className="bg-muted">
                <EnhancedProductCard />
            </section>

            <section>
                <TrendingNow />
            </section>

            <Reviews />

            <Newsletter />

            <div>
                <Footer />
            </div>
        </div >
    )
}




