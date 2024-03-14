import { createEvent, createStore } from 'effector'

export const openResearchModal = createEvent()
export const closeResearchModal = createEvent()

export const $isOpen = createStore<boolean>(false)
  .on(closeResearchModal, () => false)
  .on(openResearchModal, () => true)