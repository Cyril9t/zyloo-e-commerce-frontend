
import { ProfileHeader } from "../components";
import ProfileOverview from "../components/ProfileOverview";
import ProfileSidebarNav from "../components/ProfileSidebarNave";
import PersonalInformation from "../components/ProfileInformation";
import { AddressBook } from "../components/AddressBook";
import SecuritySettings from "../components/SecuritySettings";
import { PaymentMethods } from "../components/PaymentMethods";
import { useState } from "react";

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






export default function ProfilePage() {
    const [activeSection, setActiveSection] = useState<string>("profile");
    const [profileData, setProfileData] = useState<UserProfileData>(MOCK_PROFILE);

    return (
        <div className="w-full min-h-screen antialiased font-sans transition-colors duration-300">
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">

                <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 ">

                    <div className="w-full lg:col-span-8 xl:col-span-5 space-y-16 ">
                        <div>

                            <ProfileSidebarNav activeSection={activeSection} onSectionChange={setActiveSection} />
                        </div>
                        <div>

                            <ProfileOverview profile={profileData} />
                        </div>
                    </div>


                    <div className="w-full lg:col-span-8 xl:col-span-7 space-y-12">


                        {activeSection === "profile" && (
                            <>
                                <ProfileHeader title="My Profile" description="Manage your basic system identifiers, profile metadata, and visual configuration." />
                                <PersonalInformation profile={profileData} onUpdate={setProfileData} />
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

                        {activeSection === "security" && (
                            <>
                                <ProfileHeader title="Device Security Access" description="Monitor encryption status, MFA controls, and cryptographically verified sessions." />
                                <SecuritySettings />
                            </>
                        )}


                    </div>
                </div>

            </div>
        </div>
    );
}










