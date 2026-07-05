interface UserStatusBadgeProps {
    status: "Active" | "Inactive";
}

export default function UserStatusBadge({
    status,
}: UserStatusBadgeProps) {
    return (
        <span
            className={`rounded-full px-3 py-1 text-xs font-medium ${status === "Active"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
        >
            {status}
        </span>
    );
}