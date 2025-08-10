'use client';
import { Home, LucideIcon, MessageCircle, Rocket, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface Menu {
    path: string;
    title: string;
    icon: LucideIcon;
}

export default function Sidebar() {
    const pathname = usePathname();

    const menuList = [
        {
            path: '/',
            title: 'Home',
            icon: Home,
        },
        {
            path: '/features',
            title: 'Features',
            icon: Rocket,
        },
        {
            path: '/upgrade',
            title: 'Upgrade',
            icon: ShoppingCart,
        },
        {
            path: '/support',
            title: 'Support',
            icon: MessageCircle,
        },
        {
            path: '/account',
            title: 'Account',
            icon: User,
        },
    ]

    return (
        <aside className="fixed w-max flex md:flex-col justify-between md:justify-start gap-4 sm:gap-8 left-1/2 md:left-2 top-[8px] md:top-1/2 -translate-x-1/2 md:translate-x-0 md:-translate-y-1/2 right-0 md:right-auto bg-[var(--foreground)] border border-[var(--border)] rounded-[var(--radius)] px-4 py-3 md:py-8 z-[50]">
            {menuList.map((menu: Menu, key: number) => {
                const Icon = menu.icon;
                const isActive = pathname === menu.path;
                return (
                    <Link href={menu.path} key={key} className={`group rounded-full p-[8px] md:p-[18px] cursor-pointer hover:bg-primary ${
                        isActive ? "bg-primary" : "hover:bg-primary"
                    }`}>
                    <Icon
                        size={256}
                        strokeWidth={2.5}
                        className={`w-5 h-5 ${
                            isActive ? "text-white" : "text-[var(--text-color)] group-hover:text-black"
                        }`}
                    />
                </Link>
            )})}
        </aside>
    )
}