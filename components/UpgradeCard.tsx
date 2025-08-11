import { Button } from "@/components/ui/button";
import { UpgradeCardProps } from "@/types/upgrade";
import { Check, ShoppingCart, X } from "lucide-react";

export const UpgradeCard = ({ plan }: UpgradeCardProps) => {
    return (
        <div className="bg-card-foreground border border-[var(--border)] rounded-[var(--radius)] flex flex-col gap-8 p-4 md:p-8">
            <h3 className="text-white flex justify-between items-center font-bold text-3xl">
                {plan.name}
            </h3>
            <div>
                <ul className="flex flex-col gap-6">
                    {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2.5 opacity-[0.72] text-[var(--text-color)]">
                            {feature.included ? <Check /> : <X />}
                            {feature.text}
                        </li>
                    ))}
                </ul>
                <div className="flex flex-col gap-3 mt-8">
                    <span className="p-4 rounded-[var(--radius)] text-white max-w-full w-max text-[14px] md:text-[16px] bg-[var(--secondary-foreground)]">
                        {plan.performance}
                    </span>
                </div>
                <div className="mt-8 border-t font-medium py-8 border-[var(--border)] text-[var(--text-color)]">
                    <span className="inline-block mr-4 text-[40px]">
                        <span className="text-white">${plan.price}</span>.00
                    </span>
                    / {plan.duration}
                </div>
                <Button className="w-full py-8 font-bold text-base">
                    <ShoppingCart size={42} strokeWidth={3} />
                    Buy Now
                </Button>
            </div>
        </div>
    );
};
