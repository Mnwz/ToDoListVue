<template>
    <div class="alert-notification">
        <v-alert class="animate__animated animate__zoomIn"
        :text="alertStore.text"
        :type="alertStore.type"
        closable
        ></v-alert>
    </div>
</template>

<script setup>
import 'animate.css';
import { useAlertStore } from '@/store/alert';

const alertStore = useAlertStore();
</script>

<style scoped>
.alert-notification {
    position: fixed;
    z-index: 1;
    bottom: 0;
    width: 100%;
    padding: 0 35% 0 35%;
}
</style>