import {create} from 'zustand';

const useCart = create((set)=>({
    selectAll: false,
    setSelectAll: (val) => set({selectAll:val}),
    selectIndex: [],
    setSelectIndex: (val) => set({selectIndex:val}),
    price:0,
    setPrice:(val)=>set({price:val})
}))

export default useCart;
