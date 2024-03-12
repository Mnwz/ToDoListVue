import { defineStore } from 'pinia'
import { useAlertStore } from '@/store/alert'
const alertStore = useAlertStore();

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
            if (this.titleTaskCreate.length <= 1) return;
            this.tasks.push({
                title: this.titleTaskCreate,
                done: false
            });
            this.titleTaskCreate = '';
            this.saveLocalData();
            alertStore.toggleAlertCreated();
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
            alertStore.toggleAlertDelete();
        },
        updateTask() {
            this.toggleEdit();
            this.saveLocalData();
            alertStore.notifyAlertUpdated();
        },
        toggleEdit(index) {
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
            if (items) {
                this.tasks = JSON.parse(items);
            }
        },
        toggleDoneTask(index) {
            this.tasks[index].done = !this.tasks[index].done;
            this.saveLocalData();
        }
    }
})
