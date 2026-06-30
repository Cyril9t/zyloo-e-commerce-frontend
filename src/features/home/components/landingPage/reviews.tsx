import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { useRef } from "react";

import { Card } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import testimonials from "../../../../components/ui/reviews";

function Reviews() {

    const scrollRef = useRef<HTMLDivElement | null>(null);



    const nextButton = () => {
        const scroll = scrollRef.current
        if (scroll) {
            const width = scroll.clientWidth

            scroll.scrollBy({
                left: width,
                behavior: "smooth"
            })
        }
    }

    const prevButton = () => {
        const scroll = scrollRef.current;
        if (scroll) {
            const width = scroll.clientWidth;

            scroll.scrollBy({
                left: -width,
                behavior: "smooth"
            })
        }
    }

    return (
        <div className="bg-muted">


            <div className="mx-auto max-w-7xl pt-15 ">

                <section className=" py-16 md:py-12 ">

                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Join thousands of satisfied customers who love shopping with us
                            </p>
                        </div>


                        <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-4 scroll-smooth scrollbar-none">
                            {testimonials.map((testimonial, index) => (
                                <Card
                                    key={index}
                                    className=" min-w-[320px] md:min-w-[380px] bg-background shrink-0 p-6"
                                >
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="w-5 h-5 fill-warning text-warning"
                                            />
                                        ))}
                                    </div>

                                    <p className="mb-6 leading-relaxed text-muted-foreground">
                                        "{testimonial.content}"
                                    </p>

                                    <div className="flex items-center gap-3">
                                        <img
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            className="w-12 h-12 rounded-full object-cover"
                                        />

                                        <div>
                                            <p className="font-semibold">{testimonial.name}</p>
                                            <p className="text-sm text-muted-foreground">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                    <section className="md:flex-row md:items-center   mt-10">
                        <div className="flex gap-4 justify-center ">
                            <Button variant={"outline"} className="p-6 h-20 w-20 rounded-full" onClick={prevButton}>
                                <ArrowLeft />
                            </Button>
                            <Button variant={"default"} className="p-6 h-20 w-20 rounded-full" onClick={nextButton}>
                                <ArrowRight />
                            </Button>
                        </div>
                    </section>
                </section>
            </div>

        </div>

    );
}

export default Reviews;