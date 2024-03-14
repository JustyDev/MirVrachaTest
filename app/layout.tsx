import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import './global.css'
import { ReactNode } from 'react'

const NotoSans = Noto_Sans({ subsets: [ 'cyrillic' ] })

export const metadata: Metadata = {
  title: 'Тестовое задание - МирВрача',
  description: 'Хроническая обструктивная болезнь легких'
}

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="ru">
    <body className={NotoSans.className}>{children}</body>
    </html>
  )
}
