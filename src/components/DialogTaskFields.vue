<template>
    <div class="text-center pa-4">
      <v-dialog
        v-model="props.dialog"
        persistent
        min-width="400"
        max-width="600"
      >
        <!-- <template v-slot:activator="{ props: activatorProps }">
          <v-btn v-bind="activatorProps">
            Open Dialog
          </v-btn>
        </template> -->
  
        <v-card class="rounded">
          <v-card-title class="text-h5">
            Editar Tarefa
          </v-card-title>
          <v-text-field
          v-model="props.task.title"
          label="Título"
          ></v-text-field>
          <v-text-field 
          label="Descrição"
          v-model="props.task.description"
          ></v-text-field>
          <template v-slot:actions>
            <v-spacer></v-spacer>
  
            <v-btn @click="$emit('toggle')">
              Ok
            </v-btn>

          </template>
        </v-card>
      </v-dialog>
    </div>
  </template>

  <script setup>
  import { defineProps } from 'vue';

  const props = defineProps({
    dialog: Boolean,
    task: Object
  })
  </script>