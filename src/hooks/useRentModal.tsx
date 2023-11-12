import { create } from 'zustand';

interface RentModalStore {
  isOpen: boolean;
  ad:any;
  onOpen: (ad?:any) => void;
  onClose: () => void;
}

const useRentModal = create<RentModalStore>((set) => ({
  isOpen: false,
  ad: null,
  onOpen: (ad) => set({ isOpen: true, ad: ad || null }),
  onClose: () => set({ isOpen: false,ad: null })
}));


export default useRentModal;
