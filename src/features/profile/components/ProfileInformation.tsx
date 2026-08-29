import type { Dispatch, SetStateAction } from "react";
import type { UserProfileData } from "../pages/ProfilePage";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../../components/ui/card";
import { Label } from "../../../components/ui/label";
import { Input } from "../../../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../components/ui/select";
import { Button } from "../../../components/ui/button";
import { useAuth } from "../../../context/AuthProvider";

export default function PersonalInformation({ profile, onUpdate }: { profile: UserProfileData; onUpdate: Dispatch<SetStateAction<UserProfileData>> }) {
    const { user } = useAuth()
    return (
        <Card className="border border-muted-foreground  bg-background">
            <CardHeader className="p-6 pb-4">
                <CardTitle className=" text-base font-bold uppercase tracking-wider text-foreground/80">Identity Details</CardTitle>
                <CardDescription className="text-xs">Update your core personal account credentials and properties.</CardDescription>
            </CardHeader>
            <CardContent className="p-6 pt-0 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                        <Label htmlFor="first-name" className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">Given Name</Label>
                        <Input id="first-name" value={user?.firstName} className="h-9 focus-visible:ring-1" />
                    </div>
                    <div className="space-y-1.5">
                        <Label htmlFor="last-name" className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">Surname</Label>
                        <Input id="last-name" value={user?.lastName} className="h-9 focus-visible:ring-1" />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                        <Label htmlFor="profile-email" className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">Primary Contact Email</Label>
                        <Input id="profile-email" type="email" value={user?.email} className="h-9 focus-visible:ring-1" />
                    </div>
                    <div className="space-y-1.5">
                        <Label htmlFor="profile-phone" className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">Contact Telephone</Label>
                        <Input id="profile-phone" type="tel" value={profile.phone} onChange={(e) => onUpdate({ ...profile, phone: e.target.value })} className="h-9 focus-visible:ring-1" />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                        <Label htmlFor="profile-dob" className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">Date of Birth</Label>
                        <Input id="profile-dob" type="date" value={profile.dob} onChange={(e) => onUpdate({ ...profile, dob: e.target.value })} className="h-9 focus-visible:ring-1" />
                    </div>
                    <div className="space-y-1.5">
                        <Label htmlFor="profile-gender" className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">Gender Matrix Mapping</Label>
                        <Select value={profile.gender} onValueChange={(val) => onUpdate({ ...profile, gender: val })}>
                            <SelectTrigger id="profile-gender" className="h-9">
                                <SelectValue placeholder="Select demographic" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Male">Male</SelectItem>
                                <SelectItem value="Female">Female</SelectItem>
                                <SelectItem value="Non-Binary">Non-Binary</SelectItem>
                                <SelectItem value="Undisclosed">Prefer not to say</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="p-6 bg-neutral-50/50 dark:bg-neutral-900/60 border-t border-neutral-100 dark:border-neutral-800 flex justify-end">
                <Button size="sm" className="h-9 text-xs font-semibold px-4 shadow-xs">Save Updates</Button>
            </CardFooter>
        </Card>
    );
}