<script setup lang="ts">
import ProjectComponent from './ProjectComponent.vue';
interface ISkills {
  imgSrc: string,
  title: string,
  description: string,
  repositoryUrl: string,
  languages: string
}

let skills: ISkills[] = [];

skills = [
]

</script>

<template>
  <section class="projects" id="projects">
    <div class="container">
      <h2 class="title">
        Projetos
      </h2>
      <ul class="projects-list">
        <li v-for="project in projects">
          <ProjectComponent :imgSrc=project.imgSrc :description=project.description :repositoryUrl=project.repositoryUrl
            :title=project.title :languages=project.languages />
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
section .container {
  width: 1000px;
}

section.presentation {
  width: 100%;
  display: flex;
  justify-content: center;
}

section.presentation article {
  width: 1000px;
  display: flex;
}

article {
  margin-top: 3em;
}

.text-purple {
  color: var(--purple)
}

h1 {
  margin-top: 1.75em;
  font-size: 2.25em;
  max-width: 370px;
  color: #fff;
  font-family: Arial, sans-serif
}

.projects-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

p {
  margin-top: 1em;
  max-width: 550px;
  font-size: 1.125em;
  color: #fff;
  font-family: 'Inter', sans-serif;
}

.article-content {
  z-index: 2;
  position: absolute;
}

.presentation-photo {
  position: relative;
  left: calc(100% - 372px);
  align-self: flex-end;
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

