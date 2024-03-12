<template>
    <div class="alert-notification">
        <v-alert class="animate__animated animate__zoomIn" text="Tarefa criada com sucesso!" type="success"
            closable></v-alert>
    </div>
</template>

<script>
import 'animate.css';
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