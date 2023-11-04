import { create } from 'zustand';

interface ForgetPassModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useForgetPassModal = create<ForgetPassModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));


export default useForgetPassModal;
