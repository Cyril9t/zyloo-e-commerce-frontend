import { Link } from "react-router-dom";

import Logo from "../../../components/common/Logo";

interface AuthHeaderProps {
    title: string;
    subtitle: string;
}

export default function AuthHeader({
    title,
    subtitle,
}: AuthHeaderProps) {
    return (
        <div className="space-y-3 text-center">
            <div className="flex justify-center">
                <Logo />
            </div>

            <div className="space-y-1">
                <h1 className="text-3xl font-bold">
                    {title}
                </h1>

                <p className="text-muted-foreground">
                    {subtitle}
                </p>
            </div>
        </div>
    );
}