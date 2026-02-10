'use client'

import Discord from '@/components/icon/Discord'
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { Github, Mail } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Home() {
    useEffect(() => {
        const enterTime = Date.now();

        let duration = 0;
        window.addEventListener('beforeunload', () => {
            duration = Date.now() - enterTime;
        });

        let interacted = false;
        ['scroll', 'mousemove', 'keydown', 'touchstart']
            .forEach(e => window.addEventListener(e, () => interacted = true, { once: true }));

        const timer = setTimeout(() => {
            const visitData = {
                userAgent: navigator.userAgent,
                screenWidth: window.innerWidth,
                screenHeight: window.innerHeight,
                referrer: document.referrer,
                language: navigator.language,
                timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                duration: duration,
                interacted: interacted
            }

            fetch('/api/visit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(visitData)
            })
                .then((response) => {
                    if (response.ok) {
                        console.log('Visit notification sent to backend successfully.')
                    } else {
                        console.error('Failed to send visit notification to backend.')
                    }
                })
                .catch((error) => {
                    console.error('Error sending visit notification:', error)
                })
        }, 5000)

        return () => clearTimeout(timer)
    }, [])

    const t = useTranslations('Home')

    return (
        <main className="min-h-screen bg-background text-foreground">
            {/* navbar section */}
            <Navbar />
            {/* hero section */}
            <section
                id="hero"
                className="min-h-[calc(100vh-6rem)] flex items-center justify-center text-center py-16 px-8"
            >
                <div>
                    <Image
                        src="/favicon.png"
                        alt="avatar"
                        width={180}
                        height={180}
                        className="rounded-full mx-auto mb-8 shadow-lg border-2 border-border animate-fade-in"
                    />
                    <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 md:mb-6 tracking-tight animate-fade-in-up">
                        {t('hero.greeting')}
                    </h2>
                    <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 md:mb-10 leading-relaxed animate-fade-in-up delay-200">
                        {t('hero.description')}
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up delay-400">
                        <Link
                            href="/projects"
                            className="flex items-center justify-center px-6 py-2 sm:px-8 sm:py-3 bg-primary text-primary-foreground rounded-full text-base sm:text-lg font-semibold hover:bg-primary/90 transition-colors duration-300 shadow-lg"
                        >
                            {t('hero.cta')}
                        </Link>
                        <Link
                            href="/about"
                            className="flex items-center justify-center px-6 py-2 sm:px-8 sm:py-3 border border-border text-foreground rounded-full text-base sm:text-lg font-semibold hover:bg-muted transition-colors duration-300"
                        >
                            {t('hero.about')}
                        </Link>
                    </div>
                </div>
            </section>
            {/* contact section */}
            <section id="contact" className="py-20 px-8 bg-muted/20">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-10 tracking-tight">聯絡我</h2>
                    <p className="text-lg mb-8 text-muted-foreground">
                        如果你有任何問題、合作機會，或是想聊聊技術，歡迎隨時聯絡我！
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <Button
                            asChild
                            size="lg"
                            className="w-full sm:w-40 flex items-center justify-center"
                        >
                            <a href="mailto:ericliu8888824@gmail.com">
                                <Mail className="mr-2 h-4 w-4" /> 電子郵件
                            </a>
                        </Button>

                        {/* 如果你啟用 LinkedIn 按鈕，也適用同樣的修改 */}
                        {/*
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="w-full sm:w-40 flex items-center justify-center"
                        >
                            <a
                            href="https://www.linkedin.com/in/%E7%B4%99%E9%A1%9E-%E5%8A%89-099198330/"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            <LinkedinIcon className="mr-2 h-4 w-4" /> LinkedIn
                            </a>
                        </Button>
                        */}

                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="w-full sm:w-40 flex items-center justify-center"
                        >
                            <a
                                href="https://github.com/Paper1988"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github className="mr-2 h-4 w-4" /> GitHub
                            </a>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="w-full sm:w-40 flex items-center justify-center"
                        >
                            <a
                                href="https://discord.com/users/538639229220028416"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Discord className="mr-2 h-4 w-4" /> Discord
                            </a>
                        </Button>
                    </div>
                </div>
            </section>
            {/* footer section */}
            <footer className="py-8 px-8 text-center text-muted-foreground border-t border-border">
                <p>&copy; {new Date().getFullYear()} Paper. 版權所有。</p>
            </footer>
        </main>
    )
}
