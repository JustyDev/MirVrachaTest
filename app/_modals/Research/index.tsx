'use client'

import { Modal } from '@/app/components/Modal'
import s from './Research.module.css'
import { useUnit } from 'effector-react'
import { $isOpen, closeResearchModal } from '@/app/_modals/Research/model'

export const Research = () => {

  const close = useUnit(closeResearchModal)
  const isOpen = useUnit($isOpen)

  return (
    <Modal className={s.modal} isOpen={isOpen} onClose={close}>
      <p>В десятилетнем исследовании <b>«Генетическая эпидемиология ХОБЛ» (COPDGene)</b> среди пациентов с ХОБЛ,
        диагностированной до 55 лет, было выявлено <b>преобладание женщин (66%)</b>, а в возрасте 60-64 лет
        количество
        женщин и мужчин.</p>

      <p>
        Такое эпидемиологическое распределение заболеваемости ХОБЛ может быть связано с тем, что дыхательные пути
        курящих женщин имеют более <b>высокий процент площади стенок</b>, но меньшую площадь просвета, внутренний
        диаметр
        и толщину дыхательных путей по сравнению с курящими мужчинами.
      </p>

      <img
        src="/assets/chart.png"
        alt="Эпидемиологическое распределение ХОБЛ среди мужчин и женщин, %"
      />
    </Modal>
  )
}