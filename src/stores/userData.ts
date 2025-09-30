import { defineStore } from 'pinia'

export const useUserStore = defineStore('userData', {
    state: () => ({
        userData: {
            name: 'User name from store',
            age: 30,
        },
    }),
    
})
