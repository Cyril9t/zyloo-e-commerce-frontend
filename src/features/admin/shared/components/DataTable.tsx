import type { ReactNode } from "react";

interface DataTableProps {
    children: ReactNode;
}

export default function DataTable({
    children,
}: DataTableProps) {
    return (
        <div className="overflow-x-auto rounded-xl border">
            {children}
        </div>
    );
}