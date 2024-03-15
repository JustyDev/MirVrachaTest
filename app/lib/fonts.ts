import { Noto_Sans } from 'next/font/google'
import localFont from 'next/font/local'

export const NotoSans = Noto_Sans({ subsets: [ 'cyrillic' ] })

export const CenturyGothic = localFont({
  variable: '--font-century-gothic',
  src: [
    {
      path: '../../public/assets/fonts/CenturyGothic.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/assets/fonts/CenturyGothic-Bold.woff2',
      weight: '700',
      style: 'normal'
    }
  ]
})