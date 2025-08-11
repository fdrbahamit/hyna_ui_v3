'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Copy, CreditCard, DollarSign, Eye, EyeOff, KeyRound, Lock, QrCode, Save, Trash, User, UserCheck, Wallet, X } from 'lucide-react';

interface CryptoWallet {
    id: string;
    name: string;
    symbol: string;
    address: string;
    network: string;
    icon: string;
    balance?: number;
}

// Available crypto options
const cryptoOptions = [
    { id: 'bitcoin', name: 'Bitcoin', icon: '₿', color: 'bg-orange-500' },
    { id: 'litecoin', name: 'Litecoin', icon: 'Ł', color: 'bg-gray-400' },
    { id: 'usdt-trc20', name: 'USDT TRC-20', icon: '₮', color: 'bg-green-500' },
    { id: 'ethereum', name: 'Ethereum', icon: 'Ξ', color: 'bg-blue-500' },
    { id: 'usdt-erc20', name: 'USDT ERC-20', icon: '₮', color: 'bg-green-600' },
    { id: 'tron', name: 'Tron', icon: '♦', color: 'bg-red-500' },
    { id: 'monero', name: 'Monero', icon: 'ɱ', color: 'bg-orange-600' },
    { id: 'usdc-erc20', name: 'USDC ERC-20', icon: '$', color: 'bg-blue-600' },
];

const Page = () => {
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [selectedCrypto, setSelectedCrypto] = useState("");
    const [showPrivateKey, setShowPrivateKey] = useState(false);

    const [timeRemaining, setTimeRemaining] = useState({
        days: 4,
        hours: 16,
        minutes: 33,
        seconds: 54
    });

    const handleCryptoSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle crypto wallet submission
        console.log("Adding new crypto wallet:", selectedCrypto);
    };

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        // You can add a toast notification here
    };


    const handlePaymentSubmit = (e) => {
        e.preventDefault();
        // Handle payment method update
        console.log('Payment method updated');
    };

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        // Handle password change
        console.log('Password changed');
    };

    return (
        <div className="w-full mx-auto p-6">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-white tracking-tight mb-2">
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

                {/* Payment Tab */}
                <TabsContent value="payment" className="space-y-6">
                    <Card className="rounded-bl-lg rounded-br-lg rounded-tl-none rounded-tr-none">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-white">
                                <DollarSign className="w-5 h-5" />
                                Choose a payment method
                            </CardTitle>
                            <CardDescription>
                                Manage credit card information and payment methods
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div>
                                    <div className="grid grid-cols-4 gap-3 mb-6">
                                        {cryptoOptions.map((crypto) => (
                                            <Button
                                                key={crypto.id}
                                                onClick={() => setSelectedCrypto(crypto.id)}
                                                className={`flex items-center gap-2 text-white px-3 py-2 rounded-lg transition-all ${selectedCrypto === crypto.id
                                                    ? 'bg-primary border border-input'
                                                    : 'bg-[var(--secondary-foreground)] hover:bg-card'
                                                    }`}
                                            >
                                                <div className={`w-6 h-6 rounded-full ${crypto.color} flex items-center justify-center text-white text-sm font-bold`}>
                                                    {crypto.icon}
                                                </div>
                                                <span className="text-sm font-medium">{crypto.name}</span>
                                            </Button>
                                        ))}
                                    </div>
                                    {/* Amount to Pay */}
                                    <div className="mb-6">
                                        <Label className="text-white font-normal">Amount to pay</Label>
                                        <div className="relative mt-1">
                                            <Input
                                                id="text"
                                                value="0.00174804"
                                                readOnly
                                            />
                                            <button
                                                onClick={() => copyToClipboard("0.00174804")}
                                                className="cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                                            >
                                                <Copy size={16} />
                                            </button>
                                        </div>
                                    </div>
                                    {/* Payment Address */}
                                    <div>
                                        <Label className="text-white font-normal">Payment address</Label>
                                        <div className="relative mt-1">
                                            <Input
                                                id="text"
                                                value="bc1qmkwwgjtd7dmSeesia64r9s4sp7exxrv3fvyyjh"
                                                readOnly
                                            />
                                            <button
                                                onClick={() => copyToClipboard("bc1qmkwwgjtd7dmSeesia64r9s4sp7exxrv3fvyyjh")}
                                                className="cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                                            >
                                                <Copy size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    {/* QR Code */}
                                    <div className="bg-[var(--secondary-foreground)] border border-input rounded-lg p-6">
                                        <CardTitle className="mb-4 text-center text-white">
                                            QR-Code
                                        </CardTitle>
                                        <div className="flex justify-center mb-4">
                                            <div className="w-48 h-48 bg-white rounded-lg flex items-center justify-center">
                                                <div className="w-40 h-40 bg-black rounded grid grid-cols-8 gap-1 p-2">
                                                    {/* QR Code Pattern */}
                                                    {Array.from({ length: 64 }).map((_, i) => (
                                                        <div
                                                            key={i}
                                                            className={`w-3 h-3 ${Math.random() > 0.5 ? 'bg-black' : 'bg-white'} rounded-sm`}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Invoice Summary */}
                                    <div className="bg-[var(--secondary-foreground)] border border-input rounded-lg p-6">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-white text-lg font-semibold flex items-center gap-1">
                                                <span className="text-gray-400">📄</span>
                                                Invoice Summary
                                            </h3>
                                            <Button className="px-3 py-1 font-bold text-base">
                                                <Trash size={14} />
                                                Cancel
                                            </Button>
                                        </div>

                                        <div className="space-y-3 text-sm">
                                            <div className="flex justify-between b">
                                                <span className="text-white font-normal">Invoice ID</span>
                                                <span className="font-mono">419198176</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-white font-normal">Action</span>
                                                <span>Plan Upgrade</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-white font-normal">Status</span>
                                                <span className="bg-blue-600 px-2 py-1 rounded text-xs">Awaiting payment</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-white font-normal">Expire</span>
                                                <span className="text-yellow-400">
                                                    {timeRemaining.days}d {timeRemaining.hours}h {timeRemaining.minutes}m {timeRemaining.seconds}s
                                                </span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-white font-normal">Price</span>
                                                <span>€180 ( €0 Paid )</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-white font-normal">Created at</span>
                                                <span>Aug 11, 2025, 1:55 PM</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-white font-normal">Discount</span>
                                                <span>n/a</span>
                                            </div>
                                        </div>
                                        <Separator />
                                        <div className="">
                                            <h4 className="text-white font-semibold mb-3 flex items-center gap-1">
                                                <span className="text-white font-normal">🛒</span>
                                                Item Summary
                                            </h4>
                                            <div className="space-y-2 text-sm">
                                                <div className="flex justify-between">
                                                    <span className="text-white font-normal">Plan Name</span>
                                                    <span>Premium-1</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-white font-normal">Attack Time</span>
                                                    <span>1200</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* Password Tab */}
                <TabsContent value="password" className="space-y-6">
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
                                            type={showCurrentPassword ? 'text' : 'password'}
                                            placeholder="*****"
                                        />
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="sm"
                                            className="absolute right-0 top-0 h-full px-3"
                                            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                                        >
                                            {showCurrentPassword ? (
                                                <EyeOff className="w-4 h-4" />
                                            ) : (
                                                <Eye className="w-4 h-4" />
                                            )}
                                        </Button>
                                    </div>
                                </div>
                                <div>
                                    <Label htmlFor="newPassword" className="text-white font-light">New Password</Label>
                                    <div className="relative mt-1">
                                        <Input
                                            id="newPassword"
                                            type={showNewPassword ? 'text' : 'password'}
                                            placeholder="*****"
                                        />
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="sm"
                                            className="absolute right-0 top-0 h-full px-3"
                                            onClick={() => setShowNewPassword(!showNewPassword)}
                                        >
                                            {showNewPassword ? (
                                                <EyeOff className="w-4 h-4" />
                                            ) : (
                                                <Eye className="w-4 h-4" />
                                            )}
                                        </Button>
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
                                            type={showConfirmPassword ? 'text' : 'password'}
                                            placeholder="*****"
                                        />
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="sm"
                                            className="absolute right-0 top-0 h-full px-3"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        >
                                            {showConfirmPassword ? (
                                                <EyeOff className="w-4 h-4" />
                                            ) : (
                                                <Eye className="w-4 h-4" />
                                            )}
                                        </Button>
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
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default Page;
