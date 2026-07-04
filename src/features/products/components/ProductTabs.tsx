import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "../../../components/ui/tabs";

export default function ProductTabs() {
    return (
        <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">
                    Description
                </TabsTrigger>

                <TabsTrigger value="specifications">
                    Specifications
                </TabsTrigger>

                <TabsTrigger value="reviews">
                    Reviews
                </TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-6">
                <p className="leading-7 text-muted-foreground">
                    Experience premium sound quality with advanced noise cancellation,
                    crystal-clear audio, and exceptional comfort for all-day use.
                </p>
            </TabsContent>

            <TabsContent value="specifications" className="mt-6">
                <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                    <li>Bluetooth 5.3</li>
                    <li>40-hour battery life</li>
                    <li>USB-C fast charging</li>
                    <li>Active Noise Cancellation</li>
                </ul>
            </TabsContent>

            <TabsContent value="reviews" className="mt-6">
                <p className="text-muted-foreground">
                    ⭐⭐⭐⭐⭐ 4.8/5 from 125 verified customers.
                </p>
            </TabsContent>
        </Tabs>
    );
}