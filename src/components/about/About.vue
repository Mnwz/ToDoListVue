<template>
    <div class="ma-4 text-center">
      <h1 class="ma-4">Olá,</h1>
      <p class="ma-4">Obrigado por utilizar a minha aplicação. Pretendo melhorá-la aos poucos e deixo aqui as tecnologias que foram utilizadas.
      </p>
      <v-divider></v-divider>
    </div>
    <div></div>
    <div class="ma-4 d-flex">
      <AboutCard
        v-for="(item, index) in items"
        :key="index"
        :image="item.image"
        :title="item.title"
        :subtitle="item.subtitle"
        :text="item.text"
      />
    </div>
  
    <div class="text-center">
      <v-divider class="ma-4"></v-divider>
      <a
        target="_blank"
        href="https://github.com/Mnwz"
        alt="Github"
      >
        <v-btn color="#691769"> Meu github ✌️ </v-btn>
      </a>
    </div>
  </template>
  
  <script setup>
  import AboutCard from "@/components/about/AboutCard.vue";
  
  const items = [
    {
      image:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*OrjCKmou1jT4It5so5gvOA.jpeg",
      title: "Vue.js",
      subtitle: "The Progressive JavaScript Framework",
      text: "Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex.",
    },
    {
      image:
        "https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-dark-atom.svg",
      title: "Vuetify 3",
      subtitle: "Incível biblioteca front-end",
      text: "Learn more about what Vuetify is, how to create an application from scratch, browse API references, sample code, tutorials, and more.",
    },
    {
      image:
        "https://fineproxy.org/wp-content/uploads/2023/07/netlify.app_logo.png",
      title: "Netlify",
      subtitle: "Netlify Embeds Serverless Functionality into Its Web",
      text: "Netlify is the modern development platform for Enterprises to realize the speed, agility and performance of a scalable, composable web architecture.",
    },
    {
      image:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*UWpmhI3AEdFY7gjHIZH-2w.png",
      title: "PWA",
      subtitle: "Progressive Web App",
      text: "Web apps have long played second-fiddle to native ones. While mobile apps benefit from full access to device APIs, snappy performance and support for features such as offline content and push notifications, the stateless and browser sandboxed nature of the web has frequently relegated web-based apps to second choice.",
    },
  ];
  </script>
  
  <style>
  </style>