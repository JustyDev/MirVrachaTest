import { PropsWithChildren, ReactNode } from 'react'

import s from './DirectionCard.module.css'

type DirectionCardProps = PropsWithChildren & {
  index?: number
  title: ReactNode
}

export const DirectionCard = ({ children, title, index }: DirectionCardProps) => {
  return (
    <div className={s.card}>
      {index && <div className={s.index}>
        <div className={s.circle}>
          <span>{index}</span>
        </div>
      </div>}
      <p className={s.title}>{title}</p>
      <p className={s.text}>{children}</p>
    </div>
  )
}