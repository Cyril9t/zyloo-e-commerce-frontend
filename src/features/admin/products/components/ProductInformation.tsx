
import { CardContent, CardDescription, CardHeader, CardTitle } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Textarea } from "../../../../components/ui/textarea";


export default function ProductInformation({ register, errors }: any) {

    return (
        <div className="border-none bg-white dark:bg-neutral-900/20 shadow-2xs">
            <CardHeader className="p-6 pb-10 mt-3">
                <CardTitle className="text-xl font-bold uppercase tracking-wider ">Product Specification Matrix</CardTitle>
                <CardDescription className="">Configure identity markers and detailed text copy blocks mapping to digital storefront views.</CardDescription>
            </CardHeader>

            <CardContent className="p-6 pt-0 space-y-4">
                <form className="flex flex-col space-y-5">

                    <div className="space-y-2">
                        <Label htmlFor="prod-name" className=" font-semibold">Formal Product Designation Name</Label>
                        <div className="flex flex-col">
                            <Input id="prod-name" {...register("name")} placeholder="e.g., Silk Structural Blazer" className=" focus-visible:ring-1 focus-visible:ring-neutral-950" />
                            <small className="text-destructive">{errors.name?.message}</small>
                        </div>
                    </div>


                    <div className="space-y-2">

                        <div className="flex flex-col">

                            <div className="flex justify-between items-center">

                                <Label htmlFor="prod-full-desc" {...register("description")} className="text-xs font-semibold">Comprehensive Storefront Rich Manifest Description</Label>
                                <span className="text-[10px] text-neutral-400 font-medium">Rich-Text Editor Layer Engaged</span>
                            </div>
                            <Textarea id="prod-full-desc" {...register("description")} placeholder="Describe materials, cut, design philosophy, structural maintenance instructions..." className="min-h-[140px] focus-visible:ring-1 resize-y leading-relaxed" />
                            <small className="text-destructive">
                                {errors.description?.message}
                            </small>
                        </div>
                    </div>

                    <div className="pt-2">
                        <Label htmlFor="prod-brand" className="text-xs font-semibold">Product Category</Label>
                        <div className="flex flex-col">
                            <Input id="prod-brand" {...register("category")} placeholder="e.g., Footwear.." className="h-9" />
                            <small className="text-destructive">{errors.category?.message}</small>
                        </div>

                    </div>


                    <div className="space-y-2 pt-2">
                        <Label htmlFor="prod-tags" className="text-xs font-semibold">Search Engine Collection Tokens (Tags)</Label>
                        <div className="flex flex-wrap gap-1.5 p-2 bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200/70 dark:border-neutral-800/70 rounded-md min-h-9 items-center">

                            <input
                                id="prod-tags"
                                type="text"
                                placeholder="Add tag..."
                                {...register("tagName")}
                                className="flex-1 min-w-[120px] bg-transparent outline-none border-none shadow-none text-xs text-neutral-700 dark:text-neutral-300 px-1 py-0.5"
                            />
                            <small className="text-destructive">{errors.tagName?.message}</small>
                        </div>
                    </div>

                    {/* <div className="justify-end text-end mt-5">
                        <Button type="submit" variant={"default"} >
                            Done
                        </Button>
                    </div> */}
                </form>
            </CardContent>
        </div>
    );
}