'use client';

import { Copy, DollarSign, Trash } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

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

const PaymentSection = () => {
    const [selectedCrypto, setSelectedCrypto] = useState("");
    const [timeRemaining, setTimeRemaining] = useState({
        days: 4,
        hours: 16,
        minutes: 33,
        seconds: 54
    });

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
    };

    return (
        <Card className="rounded-bl-lg rounded-br-lg rounded-tl-none rounded-tr-none">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                    <DollarSign className="w-5 h-5" />
                    Choose a payment method
                </CardTitle>
                <CardDescription>
                    Manage credit card information and payment methods.
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
                                    className={`flex items-center gap-2 text-white px-3 py-2 rounded-[var(--radius)] transition-all ${selectedCrypto === crypto.id
                                        ? 'bg-primary border border-input'
                                        : 'bg-background hover:bg-card'
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
                                    className="bg-background"
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
                                    className="bg-background"
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
                        <div className="bg-background border border-input rounded-[var(--radius)] p-6">
                            <CardTitle className="mb-4 text-center text-white">
                                QR-Code
                            </CardTitle>
                            <div className="flex justify-center mb-4">
                                <div className="w-48 h-48 bg-white rounded-[var(--radius)] flex items-center justify-center">
                                    <div className="w-40 h-40 bg-background rounded grid grid-cols-8 gap-1 p-2">
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
                        <div className="bg-background border border-input rounded-[var(--radius)] p-6">
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
                            <div className="space-y-3 text-sm mb-2">
                                <div className="flex justify-between">
                                    <span className="text-white font-normal">Invoice ID</span>
                                    <span className="font-mono text-muted-foreground">419198176</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-white font-normal">Action</span>
                                    <span className="font-mono text-muted-foreground">Plan Upgrade</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-white font-normal">Status</span>
                                    <span className="bg-primary px-2 py-1 rounded text-xs text-white">Awaiting payment</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-white font-normal">Expire</span>
                                    <span className="text-green-400">
                                        {timeRemaining.days}d {timeRemaining.hours}h {timeRemaining.minutes}m {timeRemaining.seconds}s
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-white font-normal">Price</span>
                                    <span className="font-mono text-muted-foreground">€180 ( €0 Paid )</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-white font-normal">Created at</span>
                                    <span className="font-mono text-muted-foreground">Aug 11, 2025, 1:55 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-white font-normal">Discount</span>
                                    <span className="font-mono text-muted-foreground">n/a</span>
                                </div>
                            </div>
                            <Separator />
                            <div className="mt-2">
                                <h4 className="text-white font-semibold mb-3 flex items-center gap-1">
                                    <span className="text-white font-normal">🛒</span>
                                    Item Summary
                                </h4>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-white font-normal">Plan Name</span>
                                        <span className="font-mono text-muted-foreground">Premium-1</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-white font-normal">Attack Time</span>
                                        <span className="font-mono text-muted-foreground">1200</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default PaymentSection;