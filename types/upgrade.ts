export interface Feature {
    text: string;
    included: boolean;
}

export interface UpgradePlan {
    id: number;
    name: string;
    price: number;
    duration: string;
    features: Feature[];
    performance: string;
}

export interface UpgradeCardProps {
    plan: UpgradePlan;
}
