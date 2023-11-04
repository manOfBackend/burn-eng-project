import { create } from 'zustand'

type HistoryStore = {
  date: Date
  setDate: (date: Date) => void
}

export const useHistoryStore = create<HistoryStore>((set) => ({
  date: new Date(),
  setDate: (date) => set({ date }),
}))