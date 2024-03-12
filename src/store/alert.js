import { defineStore } from 'pinia'

export const useAlertStore = defineStore('alert', {
  state: () => ({
    showAlert: false
  }),
  actions: {
    toggleAlert() {
      this.showAlert = !this.showAlert
      setTimeout(() => {
        this.showAlert = false
      }, 1000)
    }
  }
})
