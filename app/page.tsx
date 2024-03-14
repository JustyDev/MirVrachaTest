'use client'

import s from './page.module.css'
import { MythCard } from '@/app/components/MythCard'
import { DirectionCard } from '@/app/components/DirectionCard'

import UserIcon from '@/icons/user.svg'
import ProgressIcon from '@/icons/progress.svg'
import { useUnit } from 'effector-react'
import { openResearchModal } from '@/app/_modals/Research/model'
import { openDangersModal } from '@/app/_modals/Dangers/model'

export default function HomePage() {

  const openResearch = useUnit(openResearchModal)
  const openDangers = useUnit(openDangersModal)

  return (
    <main className={s.main}>
      <h2>ХОБЛ: мифы и реальность</h2>

      <div className={s.content}>
        <div className={s.container}>
          <MythCard
            icon={<UserIcon />}
            notion={<>ХОБЛ болеют <b>преимущественно мужчины?</b></>}
            pretext="В десятилетнем исследовании «Генетическая эпидемиология ХОБЛ» (COPDGene) среди пациентов с ХОБЛ,
            диагностированной до 55 лет, было выявлено преобладание женщин (66%), а в возрасте 60-64 лет
            количество женщин и мужчин."
            openModal={openResearch}
          />
          <MythCard
            icon={<ProgressIcon />}
            notion={<><b>Опасно</b> не наличие заболевания, а обострения?</>}
            pretext="Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум одно среднетяжелое или
            тяжелое обострение случится в течение..."
            openModal={openDangers}
          />
        </div>
      </div>

      <h2>Терапия ХОБЛ: что в фокусе?</h2>

      <div className={s.content}>
        <div className={s.hint}>
          <h3>Даже 1 среднетяжелое обострение — сигнал к увеличению объема терапии</h3>
        </div>

        <h3 className={s.trend}>Приоритетные направления фармакотерапевтической стратегии при ХОБЛ<sup>1</sup>:</h3>

        <div className={s.advices}>
          <DirectionCard index={1} title={<>Ингаляционный <b>антихолинергик</b></>}>
            Ингибирует бронхоконстрикторные эффекты ацетилхолина, вступая с ним в конкурентный антагонизм за
            взаимодействие с эффекторными мускариновыми рецепторами, дополняет и потенцирует эффект
            β2-агонистов<sup>1</sup>
          </DirectionCard>
          <DirectionCard index={2} title={<>Ингаляционный <br /><b>β2-агонист</b></>}>
            Вызывает бронходилатацию посредством релаксации гладкомышечных клеток бронхов независимо от характера
            констриктивных стимулов, т. е. выступают в качестве функциональных антагонистов бронхоконстрикции
          </DirectionCard>
          <DirectionCard index={3} title={<>Ингаляционный <b>глюкокортикостероид</b> (ИГКС)</>}>
            Снижает частоту обострений, особенно в сочетании с ДДБА, подавляют хроническое воспаление при астме и
            снижают гиперреактивность дыхательных путей
          </DirectionCard>
        </div>

        <div className={s.arrows}>
          <hr />
          <hr />
        </div>

        <div className={s.advices}>
          <div className={s.card}>
            <p>Пациентам с ХОБЛ рекомендуется комбинирование бронходилататоров с разными механизмами действия;
              Назначение 2-х бронходилататоров из группы длительнодействующих β2-агонистов (ДДБА) и длительнодействующих
              антихолинергиков (ДДАХ), действие которых дополняет и усиливает друг друга<sup>1</sup>.</p>
          </div>

          <div className={s.card}>
            <p>Пациентам с ХОБЛ и частыми обострениями (≥2 среднетяжелых обострений в течение 1 года/1 тяжелое
              обострение, потребовавшее госпитализации) рекомендуется назначение ИГКС в дополнение к ДДБА;
              Последние исследования показали, что амбулаторное применение ИГКС/ДДБА у пациентов с ХОБЛ снижает
              госпитальную летальность по сравнению с пациентами, принимавшими только ДДБА (8,1% vs
              13,2%)<sup>1</sup>.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
