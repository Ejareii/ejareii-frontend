import { create } from 'zustand';

interface useHostInfoModalStore {
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

const useHostInfoModal = create<useHostInfoModalStore>((set) => ({
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


export default useHostInfoModal;
