<script setup lang="ts">
defineProps<{
  imgSrc: string,
  title: string,
  description: string,
  repositoryUrl: string
  languages: string
}>()
</script>

<template>
  <article class="project-item">
    <img :src=imgSrc :alt="title">
    <h3 class="project-title">{{ title }}</h3>
    <p class="project-description">{{ description }}</p>
    <span class="project-languages">{{ languages }}</span>
    <button>
      VER REPOSITÓRIO
    </button>
  </article>
</template>

<style scoped>
article {
  display: flex;
  flex-direction: column;
  width: 320px;
  max-width: 100%;
  min-height: 300px;
  padding: 1.2em;
  box-sizing: border-box;
  border-radius: 12px;
  border: 1px solid #AD14BA;
}

.project-title {
  font-size: 1.6em;
  font-family: 'Poppins', sans-serif;
  margin: 1em 0;
}

.project-description {
  height: 80px;
}

.project-languages{
height: 20px;
}

p {
  font-size: 1em;
}

span.project-languages {
  margin: 1.4em 0;
  color: #AD14BA;
  font-size: 0.8em;
  vertical-align: middle;
}

span::before {
  content: '';
  display: inline-block;
  width: 5px;
  height: 5px;
  background-color: #AD14BA;
  border-radius: 100%;
  vertical-align: middle;
}

button {
  user-select: none;
  margin-top: 22px;
  background-color: #AD14BA;
  width: 170px;
  height: 35px;
  border: none;
  font-family: 'Inter', sans-serif;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
}
</style>

