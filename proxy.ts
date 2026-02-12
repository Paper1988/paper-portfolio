import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

// 支援的語言清單
const SUPPORTED_LOCALES = ['zh-TW', 'en']

export function proxy(req: NextRequest) {
    const url = req.nextUrl.clone()

    // 如果已經在 locale 子路徑下，就跳過
    if (url.pathname.startsWith('/en') || url.pathname.startsWith('/zh-TW')) {
        return NextResponse.next()
    }

    // 取 Accept-Language 第一順位
    const langHeader = req.headers.get('accept-language') || ''
    const preferred = langHeader.split(',').map((f) => f.split(';')[0])[0]

    // 選出支援的語系，找不到就預設 zh-TW
    const locale = SUPPORTED_LOCALES.find((l) => preferred.includes(l)) || 'zh-TW'

    // 重導到 /{locale}/...
    url.pathname = `/${locale}${url.pathname}`
    return NextResponse.redirect(url)
}
