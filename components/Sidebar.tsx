'use client';
import { Home, List, MessageSquare, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { ReactElement } from "react";

export interface Menu {
    path: string;
    title: string;
    icon: ReactElement;
}

export default function Sidebar() {
    const menuList = [
        {
            path: '/features',
            title: 'Features',
            icon: <List className="w-5 h-5 text-[var(--text-color)] group-hover:text-black" />,
        },
        {
            path: '/pricing',
            title: 'Pricing',
            icon: <ShoppingCart className="w-5 h-5 text-[var(--text-color)] group-hover:text-black" />,
        },
        {
            path: '/chat',
            title: 'Chat',
            icon: <MessageSquare className="w-5 h-5 text-[var(--text-color)] group-hover:text-black" />,
        },
        {
            path: '/account',
            title: 'Account',
            icon: <User className="w-5 h-5 text-[var(--text-color)] group-hover:text-black" />,
        },
    ]

    return (
        <aside className="fixed w-max flex md:flex-col justify-between md:justify-start gap-4 sm:gap-8 left-1/2 md:left-2 top-[8px] md:top-1/2 -translate-x-1/2 md:translate-x-0 md:-translate-y-1/2 right-0 md:right-auto bg-[var(--background)] border border-[var(--border)] rounded-[var(--radius)] px-4 py-3 md:py-8 z-[50]">
            <Link href="/" className="rounded-full p-[8px] md:p-[18px] group cursor-pointer hover:bg-primary bg-primary">
                <Home className="text-white w-5 h-5" />
            </Link>
            {menuList.map((menu: Menu, key: number) => (
                <Link href={menu.path} key={key} className="group rounded-full p-[8px] md:p-[18px] cursor-pointer hover:bg-primary">
                    {menu.icon}
                </Link>
            ))}
        </aside>
    )
}