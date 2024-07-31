import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

const useAuthStore = create(
    devtools(
        persist(
            (set) => ({
                auth: "",
                setAuth: (data) => set((state) => ({ auth: data })),
            }),
            { name: 'auth-data' },
        ),
    ),
)

export default useAuthStore;





