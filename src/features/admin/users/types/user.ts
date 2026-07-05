export type UserRole = "Admin" | "Customer";

export type UserStatus =
    | "Active"
    | "Inactive";

export interface AdminUser {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    status: UserStatus;
}