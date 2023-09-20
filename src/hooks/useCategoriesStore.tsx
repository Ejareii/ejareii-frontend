import { create } from 'zustand';

interface Category {
    category_id: number;
    name: string;
    query_name: string;
    icon_name: string;
    parent_category_id: number| null;
    created_at: string;
    updated_at: string;
  }

interface CategoriesStore {
    categories: Category[];
    setCategories: (categories: Category[]) => void;

}

const useCategoriesStore  = create<CategoriesStore>((set) => ({
    categories: [],
    setCategories: (categories) => set({ categories }),
}));


export default useCategoriesStore;
