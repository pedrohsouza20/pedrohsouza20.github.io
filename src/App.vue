<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import HeaderComponent from './components/HeaderComponent.vue';
import PresentationComponent from './components/PresentationComponent.vue';
import ProjectsComponent from './components/ProjectsComponent.vue';
import SkillsComponent from './components/SkillsComponent.vue';

</script>

<template>
  <HeaderComponent />
  <PresentationComponent />
  <ProjectsComponent />
  <SkillsComponent />
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
