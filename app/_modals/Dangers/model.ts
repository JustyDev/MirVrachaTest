import { createEvent, createStore } from 'effector'

export const openDangersModal = createEvent()
export const closeDangersModal = createEvent()

export const $isOpen = createStore<boolean>(false)
  .on(closeDangersModal, () => false)
  .on(openDangersModal, () => true)