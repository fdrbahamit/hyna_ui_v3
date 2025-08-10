'use client';

import { Button } from "@/components/ui/button";
import { Check, ShoppingCart, X } from "lucide-react";

const Page = () => {
    return (
        <div className="w-full">
            <div className="pb-6">
                <h1 className="text-white text-3xl font-semibold mb-2">
                    <span className="inline-block me-2">
                        <ShoppingCart size={32} color="#ff0000" strokeWidth={2} />
                    </span>
                    Upgrade
                </h1>
                <p className="text-white">Looking to upgrade your membership? Choose between the following plans or contact us for a custom enterprise solution!</p>
            </div>
            <section className="w-full mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                <div className="bg-card-foreground border border-[var(--border)] rounded-[var(--radius)] flex flex-col gap-8 p-4 md:p-8">
                    <h3 className=" text-white flex justify-between items-center font-bold text-3xl">LITE</h3>
                    <div>
                        <ul className="flex flex-col gap-6">
                            <li className="flex items-center gap-2.5 opacity-[0.72] text-[var(--text-color)]">
                                <Check />
                                1 simultaneous tests
                            </li>
                            <li className="flex items-center gap-2.5 opacity-[0.72] text-[var(--text-color)]">
                                <Check />
                                60 sec. Max test duration
                            </li>
                            <li className="flex items-center gap-2.5 opacity-[0.72] text-[var(--text-color)]">
                                <X />
                                Api excluded
                            </li>
                        </ul>
                        <div className="flex flex-col gap-3 mt-8">
                            <span className="p-4 rounded-[var(--radius)] text-white max-w-full w-max text-[14px] md:text-[16px] bg-[var(--secondary-foreground)]">Up to 40 Gb/s and over 100k rq/s</span>
                        </div>
                        <div className="mt-8 border-t font-medium py-8 border-[var(--border)] text-[var(--text-color)]">
                            <span className="inline-block mr-4 text-[40px]">
                                <span className=" text-white">$20</span>.00
                            </span>
                            / 3 days
                        </div>
                        <Button className="w-full py-8 font-bold text-base"><ShoppingCart size={42} strokeWidth={3} />Buy Now</Button>
                    </div>
                </div>
                <div className="bg-card-foreground border border-[var(--border)] rounded-[var(--radius)] flex flex-col gap-8 p-4 md:p-8">
                    <h3 className=" text-white flex justify-between items-center font-bold text-3xl">STANDART</h3>
                    <div>
                        <ul className="flex flex-col gap-6">
                            <li className="flex items-center gap-2.5 opacity-[0.72] text-[var(--text-color)]">
                                <Check />
                                2 simultaneous tests
                            </li>
                            <li className="flex items-center gap-2.5 opacity-[0.72] text-[var(--text-color)]">
                                <Check />
                                600 sec. Max test duration
                            </li>
                            <li className="flex items-center gap-2.5 opacity-[0.72] text-[var(--text-color)]">
                                <X />
                                Api excluded
                            </li>
                        </ul>
                        <div className="flex flex-col gap-3 mt-6">
                            <span className="p-4 rounded-[var(--radius)] text-white max-w-full w-max text-[14px] md:text-[16px] bg-[var(--secondary-foreground)]">Up to 80 Gb/s and over 200k rq/s</span>
                        </div>
                        <div className="mt-8 border-t font-medium py-8 border-[var(--border)] text-[var(--text-color)]">
                            <span className="inline-block mr-4 text-[40px]">
                                <span className=" text-white">$45</span>.00
                            </span>
                            / 30 days
                        </div>
                        <Button className="w-full py-8 font-bold text-base"><ShoppingCart size={42} strokeWidth={3} />Buy Now</Button>
                    </div>
                </div>
                <div className="bg-card-foreground border border-[var(--border)] rounded-[var(--radius)] flex flex-col gap-8 p-4 md:p-8">
                    <h3 className=" text-white flex justify-between items-center font-bold text-3xl">PRO</h3>
                    <div>
                        <ul className="flex flex-col gap-6">
                            <li className="flex items-center gap-2.5 opacity-[0.72] text-[var(--text-color)]">
                                <Check />
                                3 simultaneous tests
                            </li>
                            <li className="flex items-center gap-2.5 opacity-[0.72] text-[var(--text-color)]">
                                <Check />
                                850 sec. Max test duration
                            </li>
                            <li className="flex items-center gap-2.5 opacity-[0.72] text-[var(--text-color)]">
                                <X />
                                Api excluded
                            </li>
                        </ul>
                        <div className="flex flex-col gap-3 mt-6">
                            <span className="p-4 rounded-[var(--radius)] text-white max-w-full w-max text-[14px] md:text-[16px] bg-[var(--secondary-foreground)]">Up to 120 Gb/s and over 300k rq/s</span>
                        </div>
                        <div className="mt-8 border-t font-medium py-8 border-[var(--border)] text-[var(--text-color)]">
                            <span className="inline-block mr-4 text-[40px]">
                                <span className=" text-white">$100</span>.00
                            </span>
                            / 30 days
                        </div>
                        <Button className="w-full py-8 font-bold text-base"><ShoppingCart size={42} strokeWidth={3} />Buy Now</Button>
                        {/* <button className=" bg-white hover:text-white hover:bg-[rgba(255,255,255,0.1)] disabled:hover:bg-white disabled:hover:text-main disabled:opacity-[0.8] !w-full !rounded-[4px] cursor-pointer p-[24px]">Purchase</button> */}
                    </div>
                </div>
                <div className="bg-card-foreground border border-[var(--border)] rounded-[var(--radius)] flex flex-col gap-8 p-4 md:p-8">
                    <h3 className=" text-white flex justify-between items-center font-bold text-3xl">ULTRA</h3>
                    <div>
                        <ul className="flex flex-col gap-6">
                            <li className="flex items-center gap-2.5 opacity-[0.72] text-[var(--text-color)]">
                                <Check />
                                6 simultaneous tests
                            </li>
                            <li className="flex items-center gap-2.5 opacity-[0.72] text-[var(--text-color)]">
                                <Check />
                                1500 sec. Max test duration
                            </li>
                            <li className="flex items-center gap-2.5 opacity-[0.72] text-[var(--text-color)]">
                                <X />
                                Api excluded
                            </li>
                        </ul>
                        <div className="flex flex-col gap-3 mt-8">
                            <span className="p-4 rounded-[var(--radius)] text-white max-w-full w-max text-[14px] md:text-[16px] bg-[var(--secondary-foreground)]">Up to 240 Gb/s and over 600k rq/s</span>
                        </div>
                        <div className="mt-8 border-t font-medium py-6 border-[var(--border)] text-[var(--text-color)]">
                            <span className="inline-block mr-4 text-[40px]">
                                <span className=" text-white">$260</span>.00
                            </span>
                            / 30 days
                        </div>
                        <Button className="w-full py-8 font-bold text-base"><ShoppingCart size={42} strokeWidth={3} />Buy Now</Button>
                    </div>
                </div>
                <div className="bg-card-foreground border border-[var(--border)] rounded-[var(--radius)] flex flex-col gap-8 p-4 md:p-8">
                    <h3 className=" text-white flex justify-between items-center font-bold text-3xl">TURBO</h3>
                    <div>
                        <ul className="flex flex-col gap-6">
                            <li className="flex items-center gap-2.5 opacity-[0.72] text-[var(--text-color)]">
                                <Check />
                                8 simultaneous tests
                            </li>
                            <li className="flex items-center gap-2.5 opacity-[0.72] text-[var(--text-color)]">
                                <Check />
                                2200 sec. Max test duration
                            </li>
                            <li className="flex items-center gap-2.5 opacity-[0.72] text-[var(--text-color)]">
                                <X />
                                Api excluded
                            </li>
                        </ul>
                        <div className="flex flex-col gap-3 mt-8">
                            <span className="p-4 rounded-[var(--radius)] text-white max-w-full w-max text-[14px] md:text-[16px] bg-[var(--secondary-foreground)]">Up to 320 Gb/s and over 800k rq/s</span>
                        </div>
                        <div className="mt-8 border-t font-medium py-6 border-[var(--border)] text-[var(--text-color)]">
                            <span className="inline-block mr-4 text-[40px]">
                                <span className=" text-white">$400</span>.00
                            </span>
                            / 30 days
                        </div>
                        <Button className="w-full py-8 font-bold text-base"><ShoppingCart size={42} strokeWidth={3} />Buy Now</Button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Page;