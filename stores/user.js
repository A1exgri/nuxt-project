export const useUserStore = defineStore('user', {
    state: () => ({
        isMeniOverlay: false,
        isLoading: false,
        cart: [],
        checkout: []
    }),
    persist: true
})