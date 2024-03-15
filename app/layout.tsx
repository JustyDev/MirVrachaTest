import type { Metadata } from 'next'

import './global.css'
import { PropsWithChildren } from 'react'

import { Research } from '@/app/_modals/Research'
import { Dangers } from '@/app/_modals/Dangers'
import { clsx } from 'clsx/lite'

import { NotoSans, CenturyGothic } from '@/app/lib/fonts'

export const metadata: Metadata = {
  title: 'Тестовое задание - МирВрача',
  description: 'Хроническая обструктивная болезнь легких'
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ru">
    <body className={clsx(NotoSans.className, CenturyGothic.variable)}>

    {children}

    <Research />
    <Dangers />

    </body>
    </html>
  )
}
