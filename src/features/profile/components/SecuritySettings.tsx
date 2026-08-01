import { KeyRound, Laptop, Smartphone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card";
import { Switch } from "../../../components/ui/switch";
import { Label } from "../../../components/ui/label";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";

export default function SecuritySettings() {
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