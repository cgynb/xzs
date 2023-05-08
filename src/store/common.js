import { defineStore } from 'pinia'

export const useCommonStore = defineStore('common', {
    state: () => {
        return {
            user: {
                name: "cgy"
            }
        };
    }
})