import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import './global.css'
import { PropsWithChildren } from 'react'

import { Research } from '@/app/_modals/Research'
import { Dangers } from '@/app/_modals/Dangers'

const NotoSans = Noto_Sans({ subsets: [ 'cyrillic' ] })

export const metadata: Metadata = {
  title: 'Тестовое задание - МирВрача',
  description: 'Хроническая обструктивная болезнь легких'
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ru">
    <body className={NotoSans.className}>

    {children}

    <Research />
    <Dangers />

    </body>
    </html>
  )
}
