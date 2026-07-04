import { profile } from "../../../mock/profile";

import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";

export default function ProfileInfo() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Personal Information</CardTitle>
            </CardHeader>

            <CardContent className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                    <Label>First Name</Label>
                    <Input defaultValue={profile.firstName} />
                </div>

                <div className="space-y-2">
                    <Label>Last Name</Label>
                    <Input defaultValue={profile.lastName} />
                </div>

                <div className="space-y-2 md:col-span-2">
                    <Label>Email</Label>
                    <Input
                        type="email"
                        defaultValue={profile.email}
                    />
                </div>

                <div className="space-y-2 md:col-span-2">
                    <Label>Phone Number</Label>
                    <Input defaultValue={profile.phone} />
                </div>
            </CardContent>
        </Card>
    );
}