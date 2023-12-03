<script setup lang="ts">
import ProjectComponent from './ProjectComponent.vue';
interface IProject {
  imgSrc: string,
  title: string,
  description: string,
  repository: string,
  languages: string
}

let projects: IProject[] = [];

projects = [
  {
    imgSrc: './../src/assets/images/thumbnails-projects/parachAdvent.jpg',
    title: 'ParachAdvent',
    description: 'Landing page de Marketing para a ParachAdvent, escola de paraquedismo.',
    repository: 'https://github.com/pedrohsouza20/parachAdvent',
    languages: ' Vue.js, SCSS, JavaScript'
  },
  {
    imgSrc: './../src/assets/images/thumbnails-projects/parachAdvent.jpg',
    title: 'Ask and Answers',
    description: 'Um site de perguntas e respostas, ao melhor estilo Yahoo!',
    repository: 'https://github.com/pedrohsouza20/Ask-Answers',
    languages: ' Node.js, Express.js, MySQL, Sequelize, EJS'
  },
  {
    imgSrc: './../src/assets/images/thumbnails-projects/parachAdvent.jpg',
    title: 'Blog',
    description: 'Um blog onde o administrador pode fazer vários posts',
    repository: 'https://github.com/pedrohsouza20/Blog',
    languages: ' Node.js, Express.js, MySQL, Sequelize, EJS'
  }
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
          <ProjectComponent :imgSrc=project.imgSrc :description=project.description :repository=project.repository
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

</style>

