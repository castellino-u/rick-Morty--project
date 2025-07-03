

import {create } from 'zustand'
import { persist } from 'zustand/middleware'

// import { create } from 'zustand'

// type Store = {
//   count: number
//   inc: () => void
// }

// const useStore = create<Store>()((set) => ({
//   count: 1,
//   inc: () => set((state) => ({ count: state.count + 1 })),
// }))



type Store = {
    page : number,
    dec: (n: number) => void,
    inc: (n: number)=> void
}

// usamos el persist para que los datos persistan y pueda mantenerse en la misma página aún cuando recargamos

export const useStorePagination = create<Store>()(
    persist((set) => ({
    page: 1,
    dec : (n)=>set((state) => ({page : state.page - n})),
    inc : (n)=>set((state) => ({page : state.page + n}))
}),
    {
        name: 'page'
    }
))