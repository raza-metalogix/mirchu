import {create} from "zustand";

const useStore = create((set)=>({
    showCart: "", // buy | cart
    setShowCart:(show) => set({showCart:show}),
    select:0,
    handleSelect: (val) => set({select: val}),
    quantity:1,
    setQuantity: (val) => set({quantity: val})
    
}));

export default useStore;
