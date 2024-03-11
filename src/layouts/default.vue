<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-img 
      src="https://picsum.photos/1920/1080?random"
      gradient="to top right, rgb(106, 90, 205,.4), rgb(99, 44, 255,.5)"
      height="80"
      cover
      class="pt-2"
      >
      <v-list>
        <v-list-item
        prepend-avatar="https://encurtador.com.br/kmtUV"
        title="Marcos"
        subtitle="To Do list"
        >
      </v-list-item>
    </v-list>
           </v-img>
    
          <v-divider></v-divider>

          <v-list
            :lines="false"
            density="compact"
            nav
          >
          <router-link
            v-for="(item, i) in items"
            :key="i"
            :to="item.to">
            <v-list-item
              :value="item"
              color="primary"
            >
              <template v-slot:prepend>
                <v-icon :icon="item.icon"></v-icon>
              </template>

              <v-list-item-title :textContent="item.text"></v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list>


    </v-navigation-drawer>

    <v-app-bar
    density="prominent"
    image="https://picsum.photos/1920/1080?random">
    <template v-slot:image>
      <v-img
        gradient="to top right, rgb(106, 90, 205,.4), rgb(99, 44, 255,.5)"
      ></v-img>
    </template>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>To Do List</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'

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
</style>
