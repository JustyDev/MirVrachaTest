'use client'

import { Modal } from '@/app/components/Modal'

import s from './Dangers.module.css'
import { DangerCard } from '@/app/components/DangerCard'
import HeartIcon from '@/icons/heart.svg'
import AttackHeartIcon from '@/icons/heart-attack.svg'
import BladderIcon from '@/icons/bladder.svg'
import { useUnit } from 'effector-react'
import { $isOpen, closeDangersModal } from './model'

export const Dangers = () => {

  const close = useUnit(closeDangersModal)
  const isOpen = useUnit($isOpen)

  return (
    <Modal className={s.modal} isOpen={isOpen} onClose={close}>
      <p><b>Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум одно среднетяжелое или тяжелое
        обострение случится в течение 3 лет у 77% пациентов<sup>1</sup>.</b></p>

      <p>
        В течение 5 лет после первого тяжёлого обострения в живых остаются только 40%
        пациентов.<sup>2</sup> Прогноз после
        обострений ХОБЛ схож с таковым при сердечной недостаточности, инфаркте миокарда и некоторых
        злокачественных опухолях.
      </p>

      <h3 className={s.title}>Пятилетняя выживаемость пациентов</h3>

      <div className={s.cards}>
        <DangerCard
          percentage={45.5}
          icon={<HeartIcon />}
          title={<>пациентов с <b>сердечной недостаточностью<sup>1</sup></b></>}
          subtitle="Популяционное когортное исследование (N=385)"
        />
        <DangerCard
          percentage={55.3}
          icon={<AttackHeartIcon />}
          title={<>пациентов с <b>инфарктом миокарда<sup>1</sup></b></>}
          subtitle="Апостериорный анализ когортного исследования (N=2887)"
        />
        <DangerCard
          percentage={50.5}
          icon={<BladderIcon />}
          title={<>пациентов с <b>раком мочевого пузыря</b></>}
          subtitle="Исследование Национальной статистической службы (N=42642)"
        />
      </div>
    </Modal>
  )
}