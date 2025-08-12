'use client';

import { UpgradeCard } from "@/components/UpgradeCard";
import { ShoppingCart } from "lucide-react";

const upgradePlans = [
    {
        id: 1,
        name: "LITE",
        price: 20,
        duration: "3 days",
        features: [
            { text: "1 simultaneous tests", included: true },
            { text: "60 sec. Max test duration", included: true },
            { text: "Api excluded", included: false }
        ],
        performance: "Up to 40 Gb/s and over 100k rq/s"
    },
    {
        id: 2,
        name: "STANDART",
        price: 45,
        duration: "30 days",
        features: [
            { text: "2 simultaneous tests", included: true },
            { text: "600 sec. Max test duration", included: true },
            { text: "Api excluded", included: false }
        ],
        performance: "Up to 80 Gb/s and over 200k rq/s"
    },
    {
        id: 3,
        name: "PRO",
        price: 100,
        duration: "30 days",
        features: [
            { text: "3 simultaneous tests", included: true },
            { text: "850 sec. Max test duration", included: true },
            { text: "Api excluded", included: false }
        ],
        performance: "Up to 120 Gb/s and over 300k rq/s"
    },
    {
        id: 4,
        name: "ULTRA",
        price: 260,
        duration: "30 days",
        features: [
            { text: "6 simultaneous tests", included: true },
            { text: "1500 sec. Max test duration", included: true },
            { text: "Api excluded", included: false }
        ],
        performance: "Up to 240 Gb/s and over 600k rq/s"
    },
    {
        id: 5,
        name: "TURBO",
        price: 400,
        duration: "30 days",
        features: [
            { text: "8 simultaneous tests", included: true },
            { text: "2200 sec. Max test duration", included: true },
            { text: "Api excluded", included: false }
        ],
        performance: "Up to 320 Gb/s and over 800k rq/s"
    }
];

const Page = () => {
    return (
        <div className="w-full mx-auto p-6">
            <div className="mb-6">
                <h1 className="text-4xl font-extrabold tracking-tight text-white">
                    <span className="inline-block me-1">
                        <ShoppingCart size={32} color="#ff0000" strokeWidth={2} />
                    </span>
                    Upgrade
                </h1>
                <p className="text-muted-foreground">
                    Looking to upgrade your membership? Choose between the following plans or contact us for a custom enterprise solution!
                </p>
            </div>
            <section className="w-full mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {upgradePlans.map((plan) => (
                    <UpgradeCard key={plan.id} plan={plan} />
                ))}
            </section>
        </div>
    );
};

export default Page;