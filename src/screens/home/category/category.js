import {create} from "zustand"

const useCategory = create((set)=>({
    select:0,
    setSelect: (val) => set({select:val})
}));

export default useCategory
