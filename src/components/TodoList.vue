<template>
    <v-text-field 
        clearable 
        label="Add Task" 
        v-model="taskStore.titleTaskCreate" 
        @keyup.enter="taskStore.addTask"
    ></v-text-field>

    <ListTasks/>
</template>

<script setup>
import ListTasks from '@/components/ListTasks.vue';
import { useTaskStore } from '@/store/task';

const taskStore = useTaskStore();
</script>
