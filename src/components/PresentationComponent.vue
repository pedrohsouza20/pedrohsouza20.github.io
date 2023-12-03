<script setup lang="ts">
import ButtonComponent from './ButtonComponent.vue';
</script>

<template>
  <section class="presentation">
    <article>
      <div class="article-content">
        <h1><span class="text-purple">Olá! Sou o Pedro,</span> Full-stack Developer</h1>
        <p>Aficionado por tecnologia e verdadeiro entusiasta do que faço,
          estou em constante evolução em busca do meu sucesso
          profissional e pessoal.</p>
          <ButtonComponent
          :targetType="'_blank'"
          :linkTo="'https://drive.google.com/file/d/12aWEO-HnFc6Sz_rUWZYjSxUJCqv4a7_U/view?usp=drive_link'"
          :text="'Download CV'"
          />
      </div>
      <img class="presentation-photo" src="./../assets/images/presentation-photo.png" alt="">
    </article>
  </section>
</template>

<style scoped>
section.presentation {
  box-sizing: border-box;
}

section.presentation article {
  width: 1000px;
  display: flex;
}

article{
  margin-top: 3em;
}
.text-purple {
  color: var(--purple)
}

h1 {
  font-size: 2.25em;
  max-width: 370px;
  color: #fff;
  font-family: Arial, sans-serif
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

.presentation-photo{
  position: relative;
  left: calc(100% - 372px);
  align-self: flex-end;
}

button{
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

