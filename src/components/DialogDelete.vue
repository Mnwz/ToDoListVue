<template>
  <div class="text-center pa-4">
    <v-dialog v-model="taskStore.showDialogDelete" max-width="400px" persistent>
      <v-card prepend-icon="mdi-trash-can" title="Deseja realmente excluir?">
        <template v-slot:actions>

          <v-btn @click="taskStore.toggleDelete()" color="#691769" variant="elevated">
            Não
          </v-btn>

          <v-btn @click="taskStore.deleteTask()" variant="outlined" color="#800080">
            Sim
          </v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>
<script setup>

import { useTaskStore } from '@/store/task';

const taskStore = useTaskStore();
</script>

<style>
.v-card-actions {
  justify-content: center;
}
</style>