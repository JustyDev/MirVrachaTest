import s from './DangerCard.module.css'
import { ReactNode } from 'react'

type DangerCardProps = {
  icon: ReactNode
  title: ReactNode
  subtitle: ReactNode
  percentage: number
}

export const DangerCard = ({ icon, percentage, title, subtitle }: DangerCardProps) => {
  return (
    <article className={s.card}>
      <div className={s.icon}>{icon}</div>
      <p className={s.percentage}>{percentage}%</p>
      <p className={s.title}>{title}</p>
      <dd className={s.subtitle}>{subtitle}</dd>
    </article>
  )
}