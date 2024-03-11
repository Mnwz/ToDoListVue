import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', {
    state: () => ({
        tasks: [],
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
            this.saveLocalData();
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
            this.saveLocalData();
        },
        toggleEdit(index)   {
            this.showDialogTaskFields = !this.showDialogTaskFields;
            if (index != null) {
            this.indexTaskSelected = index
            }
            this.saveLocalData();
        },
        saveLocalData() {
            localStorage.setItem('tasks',
            JSON.stringify(this.tasks));
        },
        getTasks() {
            let items = localStorage.getItem('tasks')
            if(items) {
                this.tasks = JSON.parse(items);
            }
        }
    }
})
