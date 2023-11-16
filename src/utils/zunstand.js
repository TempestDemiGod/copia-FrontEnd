import { create } from 'zustand'

const useStore = create((set) => ({
  estado: false,
  cambiarEstado: () => set((state) => ({ estado: !state.estado })),
}))

