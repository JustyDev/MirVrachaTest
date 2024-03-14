'use client'

import { useEffect } from 'react'

export const useKeyDown = (keyCode: string, fn: () => void) => {
  useEffect(() => {
    document.addEventListener('keydown', e => {
      if (e.code === keyCode) fn()
      return true
    })
  }, [ fn, keyCode ])
}