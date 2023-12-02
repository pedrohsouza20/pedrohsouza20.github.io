<script setup lang="ts">
import CardComponent from './CardComponent.vue';

interface IContact {
  color: string,
  description: string,
  icon?: string
}

let contacts: IContact[] = [
  {
    color: 'pink',
    description: '(38) 9 8409-2330',
    icon: "./../src/assets/icons/whatsapp.svg"
  },
  {
    color: 'purple',
    description: 'Pedro Souza',
    icon: "./../src/assets/icons/linkedin.svg"
  },
]
</script>

<template>
  <section class="contact" id="contact">
    <div class="container">
      <h2 class="title">
        Contato
      </h2>
      <ul class="contact-list">
        <li v-for="contact in contacts">
          <CardComponent :color=contact.color :description=contact.description :icon=contact.icon />
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
section .container {
  width: 1000px;
}

.text-purple {
  color: var(--purple)
}

.contact-list {
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

</style>

