<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue';
import PresentationComponent from './components/PresentationComponent.vue';
import ProjectsComponent from './components/ProjectsComponent.vue';
import SkillsComponent from './components/SkillsComponent.vue';
import TestimoniesComponent from './components/TestimoniesComponent.vue';
import ContactComponent from './components/ContactComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

</script>

<template>
  <HeaderComponent />
  <PresentationComponent />
  <ProjectsComponent />
  <SkillsComponent />
  <TestimoniesComponent />
  <ContactComponent />
  <FooterComponent />
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}
</style>
