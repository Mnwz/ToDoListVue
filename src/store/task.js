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
    titleTaskCreate: ""
  }),
  actions: {
    addTask(){
        this.tasks.push({
          title: this.titleTaskCreate
        });
        this.titleTaskCreate = '';
    },
  }
})
