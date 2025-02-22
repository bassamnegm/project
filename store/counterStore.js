import { create } from "zustand";
export const useCounter = create((set) => ({
    count: 100,
    inc: () => set(state => ({ ...state, count: state.count + 1 })),
    dec: () => set(state => ({ ...state, count: state.count - 1 }))
}))