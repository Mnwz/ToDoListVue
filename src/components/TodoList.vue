<template>
    <v-text-field 
        clearable 
        label="Add Task"
        :rules="rules" 
        v-model="taskStore.titleTaskCreate" 
        @keyup.enter="taskStore.addTask"
    ></v-text-field>

    <ListTasks/>
</template>

<script setup>
import { onMounted } from 'vue';
import ListTasks from '@/components/ListTasks.vue';
import { useTaskStore } from '@/store/task';

const taskStore = useTaskStore();

const rules = [
    value => {
        return !value || value.length >= 2 ? true : 'Favor preencher com ao menos 2 caracteres';
    }
]

onMounted(() => {
    taskStore.getTasks();
});
</script>
