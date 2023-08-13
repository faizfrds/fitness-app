import { devtools, persist } from 'zustand/middleware'
import { create } from 'zustand'


interface ResultState {
  bears: number
  increase: (by: number) => void
}

const useBearStore = create<ResultState>()(
  devtools(
    persist(
      (set) => ({
        bears: 0,
        increase: (by) => set((state) => ({ bears: state.bears + by })),
      }),
      {
        name: 'bear-storage',
      }
    )
  )
)