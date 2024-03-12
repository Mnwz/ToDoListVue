import { defineStore } from 'pinia'

export const useAlertStore = defineStore('alert', {
    state: () => ({
        showAlert: false,
        text: "",
        type: ""
    }),
    actions: {
        toggleAlert() {
            this.showAlert = !this.showAlert
            setTimeout(() => {
                this.showAlert = false
            }, 1500)
        },
        notifyAlertCreated() {
            this.text = "Tarefa criada com sucesso!"
            this.type = "success"
            this.toggleAlert()
        },
        notifyAlertUpdated() {
            this.text = "Tarefa editada com sucesso!"
            this.type = "info"
            this.toggleAlert()
        },
        notifyAlertDelete() {
            this.text = "Tarefa deletada com sucesso!"
            this.type = "warning"
            this.toggleAlert()
        }
    }
})
