interface IconBadgeProps {
    count: number;
}

export default function IconBadge({ count }: IconBadgeProps) {
    if (count <= 0) return null;

    return (
        <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-semibold text-primary-foreground">
            {count > 99 ? "99+" : count}
        </span>
    );
}