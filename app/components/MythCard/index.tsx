'use client'

import s from './MythCard.module.css'
import { useState, ReactNode, PropsWithChildren } from 'react'
import { Hand } from '@/app/assets/svg/Hand'
import { clsx } from 'clsx/lite'

type FaqCardProps = PropsWithChildren & {
  notion?: ReactNode
  icon?: ReactNode
  pretext?: string
}

export const MythCard = ({ children, notion, icon, pretext }: FaqCardProps) => {

  const [ isOpen, setIsOpen ] = useState<boolean>(false)

  return (
    <article className={clsx(s.card, isOpen && s.opened)}>

      {!isOpen && <>
        <div className={s.open} onClick={() => setIsOpen(true)}><Hand /></div>

        <div className={s.droplet}>{icon}</div>

        <div className={s.border}>
          <div className={s.notion}>
            <p>{notion}</p>
          </div>
        </div>

        <p className={s.pretext}>{pretext}</p>
      </>}

      {isOpen && children}
    </article>
  )
}