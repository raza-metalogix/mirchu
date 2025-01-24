import {create} from 'zustand';

const useCart = create((set)=>({
    all:true,
    setAll:(val) => set({all:val}),
    select:[],
    setSelect: (sel) => set({ select:sel })
}))

export default useCart;
