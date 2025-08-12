'use client';

import { KeyRound, Save } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const PasswordSection = () => {
    const handlePasswordSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log('Password changed');
    };

    return (
        <Card className="rounded-bl-lg rounded-br-lg rounded-tl-none rounded-tr-none">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                    <KeyRound strokeWidth={3} className="w-5 h-5" />
                    Password
                </CardTitle>
                <CardDescription>
                    Change your password any time.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handlePasswordSubmit} className="space-y-4">
                    <div>
                        <Label htmlFor="currentPassword" className="text-white font-light">Current Password</Label>
                        <div className="relative mt-1">
                            <Input
                                id="currentPassword"
                                className="bg-background"
                                type={'password'}
                                placeholder="*****"
                            />
                        </div>
                    </div>
                    <div>
                        <Label htmlFor="newPassword" className="text-white font-light">New Password</Label>
                        <div className="relative mt-1">
                            <Input
                                id="newPassword"
                                className="bg-background"
                                type={'password'}
                                placeholder="*****"
                            />
                        </div>
                        {/* <p className="text-sm text-muted-foreground mt-1">
                            Password must be at least 8 characters, including uppercase, lowercase and numbers
                        </p> */}
                    </div>
                    <div>
                        <Label htmlFor="confirmPassword" className="text-white font-light">Repeat Password</Label>
                        <div className="relative mt-1">
                            <Input
                                id="confirmPassword"
                                className="bg-background"
                                type={'password'}
                                placeholder="*****"
                            />
                        </div>
                    </div>
                    <Separator />
                    <div className="flex gap-2">
                        <Button type="submit" className="flex items-center gap-2 rounded-[var(--radius)]">
                            <Save />Save
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
};

export default PasswordSection;