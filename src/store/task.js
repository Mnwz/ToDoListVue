import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', {
    state: () => ({
        tasks: [
            {
                title: "Estudar",
                description: "Mais e mais"
            },
            {
                title: "Toma",
                description: "No cu"
            }
        ],
        titleTaskCreate: "",
        showDialogDelete: false,
        indexTaskSelected: 0,
        showDialogTaskFields: false
    }),
    actions: {
        addTask() {
            this.tasks.push({
                title: this.titleTaskCreate
            });
            this.titleTaskCreate = '';
        },
        toggleDelete(index) {
            this.showDialogDelete = !this.showDialogDelete;
            if (index != null) {
                this.indexTaskSelected = index;
            }
        },
        deleteTask() {
            this.tasks.splice(this.indexTaskSelected, 1);
            this.toggleDelete();
        },
        toggleEdit(index)   {
            this.showDialogTaskFields = !this.showDialogTaskFields;
            if (index != null) {
            this.indexTaskSelected = index
            }
        }
    }
})
