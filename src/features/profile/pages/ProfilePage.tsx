import * as React from "react";
import {
    User,
    ShoppingBag,
    Heart,
    MapPin,
    CreditCard,
    Bell,
    ShieldCheck,
    LogOut,
    Trash2,
    Camera,
    Plus,
    Edit2,
    Eye,
    ChevronRight,
    CheckCircle2,
    Clock,
    XCircle,
    AlertTriangle,
    Star,
    Smartphone,
    Laptop,
    Lock,
    KeyRound
} from "lucide-react";

// ==========================================
// SHADCN/UI PRIMITIVES (Mocked Implementation Paths)
// ==========================================
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../../../components/ui/avatar";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Separator } from "../../../components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../components/ui/table";
import { Progress } from "../../../components/ui/progress";
import { Switch } from "../../../components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs";
import { ScrollArea } from "../../../components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../components/ui/select";

// ==========================================
// TYPES & INTERFACES
// ==========================================
export interface UserProfileData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dob: string;
    gender: string;
    memberSince: string;
    loyaltyLevel: string;
    completionPercentage: number;
    avatarUrl: string;
}

export interface OrderRecord {
    id: string;
    date: string;
    status: 'Delivered' | 'Processing' | 'Cancelled' | 'Pending';
    itemsCount: number;
    totalAmount: number;
}

export interface WishlistItem {
    id: string;
    name: string;
    price: number;
    rating: number;
    image: string;
}

export interface AddressItem {
    id: string;
    type: 'Home' | 'Office';
    fullName: string;
    street: string;
    cityStateZip: string;
    isDefault: boolean;
}

export interface PaymentCard {
    id: string;
    brand: 'Visa' | 'Mastercard' | 'Amex';
    last4: string;
    expiry: string;
    isDefault: boolean;
}

// ==========================================
// PRODUCTION MOCK DATA SOURCE
// ==========================================
const MOCK_PROFILE: UserProfileData = {
    firstName: "Alexander",
    lastName: "Vanguard",
    email: "a.vanguard@studio.design",
    phone: "+1 (555) 234-5678",
    dob: "1994-08-24",
    gender: "Male",
    memberSince: "October 2023",
    loyaltyLevel: "Platinum Elite",
    completionPercentage: 85,
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&q=80"
};

const MOCK_ORDERS: OrderRecord[] = [
    { id: "ZY-9021", date: "Jul 08, 2026", status: "Delivered", itemsCount: 3, totalAmount: 595.00 },
    { id: "ZY-8841", date: "Jun 22, 2026", status: "Processing", itemsCount: 1, totalAmount: 340.00 },
    { id: "ZY-7612", date: "Apr 14, 2026", status: "Delivered", itemsCount: 2, totalAmount: 180.00 },
    { id: "ZY-6099", date: "Feb 02, 2026", status: "Cancelled", itemsCount: 1, totalAmount: 95.00 }
];

const MOCK_WISHLIST: WishlistItem[] = [
    { id: "w1", name: "Minimalist Merino Sweater", price: 180, rating: 5, image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=300&q=80" },
    { id: "w2", name: "Bespoke Leather Chelsea Boot", price: 340, rating: 4, image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=300&q=80" }
];

const MOCK_ADDRESSES: AddressItem[] = [
    { id: "a1", type: "Home", fullName: "Alexander Vanguard", street: "742 Evergreen Terrace", cityStateZip: "Springfield, OR 97477", isDefault: true },
    { id: "a2", type: "Office", fullName: "Vanguard Studio LLC", street: "100 Broadway Suite 4B", cityStateZip: "New York, NY 10005", isDefault: false }
];

const MOCK_PAYMENTS: PaymentCard[] = [
    { id: "p1", brand: "Visa", last4: "4242", expiry: "12/29", isDefault: true },
    { id: "p2", brand: "Amex", last4: "8007", expiry: "04/28", isDefault: false }
];

// ==========================================
// MAIN PARENT PROFILE COMPONENT
// ==========================================
export default function ProfilePage() {
    const [activeSection, setActiveSection] = React.useState<string>("profile");
    const [profileData, setProfileData] = React.useState<UserProfileData>(MOCK_PROFILE);

    return (
        <div className="w-full min-h-screen bg-neutral-50/50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 antialiased font-sans transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

                {/* Responsive Grid Setup */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* Left Hand Navigation / Card Column */}
                    <div className="lg:col-span-4 xl:col-span-3 space-y-6 lg:sticky lg:top-6">
                        <ProfileOverview profile={profileData} />
                        <ProfileSidebarNav activeSection={activeSection} onSectionChange={setActiveSection} />
                    </div>

                    {/* Right Hand Content Inset Panel */}
                    <div className="lg:col-span-8 xl:col-span-9 space-y-8">

                        {/* Tab Content Matching Left Panel Section Identifiers */}
                        {activeSection === "profile" && (
                            <>
                                <ProfileHeader title="My Profile" description="Manage your basic system identifiers, profile metadata, and visual configuration." />
                                <PersonalInformation profile={profileData} onUpdate={setProfileData} />
                            </>
                        )}

                        {activeSection === "orders" && (
                            <>
                                <ProfileHeader title="Order Registry" description="Review historical billing actions, logistical workflows, and complete receipts." />
                                <RecentOrders />
                            </>
                        )}

                        {activeSection === "wishlist" && (
                            <>
                                <ProfileHeader title="Curated Wishlist" description="Items saved for future reference and real-time inventory triggers." />
                                <WishlistPreview />
                            </>
                        )}

                        {activeSection === "addresses" && (
                            <>
                                <ProfileHeader title="Fulfillment Address Book" description="Manage primary, functional logistical drop locations." />
                                <AddressBook />
                            </>
                        )}

                        {activeSection === "payments" && (
                            <>
                                <ProfileHeader title="Stored Wallet Ledger" description="Manage tokenized corporate credit profiles and default clearing options." />
                                <PaymentMethods />
                            </>
                        )}

                        {activeSection === "notifications" && (
                            <>
                                <ProfileHeader title="Communication Matrix" description="Configure transactional, SMS, webhooks, and structural notification models." />
                                <NotificationPreferences />
                            </>
                        )}

                        {activeSection === "security" && (
                            <>
                                <ProfileHeader title="Device Security Access" description="Monitor encryption status, MFA controls, and cryptographically verified sessions." />
                                <SecuritySettings />
                            </>
                        )}

                        {/* Universal Layout Footer Actions Segment */}
                        <Separator className="bg-neutral-200/60 dark:bg-neutral-800/60" />
                        <AccountActions />
                    </div>
                </div>

            </div>
        </div>
    );
}

// ==========================================
// REUSABLE PRESENTATION UTILITIES / HELPER COMPONENTS
// ==========================================

function ProfileHeader({ title, description }: { title: string; description: string }) {
    return (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-neutral-200/60 dark:border-neutral-800/60">
            <div>
                <h1 className="text-2xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50">{title}</h1>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">{description}</p>
            </div>
            <Button variant="outline" size="sm" className="w-fit border-neutral-200 dark:border-neutral-800 shadow-xs hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors">
                <Edit2 className="h-3.5 w-3.5 mr-2 text-neutral-400" />
                Quick Actions
            </Button>
        </div>
    );
}

function ProfileOverview({ profile }: { profile: UserProfileData }) {
    return (
        <Card className="border border-neutral-200/60 dark:border-neutral-800/60 shadow-xs bg-white dark:bg-neutral-900/40 overflow-hidden">
            <CardContent className="p-6 text-center flex flex-col items-center">

                {/* Immersive Avatar Container */}
                <div className="relative group cursor-pointer mb-4">
                    <Avatar className="h-24 w-24 ring-4 ring-neutral-100 dark:ring-neutral-800/50 transition-transform duration-300 group-hover:scale-[1.02]">
                        <AvatarImage src={profile.avatarUrl} alt={profile.firstName} />
                        <AvatarFallback className="text-lg bg-neutral-100 dark:bg-neutral-800">{profile.firstName[0]}</AvatarFallback>
                    </Avatar>
                    <div className="absolute bottom-0 right-0 p-1.5 bg-neutral-950 dark:bg-neutral-50 rounded-full text-white dark:text-black border border-white dark:border-neutral-900 shadow-sm transition-opacity opacity-90 group-hover:opacity-100">
                        <Camera className="h-3.5 w-3.5" />
                    </div>
                </div>

                <h2 className="text-lg font-bold text-neutral-950 dark:text-neutral-50 tracking-tight">{profile.firstName} {profile.lastName}</h2>
                <p className="text-xs text-neutral-400 dark:text-neutral-500 font-mono mt-0.5">{profile.email}</p>

                <Badge variant="secondary" className="mt-3 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 px-3 py-0.5 text-[11px] font-semibold tracking-wide uppercase border border-neutral-200/40 dark:border-neutral-700/40">
                    {profile.loyaltyLevel}
                </Badge>

                {/* Progress Verification Metric */}
                <div className="w-full mt-6 space-y-1.5 text-left">
                    <div className="flex justify-between text-xs">
                        <span className="text-neutral-400 dark:text-neutral-500 font-medium">Profile Integrity</span>
                        <span className="font-bold text-neutral-700 dark:text-neutral-300">{profile.completionPercentage}%</span>
                    </div>
                    <Progress value={profile.completionPercentage} className="h-1.5 bg-neutral-100 dark:bg-neutral-800" />
                </div>

                {/* Micro Statistics Dashboard */}
                <div className="grid grid-cols-4 w-full gap-2 mt-6 pt-5 border-t border-neutral-100 dark:border-neutral-800/80">
                    <div className="text-center">
                        <span className="block text-sm font-bold tracking-tight text-neutral-950 dark:text-neutral-50">12</span>
                        <span className="text-[10px] text-neutral-400 font-medium uppercase tracking-wider">Orders</span>
                    </div>
                    <div className="text-center">
                        <span className="block text-sm font-bold tracking-tight text-neutral-950 dark:text-neutral-50">8</span>
                        <span className="text-[10px] text-neutral-400 font-medium uppercase tracking-wider">Saved</span>
                    </div>
                    <div className="text-center">
                        <span className="block text-sm font-bold tracking-tight text-neutral-950 dark:text-neutral-50">4</span>
                        <span className="text-[10px] text-neutral-400 font-medium uppercase tracking-wider">Reviews</span>
                    </div>
                    <div className="text-center">
                        <span className="block text-sm font-bold tracking-tight text-neutral-950 dark:text-neutral-50">2.5k</span>
                        <span className="text-[10px] text-neutral-400 font-medium uppercase tracking-wider">Points</span>
                    </div>
                </div>

                {/* Structural Metadata Block */}
                <div className="w-full text-left bg-neutral-50/50 dark:bg-neutral-900/20 border border-neutral-100 dark:border-neutral-800/50 rounded-lg p-3 mt-5 space-y-1.5 text-xs">
                    <div className="flex justify-between"><span className="text-neutral-400 font-medium">Phone:</span> <span className="text-neutral-700 dark:text-neutral-300 font-medium">{profile.phone}</span></div>
                    <div className="flex justify-between"><span className="text-neutral-400 font-medium">Joined:</span> <span className="text-neutral-700 dark:text-neutral-300 font-medium">{profile.memberSince}</span></div>
                </div>

            </CardContent>
        </Card>
    );
}

function ProfileSidebarNav({ activeSection, onSectionChange }: { activeSection: string; onSectionChange: (sec: string) => void }) {
    const navItems = [
        { id: "profile", label: "Profile Metadata", icon: User },
        { id: "orders", label: "Order Registry", icon: ShoppingBag },
        { id: "wishlist", label: "Curated Wishlist", icon: Heart },
        { id: "addresses", label: "Address Book", icon: MapPin },
        { id: "payments", label: "Payment Wallet", icon: CreditCard },
        { id: "notifications", label: "Notifications", icon: Bell },
        { id: "security", label: "Access Security", icon: ShieldCheck }
    ];

    return (
        <nav className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 gap-1 scrollbar-none border-b lg:border-none border-neutral-200">
            {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                    <button
                        key={item.id}
                        type="button"
                        onClick={() => onSectionChange(item.id)}
                        className={cn(
                            "flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs font-semibold whitespace-nowrap tracking-wide transition-all duration-200 text-left cursor-pointer",
                            isActive
                                ? "bg-neutral-900 dark:bg-neutral-50 text-white dark:text-neutral-950 shadow-sm"
                                : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-50 hover:bg-neutral-100/70 dark:hover:bg-neutral-900/60"
                        )}
                    >
                        <Icon className={cn("h-4 w-4 shrink-0", isActive ? "text-current" : "text-neutral-400")} />
                        <span>{item.label}</span>
                    </button>
                );
            })}
        </nav>
    );
}

function PersonalInformation({ profile, onUpdate }: { profile: UserProfileData; onUpdate: React.Dispatch<React.SetStateAction<UserProfileData>> }) {
    return (
        <Card className="border border-neutral-200/60 dark:border-neutral-800/60 bg-white dark:bg-neutral-900/20">
            <CardHeader className="p-6 pb-4">
                <CardTitle className="text-base font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">Identity Details</CardTitle>
                <CardDescription className="text-xs">Update your core personal account credentials and properties.</CardDescription>
            </CardHeader>
            <CardContent className="p-6 pt-0 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                        <Label htmlFor="first-name" className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">Given Name</Label>
                        <Input id="first-name" value={profile.firstName} onChange={(e) => onUpdate({ ...profile, firstName: e.target.value })} className="h-9 focus-visible:ring-1" />
                    </div>
                    <div className="space-y-1.5">
                        <Label htmlFor="last-name" className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">Surname</Label>
                        <Input id="last-name" value={profile.lastName} onChange={(e) => onUpdate({ ...profile, lastName: e.target.value })} className="h-9 focus-visible:ring-1" />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                        <Label htmlFor="profile-email" className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">Primary Contact Email</Label>
                        <Input id="profile-email" type="email" value={profile.email} onChange={(e) => onUpdate({ ...profile, email: e.target.value })} className="h-9 focus-visible:ring-1" />
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

function RecentOrders() {
    return (
        <Card className="border border-neutral-200/60 dark:border-neutral-800/60 bg-white dark:bg-neutral-900/20 overflow-hidden">
            <ScrollArea className="w-full overflow-x-auto">
                <Table className="min-w-[650px]">
                    <TableHeader className="bg-neutral-50/70 dark:bg-neutral-900/60 border-b border-neutral-200/50">
                        <TableRow>
                            <TableHead className="text-[11px] font-bold uppercase tracking-wider h-10">Order Reference</TableHead>
                            <TableHead className="text-[11px] font-bold uppercase tracking-wider h-10">Timestamp</TableHead>
                            <TableHead className="text-[11px] font-bold uppercase tracking-wider h-10">Workflow Status</TableHead>
                            <TableHead className="text-[11px] font-bold uppercase tracking-wider h-10">Manifest Quantity</TableHead>
                            <TableHead className="text-[11px] font-bold uppercase tracking-wider h-10 text-right">Settlement Total</TableHead>
                            <TableHead className="h-10 w-[80px]"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {MOCK_ORDERS.map((order) => (
                            <TableRow key={order.id} className="border-b border-neutral-100 dark:border-neutral-800/60 hover:bg-neutral-50/40 dark:hover:bg-neutral-900/40 transition-colors">
                                <TableCell className="font-mono text-xs font-bold text-neutral-950 dark:text-neutral-50 py-3">{order.id}</TableCell>
                                <TableCell className="text-xs text-neutral-500 font-medium">{order.date}</TableCell>
                                <TableCell className="py-3">
                                    <StatusBadge status={order.status} />
                                </TableCell>
                                <TableCell className="text-xs text-neutral-600 dark:text-neutral-400 font-mono">{order.itemsCount} {order.itemsCount === 1 ? 'Object' : 'Objects'}</TableCell>
                                <TableCell className="text-xs font-mono font-bold text-neutral-950 dark:text-neutral-50 text-right">${order.totalAmount.toFixed(2)}</TableCell>
                                <TableCell className="py-3 text-right">
                                    <Button variant="ghost" size="icon" className="h-7 w-7 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                                        <Eye className="h-3.5 w-3.5 text-neutral-400 hover:text-neutral-900" />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </ScrollArea>
        </Card>
    );
}

function StatusBadge({ status }: { status: OrderRecord['status'] }) {
    const styles = {
        Delivered: "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border-emerald-200/50",
        Processing: "bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 border-amber-200/50",
        Cancelled: "bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-400 border-rose-200/50",
        Pending: "bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 border-blue-200/50"
    };

    const icons = {
        Delivered: CheckCircle2,
        Processing: Clock,
        Cancelled: XCircle,
        Pending: AlertTriangle
    };

    const Icon = icons[status];

    return (
        <Badge variant="outline" className={cn("inline-flex items-center gap-1.5 font-semibold text-[10px] tracking-wide uppercase px-2 py-0.5 rounded-sm border", styles[status])}>
            <Icon className="h-3 w-3 shrink-0 stroke-[2.5]" />
            <span>{status}</span>
        </Badge>
    );
}

function WishlistPreview() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {MOCK_WISHLIST.map((item) => (
                <Card key={item.id} className="group border border-neutral-200/60 dark:border-neutral-800/60 bg-white dark:bg-neutral-900/20 rounded-lg overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-neutral-300/80 dark:hover:border-neutral-700/80">
                    <div className="relative aspect-square w-full bg-neutral-100 overflow-hidden border-b border-neutral-100 dark:border-neutral-800">
                        <img src={item.image} alt={item.name} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" />
                        <button type="button" className="absolute top-2 right-2 p-1.5 bg-white/90 dark:bg-neutral-950/90 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-400 hover:text-rose-600 transition-colors shadow-xs backdrop-blur-xs">
                            <Trash2 className="h-3.5 w-3.5" />
                        </button>
                    </div>
                    <CardContent className="p-4 flex-1 flex flex-col justify-between">
                        <div>
                            <div className="flex text-amber-400 mb-1">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star key={i} className={cn("h-3 w-3", i < item.rating ? "fill-current" : "text-neutral-200 dark:text-neutral-800")} />
                                ))}
                            </div>
                            <h3 className="text-xs font-bold text-neutral-950 dark:text-neutral-50 tracking-tight line-clamp-2">{item.name}</h3>
                        </div>
                        <div className="flex items-center justify-between mt-3 pt-3 border-t border-neutral-100 dark:border-neutral-800/60">
                            <span className="text-sm font-mono font-bold text-neutral-950 dark:text-neutral-50">${item.price.toFixed(2)}</span>
                            <Button size="sm" variant="secondary" className="h-8 text-[11px] font-bold uppercase tracking-wider px-3 rounded-md">Add to Cart</Button>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}

function AddressBook() {
    return (
        <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {MOCK_ADDRESSES.map((addr) => (
                    <Card key={addr.id} className={cn("border bg-white dark:bg-neutral-900/20 shadow-xs relative overflow-hidden transition-all", addr.isDefault ? "border-neutral-950 dark:border-neutral-50 ring-1 ring-neutral-950 dark:ring-neutral-50" : "border-neutral-200/60 dark:border-neutral-800/60")}>
                        <CardContent className="p-5">
                            <div className="flex items-center gap-2 mb-3">
                                <Badge variant="secondary" className="text-[10px] font-bold uppercase tracking-wider rounded-sm px-2 py-0.5 bg-neutral-100 dark:bg-neutral-800">{addr.type}</Badge>
                                {addr.isDefault && (
                                    <Badge className="text-[10px] font-bold uppercase tracking-wider rounded-sm px-2 py-0.5 bg-neutral-950 text-white dark:bg-white dark:text-black">Primary Logistics</Badge>
                                )}
                            </div>
                            <h3 className="text-xs font-bold text-neutral-900 dark:text-neutral-50 tracking-tight">{addr.fullName}</h3>
                            <p className="text-xs text-neutral-500 mt-1.5 leading-relaxed font-medium">
                                {addr.street}<br />
                                {addr.cityStateZip}
                            </p>
                        </CardContent>
                        <CardFooter className="p-4 pt-0 bg-neutral-50/30 dark:bg-neutral-900/30 border-t border-neutral-100/50 dark:border-neutral-800/40 flex justify-end gap-1.5">
                            <Button variant="ghost" size="sm" className="h-8 px-2.5 text-xs text-neutral-500 font-semibold hover:text-neutral-950 dark:hover:text-neutral-50"><Edit2 className="h-3 w-3 mr-1.5" />Edit</Button>
                            <Button variant="ghost" size="sm" className="h-8 px-2.5 text-xs text-rose-600 font-semibold hover:bg-rose-50/50"><Trash2 className="h-3 w-3 mr-1.5" />Delete</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
            <Button variant="outline" className="w-full sm:w-auto text-xs font-semibold h-9 border-dashed border-neutral-300 dark:border-neutral-700 shadow-none hover:bg-neutral-50 dark:hover:bg-neutral-900">
                <Plus className="h-3.5 w-3.5 mr-2 text-neutral-400" /> Stash New Address Record
            </Button>
        </div>
    );
}

function PaymentMethods() {
    return (
        <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {MOCK_PAYMENTS.map((card) => (
                    <Card key={card.id} className={cn("border bg-white dark:bg-neutral-900/20 shadow-xs relative overflow-hidden transition-all", card.isDefault ? "border-neutral-950 dark:border-neutral-50 ring-1 ring-neutral-950 dark:ring-neutral-50" : "border-neutral-200/60 dark:border-neutral-800/60")}>
                        <CardContent className="p-5 flex items-start gap-4">
                            <div className="p-2 bg-neutral-100 dark:bg-neutral-800 rounded-md border text-xs font-black tracking-tighter text-neutral-500 font-mono">
                                {card.brand.toUpperCase()}
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                    <span className="text-xs font-mono font-bold tracking-wider text-neutral-950 dark:text-neutral-50">•••• •••• •••• {card.last4}</span>
                                    {card.isDefault && <Badge className="text-[9px] font-bold uppercase tracking-wider bg-neutral-950 dark:bg-white dark:text-black rounded-sm px-1.5 py-0">Default</Badge>}
                                </div>
                                <p className="text-[11px] text-neutral-400 font-medium">Expires {card.expiry}</p>
                            </div>
                        </CardContent>
                        <CardFooter className="p-3 bg-neutral-50/30 dark:bg-neutral-900/30 border-t border-neutral-100/50 dark:border-neutral-800/40 flex justify-end gap-1">
                            <Button variant="ghost" size="sm" className="h-8 px-2.5 text-xs text-neutral-500 font-semibold hover:text-neutral-950 dark:hover:text-neutral-50">Manage</Button>
                            <Button variant="ghost" size="sm" className="h-8 px-2.5 text-xs text-neutral-400 hover:text-rose-600"><Trash2 className="h-3 w-3" /></Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
            <Button variant="outline" className="w-full sm:w-auto text-xs font-semibold h-9 border-dashed border-neutral-300 dark:border-neutral-700 shadow-none hover:bg-neutral-50 dark:hover:bg-neutral-900">
                <Plus className="h-3.5 w-3.5 mr-2 text-neutral-400" /> Secure Tokenize New Method
            </Button>
        </div>
    );
}

function NotificationPreferences() {
    return (
        <Card className="border border-neutral-200/60 dark:border-neutral-800/60 bg-white dark:bg-neutral-900/20">
            <CardHeader className="p-6 pb-4 border-b border-neutral-100 dark:border-neutral-800/60">
                <CardTitle className="text-base font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">Channels Matrix</CardTitle>
                <CardDescription className="text-xs">Configure granular webhook thresholds and notification systems.</CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-5">
                {[
                    { title: "Email Dispatch Logs", desc: "Core clearing, transactional invoices, and shipping tracking updates.", defaultChecked: true },
                    { title: "SMS Gateway Cellular Pipes", desc: "Instant text verification regarding warehouse dispatch and logistical exceptions.", defaultChecked: true },
                    { title: "Order Lifecycle Pipelines", desc: "Granular status triggers for modifications, refunds, or system overrides.", defaultChecked: true },
                    { title: "Promotional Dynamic Material", desc: "Periodic operational telemetry alerts highlighting price-drop events.", defaultChecked: false },
                    { title: "Curated Technical Newsletters", desc: "Seasonal trend updates, exclusive line previews, and eco-auditing sheets.", defaultChecked: false }
                ].map((item, i) => (
                    <div key={i} className="flex items-start justify-between gap-4 text-sm">
                        <div className="space-y-0.5">
                            <Label className="text-xs font-bold text-neutral-900 dark:text-neutral-50 tracking-tight">{item.title}</Label>
                            <p className="text-xs text-neutral-400 dark:text-neutral-500 max-w-xl font-medium leading-normal">{item.desc}</p>
                        </div>
                        <Switch defaultChecked={item.defaultChecked} className="cursor-pointer" />
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}

function SecuritySettings() {
    return (
        <div className="space-y-6">
            <Card className="border border-neutral-200/60 dark:border-neutral-800/60 bg-white dark:bg-neutral-900/20">
                <CardHeader className="p-6 pb-4">
                    <CardTitle className="text-base font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">Authentication Safeguards</CardTitle>
                    <CardDescription className="text-xs">Manage cryptographic keys, MFA nodes, and verification vectors.</CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-0 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border rounded-lg bg-neutral-50/50 dark:bg-neutral-900/40">
                        <div className="flex items-start gap-3">
                            <KeyRound className="h-5 w-5 text-neutral-400 shrink-0 mt-0.5" />
                            <div>
                                <h4 className="text-xs font-bold text-neutral-900 dark:text-neutral-50">Two-Factor Authentication (2FA)</h4>
                                <p className="text-xs text-neutral-400 mt-0.5 font-medium">Protect active billing routes using hardware keys or authenticator apps.</p>
                            </div>
                        </div>
                        <Switch defaultChecked className="cursor-pointer" />
                    </div>

                    <div className="space-y-4 pt-2">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">Change Password Vector</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="space-y-1">
                                <Label className="text-[11px] font-semibold text-neutral-500">Current Token</Label>
                                <Input type="password" placeholder="••••••••" className="h-9" />
                            </div>
                            <div className="space-y-1">
                                <Label className="text-[11px] font-semibold text-neutral-500">New Password Alpha</Label>
                                <Input type="password" placeholder="••••••••" className="h-9" />
                            </div>
                            <div className="space-y-1">
                                <Label className="text-[11px] font-semibold text-neutral-500">Confirm New Sequence</Label>
                                <Input type="password" placeholder="••••••••" className="h-9" />
                            </div>
                        </div>
                        <Button size="sm" variant="outline" className="h-8 text-xs font-semibold shadow-xs">Cycle Passwords</Button>
                    </div>
                </CardContent>
            </Card>

            <Card className="border border-neutral-200/60 dark:border-neutral-800/60 bg-white dark:bg-neutral-900/20">
                <CardHeader className="p-6 pb-2">
                    <CardTitle className="text-base font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">Active Node Sessions</CardTitle>
                    <CardDescription className="text-xs">Cryptographically verified operational channels running your identity credentials.</CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-0 divide-y divide-neutral-100 dark:divide-neutral-800">
                    <div className="flex items-center justify-between py-3.5 text-xs">
                        <div className="flex items-center gap-3">
                            <Laptop className="h-4 w-4 text-neutral-400" />
                            <div>
                                <span className="font-bold text-neutral-900 dark:text-neutral-50">macOS Architecture • Chrome Engine</span>
                                <p className="text-[11px] text-neutral-400 mt-0.5 font-medium">Port Harcourt, Nigeria • <span className="text-emerald-500 font-bold font-mono">Current Active Socket</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between py-3.5 text-xs">
                        <div className="flex items-center gap-3">
                            <Smartphone className="h-4 w-4 text-neutral-400" />
                            <div>
                                <span className="font-bold text-neutral-900 dark:text-neutral-50">Apple iPhone 15 Pro Node</span>
                                <p className="text-[11px] text-neutral-400 mt-0.5 font-medium">Lagos, Nigeria • 14 hours ago</p>
                            </div>
                        </div>
                        <Button variant="ghost" size="sm" className="h-7 text-[11px] font-semibold text-neutral-400 hover:text-rose-600 px-2 rounded-md">Revoke Access</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

function AccountActions() {
    return (
        <Card className="border border-rose-200/40 dark:border-rose-950/40 bg-rose-50/10 dark:bg-rose-950/5 overflow-hidden">
            <CardHeader className="p-6 pb-4">
                <CardTitle className="text-base font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 flex items-center gap-2">
                    <Lock className="h-4 w-4 stroke-[2.5]" /> Danger Zone Configuration
                </CardTitle>
                <CardDescription className="text-xs text-rose-500/80">
                    Irreversible systems modifications. Executing operations here breaks pipeline state models.
                </CardDescription>
            </CardHeader>
            <CardContent className="p-6 pt-0 flex flex-col sm:flex-row gap-3">
                <Button variant="outline" className="text-xs font-semibold h-9 border-neutral-200 hover:bg-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-900 transition-colors">
                    <LogOut className="h-3.5 w-3.5 mr-2 text-neutral-400" /> Graceful Session Sign-Out
                </Button>
                <Button variant="destructive" className="text-xs font-bold uppercase tracking-wider h-9 bg-rose-600 hover:bg-rose-700 text-white shadow-xs">
                    Purge Complete Account Ledger
                </Button>
            </CardContent>
        </Card>
    );
}

// ==========================================
// TAILWIND CONDITIONAL CLASS COMPOSER (CN)
// ==========================================
function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(" ");
}