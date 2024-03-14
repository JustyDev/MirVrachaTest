'use client'

import { ReactNode } from 'react'

import HandIcon from '@/icons/hand.svg'
import s from './MythCard.module.css'

type FaqCardProps = {
  notion?: ReactNode
  icon?: ReactNode
  pretext?: string
  openModal?: () => void
}

export const MythCard = ({ notion, icon, pretext, openModal }: FaqCardProps) => {
  return (
    <article className={s.card}>

      <div className={s.open} onClick={openModal}><HandIcon /></div>

      <div className={s.droplet}>{icon}</div>

      <div className={s.border}>
        <div className={s.notion}>
          <p>{notion}</p>
        </div>
      </div>

      <p className={s.pretext}>{pretext}</p>
    </article>
  )
}