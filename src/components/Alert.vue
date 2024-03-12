<template>
    <div class="alert-notification">
        <v-alert
            text="Tarefa criada com sucesso!"
            type="success"
            closable
        ></v-alert>
    </div>
</template>

<style scoped>

.alert-notification {
    position: fixed;
    z-index: 1;
    bottom: 0;
    width: 100%;
    padding: 0 35% 0 35%;
}

</style>