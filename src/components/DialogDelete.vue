<template>
    <div class="text-center pa-4">
      <v-dialog
        v-model="props.dialog"
        max-width="400px"
        persistent
      >  
        <v-card
          prepend-icon="mdi-trash-can"
          title="Deseja realmente excluir?"
        >
          <template v-slot:actions>

            <v-btn @click="$emit('toggleDelete')">
              Não
            </v-btn>
  
            <v-btn @click="$emit('deleteTask')">
              Sim
            </v-btn>
          </template>
        </v-card>
      </v-dialog>
    </div>
  </template>
<script setup>

import { defineProps } from 'vue';

const props = defineProps({
  dialog: Boolean
})

</script>

<style>
    .v-card-actions{
        justify-content: center;
    }
</style>