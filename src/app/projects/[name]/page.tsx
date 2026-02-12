'use client'

import Navbar from '@/components/Navbar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function Project() {
    const { name } = useParams()

    // 專案資料
    const projectsData = {
        paper: {
            title: 'Paper',
            description: '功能強大的 Discord 機器人，提供音樂播放、管理功能和各種實用工具',
            longDescription: [
                'Paper 是一個功能豐富的 Discord 機器人，專為現代 Discord 社群設計。',
                '它提供了完整的音樂播放系統，支援 YouTube、Spotify 等多種音源，讓用戶可以享受高品質的音樂體驗。',
                '除了音樂功能外，Paper 還包含強大的管理工具，如自動審核系統、等級系統、抽獎功能等，幫助伺服器管理員更有效地管理社群。',
                '機器人採用模組化架構設計，易於擴展和維護，並支援多伺服器部署。'
            ],
            image: '/paper.png',
            technologies: ['Discord.js', 'MongoDB', 'Moonlink.js', 'Discord API', 'Railway.app'],
            features: [
                '音樂播放系統',
                '伺服器管理工具',
                '抽獎功能',
                '多伺服器支援'
            ],
            demoUrl: 'https://discord.com/discovery/applications/869166906765103135',
            githubUrl: 'https://github.com/Paper1988/Paper-app'
        },
        docontrib: {
            title: 'DoContrib',
            description: '協作式文件編輯平台，支援多人即時編輯和版本控制',
            longDescription: [
                'DoContrib 是一個現代化的協作文件編輯平台，專為團隊協作而設計。',
                '它提供了即時協作編輯功能，讓多個用戶可以同時編輯同一份文件，並看到彼此的修改即時同步。',
                '平台採用先進的衝突解決機制，確保多人編輯時不會出現內容丟失或衝突問題。',
                '此外，DoContrib 還提供了完整的版本控制系統，讓用戶可以追蹤文件的修改歷史，並在需要時回滾到之前的版本。',
                '平台支援多種文件格式，並提供直觀的用戶界面，讓協作變得更加高效和愉快。'
            ],
            image: '/DoContrib.jpg',
            technologies: ['Next.js', 'Tailwind CSS', 'Supabase', 'Liveblocks', 'Vercel'],
            features: [
                '即時協作編輯',
                '版本控制系統',
                '用戶權限管理',
                '檔案分享功能',
                '評論和討論',
                '多格式支援'
            ],
            demoUrl: '#',
            githubUrl: '#'
        }
    }

    const project = projectsData[name as keyof typeof projectsData]

    if (!project) {
        return (
            <main className="min-h-screen bg-background text-foreground">
                <Navbar />
                <div className="flex items-center justify-center min-h-[calc(100vh-6rem)] text-center">
                    <div>
                        <h1 className="text-4xl font-bold mb-4">專案不存在</h1>
                        <p className="text-muted-foreground mb-8">找不到您要查看的專案</p>
                        <Link href="/projects">
                            <Button>返回專案列表</Button>
                        </Link>
                    </div>
                </div>
            </main>
        )
    }

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* 返回按鈕 */}
            <div className="max-w-6xl mx-auto px-8 pt-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Link
                        href="/projects"
                        className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-200"
                    >
                        <ArrowLeft className="mr-2 h-5 w-5" /> 返回專案列表
                    </Link>
                </motion.div>
            </div>

            {/* 專案標題區域 */}
            <section className="py-16 px-8">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight">
                            {project.title}
                        </h1>
                        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            {project.description}
                        </p>
                    </motion.div>

                    {/* 專案圖片 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative h-64 md:h-80 lg:h-96 bg-muted rounded-lg overflow-hidden mb-12 shadow-lg"
                    >
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-contain p-8"
                        />
                    </motion.div>
                </div>
            </section>

            {/* 專案詳細資訊 */}
            <section className="py-16 px-8 bg-muted/20">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* 專案描述 */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">專案介紹</h2>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                {project.longDescription.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        </motion.div>

                        {/* 技術棧和功能 */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="space-y-8"
                        >
                            {/* 技術棧 */}
                            <div>
                                <h3 className="text-2xl font-bold mb-4">技術棧</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, index) => (
                                        <Badge key={index} variant="secondary" className="text-sm">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            {/* 主要功能 */}
                            <div>
                                <h3 className="text-2xl font-bold mb-4">主要功能</h3>
                                <ul className="space-y-2">
                                    {project.features.map((feature, index) => (
                                        <li key={index} className="flex items-center text-muted-foreground">
                                            <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* 操作按鈕 */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button asChild size="lg" className="flex items-center">
                                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="mr-2 h-4 w-4" />
                                        查看演示
                                    </a>
                                </Button>
                                <Button asChild variant="outline" size="lg" className="flex items-center">
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                        <Github className="mr-2 h-4 w-4" />
                                        查看原始碼
                                    </a>
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 底部區域 */}
            <section className="py-12 px-8">
                <div className="max-w-6xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">有興趣了解更多？</h2>
                        <p className="text-muted-foreground mb-8">
                            歡迎查看我的其他專案或聯絡我討論合作機會
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/projects">
                                <Button variant="outline" size="lg">
                                    查看其他專案
                                </Button>
                            </Link>
                            <Link href="/#contact">
                                <Button size="lg">
                                    聯絡我
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}
