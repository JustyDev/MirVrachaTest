'use client'

import { PropsWithChildren } from 'react'

import s from './Modal.module.css'
import { clsx } from 'clsx/lite'
import { useKeyDown } from '@/app/lib/hooks/useKeyDown'
import { useTransition, animated } from 'react-spring'

import CloseIcon from '@/icons/close.svg'

type ModalProps = PropsWithChildren & {
  isOpen: boolean
  onClose?: () => void
  className?: string
}

export const Modal = ({ isOpen, children, onClose, className }: ModalProps) => {

  useKeyDown('Escape', onClose)

  const block = useTransition(isOpen, {
    from: { opacity: 0, transform: 'translateY(-20px) rotateX(5deg) scale(0.9)' },
    enter: { opacity: 1, transform: 'translateY(0) rotateX(0) scale(1)' },
    config: {
      friction: 25,
      mass: 1,
      tension: 500
    }
  })

  const blackout = useTransition(isOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  })

  return block((styles, item) => item && isOpen && (
    <div className={clsx(s.modal, className)}>
      <animated.div
        className={s.block}
        style={styles}
      >
        <div onClick={onClose} className={s.close}>
          <CloseIcon />
        </div>
        {children}
      </animated.div>
      {blackout((sts, it) => it && item && <animated.div
        title="Нажмите, чтобы закрыть окно"
        style={sts}
        onClick={onClose}
        className={s.blackout}
      />)}
    </div>
  ))
}