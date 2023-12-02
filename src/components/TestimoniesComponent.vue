<script setup lang="ts">
import CardComponent from './CardComponent.vue';

interface ITestimony {
  description: string,
  personName: string,
  profission: string,
  color: string
}

let testimonies: ITestimony[] = [
  {
    description: '"Pedro, é um desenvolvedor Front-end, e destaca-se pela excepcional clareza e escalabilidade de seus códigos. Seu talento evidencia-se na lógica impecável aplicada, proporcionando soluções elegantes para desafios complexos. Pedro não apenas eleva a qualidade das aplicações, mas também inspira todos ao seu redor com seu trabalho preciso e estratégico."',
    personName: 'Paulo Roberto',
    profission: 'CEO da Meet Developers - Soluções Tecnológicas',
    color: 'pink'
  },
  {
    description: '"Testemunha 2"',
    personName: 'John Doe',
    profission: 'Engenheiro de Software',
    color: 'purple'
  },
]
</script>

<template>
  <section class="testimonies" id="testimony">
    <div class="container">
      <h2 class="title">
        Depoimentos
      </h2>
      <ul class="testimony-list">
        <li v-for="testimony in testimonies">
          <CardComponent :description=testimony.description :color=testimony.color :personName=testimony.personName
            :profission=testimony.profission />
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

.testimony-list {
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

