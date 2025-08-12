'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CreditCard, Lock, UserCheck } from 'lucide-react';
import PasswordSection from '@/components/PasswordSection';
import PaymentSection from '@/components/PaymentSection';

const AccountPage = () => {
    return (
        <div className="w-full mx-auto p-6">
            <div className="mb-6">
                <h1 className="text-4xl font-extrabold text-white tracking-tight">
                    <span className="inline-block me-1">
                        <UserCheck size={32} color="#ff0000" strokeWidth={2} />
                    </span>
                    Account
                </h1>
                <p className="text-muted-foreground">
                    Here you can manage your account
                </p>
            </div>
            <Tabs defaultValue="payment" className="w-full">
                <TabsList className="grid w-full grid-cols-2 border-t border-l border-r">
                    <TabsTrigger value="payment" className="flex items-center gap-2 text-white">
                        <CreditCard className="w-4 h-4" />
                        Payments
                    </TabsTrigger>
                    <TabsTrigger value="password" className="flex items-center gap-2 text-white">
                        <Lock className="w-4 h-4" />
                        Change Password
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="payment" className="space-y-6">
                    <PaymentSection />
                </TabsContent>
                <TabsContent value="password" className="space-y-6">
                    <PasswordSection />
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default AccountPage;