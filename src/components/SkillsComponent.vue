<script setup lang="ts">
import CardComponent from './CardComponent.vue';

interface ISkills {
  title: string,
  color: string,
  description: string,
  icon?: string
}

let skills: ISkills[] = [
  {
    title: 'Front-end',
    color: 'pink',
    description: 'Angular 2+, Vue.js 3, VueX, TypeScript, SCSS, VueX, Pinia'
  },
  {
    title: 'Back-end',
    color: 'purple',
    description: 'Node.js, Adonis.js, Express, MySQL'
  },
  {
    title: 'Design',
    color: 'green',
    description: 'UI, Heurísticas, Tipografia, Cores'
  },
  {
    title: 'Soft-skills',
    color: 'orange',
    description: 'Dedicado, Apaixonado por aprender, Amante do auto-didatismo'
  },
]
</script>

<template>
  <section class="skills" id="skills">
    <div class="container">
      <h2 class="title">
        Skills
      </h2>
      <ul class="skills-list">
        <li v-for="skill in skills">
          <CardComponent :title=skill.title :color=skill.color :description=skill.description :icon=skill.icon />
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
section .container {
  width: 1000px;
}

section.skills {
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

.skills-list {
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

