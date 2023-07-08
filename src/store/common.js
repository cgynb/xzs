import { defineStore } from 'pinia'

export const useCommonStore = defineStore('common', {
    state: () => {
        return {
            user: null,
            token: null,
            role: null
        };
    }
}, {
    persist: {
        enabled: true,
        strategies: [{
            storage: localStorage
        }],
    }
});
