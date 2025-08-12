'use client'

import { Separator } from '@/components/ui/separator'
import { User, Lock, LogIn } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import Link from 'next/link'

export default function LoginPage() {

    return (
        <div className="relative flex h-screen w-screen flex-col overflow-x-hidden sm:overflow-hidden">
            <div className="bg-background flex h-[100dvh] w-full overflow-hidden">
            {/* Left Side - Login Form */}
            <div className="flex justify-center items-center h-full w-full flex-col overflow-y-auto">
                <div className="relative z-10 w-full max-w-md">
                    <div className="text-center mb-6">
                        <h1 className="text-4xl font-bold text-white">Sign In</h1>
                        <p className="text-muted-foreground">
                            Don't have an account?{' '}
                            <Link href="/register" className="text-primary hover:text-[#ff000085] transition-colors">
                                Register Here
                            </Link>
                        </p>
                    </div>
                    <Separator />
                    {/* Login Form */}
                    <form className="space-y-6 mt-6">
                        <div className="space-y-2">
                            <Label htmlFor="username" className="text-gray-300 flex items-center gap-1">
                                <User size={256} strokeWidth={3} className="h-4 w-4" />
                                Username
                            </Label>
                            <Input
                                id="username"
                                type="text"
                                placeholder="Username"
                                className="bg-card"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password" className="text-gray-300 flex items-center gap-1">
                                <Lock size={256} strokeWidth={3} className="h-4 w-4" />
                                Password
                            </Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="Password"
                                className="bg-card"
                                required
                            />
                        </div>
                        {/* Sign In Button */}
                        <Button type="submit" className="w-full text-lg flex items-center gap-2 rounded-[var(--radius)] py-6">
                            <LogIn className="h-4 w-4 mr-2" />
                            Sign In
                        </Button>
                    </form>
                </div>
            </div>
            {/* Right Side - Background with Abstract Design */}
            <div className='relative flex h-full w-full items-center justify-center overflow-hidden bg-background text-white'>
                <div className="absolute inset-y-0 flex items-center justify-start" style={{opacity: 0.5, transform: 'none'}}>
                    <img
                        aria-hidden 
                        src="/images/logo.png"
                        alt="lunabg brand"
                        className='h-full max-h-[600px] w-auto -translate-x-[20%] 2xl:max-h-[900px]'
                    />
                </div>
                    <div className="absolute -inset-y-[30%] -right-24 flex w-[100vw] flex-col xl:-right-6 xl:w-[1200px]" style={{ maskImage: 'linear-gradient(to right, rgba(255, 255, 255, 0), rgb(255, 255, 255))', opacity: 0.75, transform: 'none' }}>
                        <div className="flex h-full w-full flex-col">
                            <div
                                className="grow"
                                style={{
                                    background: 'conic-gradient(from 180deg at 99% 40% in lab, rgb(255, 255, 255) 18deg, rgb(156 184 221) 36deg, rgba(17, 17, 17, 0) 90deg, rgba(17, 17, 17, 0) 342deg, rgb(255, 255, 255) 360deg)'
                                }}
                            ></div>
                            <div
                                className="grow"
                                style={{
                                    background: 'conic-gradient(from 0deg at 99% 60%, rgb(255, 255, 255) 0deg, rgba(17, 17, 17, 0) 18deg, rgba(17, 17, 17, 0) 270deg, rgb(156, 184, 221) 324deg, rgb(255, 255, 255) 342deg)'
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}