import { ThemeProvider } from '@/components/ThemeProvider'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale } from 'next-intl/server'
import { Noto_Sans_TC, Outfit } from 'next/font/google'
import './globals.css'

const notoSans = Noto_Sans_TC({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-noto-sans-tc'
})

const outfit = Outfit({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-outfit'
})

export const metadata: Metadata = {
    title: {
        default: 'Home',
        template: '%s | Paper'
    },
    description:
        '我是 Paper，一名熱衷於打造優質使用者體驗的軟體開發者。這是一個展示我的程式專案、關於我的介紹以及聯絡方式的個人作品集網站。',
    keywords: [
        'Paper',
        '作品集',
        '個人網站',
        '軟體開發',
        'Discord 機器人',
        'Next.js',
        '前端開發',
        '程式設計'
    ],

    openGraph: {
        title: 'Paper',
        description:
            '我是 Paper，一名熱衷於打造優質使用者體驗的軟體開發者。這是一個展示我的程式專案、關於我的介紹以及聯絡方式的個人作品集網站。',
        url: 'https://paperdesu.netlify.app',
        siteName: 'Paper',
        images: [
            {
                url: 'https://paperdesu.netlify.app/og.png',
                width: 1200,
                height: 630
            }
        ],
        locale: 'zh_TW',
        type: 'website'
    },

    // 其他可選的 Meta Tags
    robots: 'index, follow', // 告訴搜尋引擎爬蟲是否索引和追蹤此頁面
    icons: {
        icon: 'https://paperdesu.netlify.app/favicon.ico',
        shortcut: 'https://paperdesu.netlify.app/favicon.ico',
        apple: 'https://paperdesu.netlify.app/favicon.ico'
    },

    manifest: '/site.webmanifest' // PWA (Progressive Web App) 的 manifest 檔案
}

export default async function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    const locale = await getLocale()
    return (
        <html lang={locale} suppressHydrationWarning>
            <body className={`${notoSans.variable} ${outfit.variable}`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <NextIntlClientProvider>{children}</NextIntlClientProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}
