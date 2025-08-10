import Sidebar from "@/components/Sidebar";

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="w-10/12 max-w-10/12 mx-auto">
                <Sidebar />
                <main className="flex my-[120px] md:my-[140px]">{children}</main>
            </div>
        </div>
    );
}
