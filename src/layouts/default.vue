<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-img src="https://osr.org/wp-content/uploads/2019/08/estrelas-no-c%C3%A9u-1.jpg"
        gradient="to top right, rgb(106, 90, 205,.4), rgb(99, 44, 255,.5)" height="80" cover class="pt-2">
        <v-list>
          <v-list-item prepend-avatar="https://encurtador.com.br/kmtUV" title="Marcos" subtitle="To Do list"
            class="white">
          </v-list-item>
        </v-list>

      </v-img>

      <v-divider></v-divider>

      <v-list :lines="false" density="compact" nav>
        <router-link v-for="(item, i) in items" :key="i" :to="item.to">
          <v-list-item :value="item" color="primary">
            <template v-slot:prepend>
              <v-icon :icon="item.icon"></v-icon>
            </template>

            <v-list-item-title :textContent="item.text"></v-list-item-title>
          </v-list-item>
        </router-link>
      </v-list>


    </v-navigation-drawer>

    <v-app-bar density="prominent"
      image="https://st5.depositphotos.com/81963912/67784/i/450/depositphotos_677844294-stock-photo-cosmic-backdrop-starry-night-sky.jpg">
      <template v-slot:image>
        <v-img gradient="to top right, rgb(106, 90, 205,.4), rgb(99, 44, 255,.5)"></v-img>
      </template>
      <v-app-bar-nav-icon class="white" @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title class="white">To Do List</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <Alert v-if="alertStore.showAlert" />
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import Alert from '@/components/Alert.vue';
import { useAlertStore } from '@/store/alert';

const alertStore = useAlertStore();

const drawer = ref(null);

const items = [
  { text: 'Home', icon: 'mdi-folder', to: "/" },
  { text: 'About', icon: 'mdi-account-multiple', to: "/about" },
];
</script>

<style scoped>
a {
  text-decoration: none;
  color: #505050;
}

.white {
  color: white;
}
</style>
