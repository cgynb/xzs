import { defineStore } from 'pinia'

export const useCommonStore = defineStore('common', {
    state: () => {
        return {
            user: null,
            token: null,
            role: null
        };
    }
})