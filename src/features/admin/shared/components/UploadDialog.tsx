import type { ReactNode } from "react";

import {
    AlertDialog,
    AlertDialogAction,

    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "../../../../components/ui/alert-dialog";

interface ConfirmDialogProps {
    trigger: ReactNode;
    title: string;
    description: ReactNode;
    onConfirm?: () => void;
}

export default function UploadDialog({
    trigger,
    title,
    description,
    onConfirm,
}: ConfirmDialogProps) {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                {trigger}
            </AlertDialogTrigger>

            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        {title}
                    </AlertDialogTitle>
                </AlertDialogHeader>

                <AlertDialogDescription>
                    {description}
                </AlertDialogDescription>


                <AlertDialogFooter>


                    <AlertDialogAction onClick={onConfirm}>
                        Done
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}