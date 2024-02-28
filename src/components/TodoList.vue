<template>
    <v-text-field 
        clearable 
        label="Add Task" 
        v-model="task.title" 
        @keyup.enter="addTask"
    ></v-text-field>

    <ListTasks :tasks="tasks"/>
</template>

<script setup>
import ListTasks from './ListTasks.vue';

import { ref } from "vue";

const tasks = ref([
  {
    title: "Estudar",
    description: "Mais e mais"
  },
  {
    title: "Toma",
    description: "No cu"
  }
]);

const task = ref({});

const addTask = () => {
  tasks.value.push({
    title: task.value.title,
    description: task.value.description
  });
  task.value = {
    title: "",
    description: ""
  };
};
</script>
