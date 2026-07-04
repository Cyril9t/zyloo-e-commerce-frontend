import ProductGallery from "../components/ProductGallery";
import ProductInfo from "../components/ProductInfo";
import ProductTabs from "../components/ProductTabs";
import RelatedProducts from "../components/RelatedProducts";

export default function ProductDetailPage() {
    return (
        <section className="container-page py-10">
            <div className="grid gap-12 lg:grid-cols-2">
                <ProductGallery />
                <ProductInfo />
            </div>

            <div className="mt-16">
                <ProductTabs />
            </div>

            <RelatedProducts />
        </section>
    );
}