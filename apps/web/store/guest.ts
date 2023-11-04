import { create } from 'zustand'

type GuestStore = {
  level: number
  setLevel: (level: number) => void
}

export const useGuestStore = create<GuestStore>((set) => ({
  level: 1,
  setLevel: (level) => set({ level }),
}))