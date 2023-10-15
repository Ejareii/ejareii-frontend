import { create } from 'zustand';

interface useUserInfoModalStore {
  isOpen: boolean;
  name:string;
  lname:string,
  email:string,
  onOpen: () => void;
  onClose: () => void;
  setName:(name: string)=>void;
  setLname:(lname: string)=>void;
  setEmail:(email:string)=>void;
}

const useUserInfoModal = create<useUserInfoModalStore>((set) => ({
  isOpen: false,
  name:"",
  lname:"",
  email:"",
  setName: (name:string) => set({ name }),
  setLname:(lname:string)=>set({lname}),
  setEmail:(email:string)=>set({email}),
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));


export default useUserInfoModal;
