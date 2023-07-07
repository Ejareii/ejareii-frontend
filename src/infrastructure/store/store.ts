import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface BearState {
  bears: number
  increase: (by: number) => void
}

export const useBearStore = create<BearState>()(
  devtools(
      (set) => ({
        bears: 0,
        increase: (by) => set((state) => ({ bears: state.bears + by })),
      }),
      {
        name: 'bear-storage',
      }
  )
)



//TODO : Store Structure should change to facade design

// interface IUser{

// }

// const initialState = {
//   users: [],
//   loading: false,
//   error: "",
// }

// const useUsersStore = create((set) => ({
//   users: initialState.users,
//   loading: initialState.loading,
//   error: initialState.error,

//   fetchUsers: async () => {
//     set((state) => ({ ...state, loading: true }))
//     try {
//       const res = await fetch("https://jsonplaceholder.typicode.com/users")
//       const users = await res.json()
//       set((state) => ({ ...state, error: "", users }))
//     } catch (error) {
//       set((state) => ({
//         ...state,
//         error: error.message,
//       }))
//     } finally {
//       set((state) => ({
//         ...state,
//         loading: false,
//       }))
//     }
//   },

//   // In our example we only need to fetch the users, but you'd probably want to define other methods here
//   addUser: async (user) => {},
//   updateUser: async (user) => {},
//   deleteUser: async (id) => {},
// }))

// export default useUsersStore