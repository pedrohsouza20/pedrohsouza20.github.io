<script setup lang="ts">
defineProps<{
  title: string,
  color: string,
  description: string
  icon?: string
}>()
</script>

<template>
  <article class="skill-item">
    <h3>
      {{ title }}
    </h3>
    <p :class='`color-${color}`'>
      {{ description }}
    </p>
  </article>
</template>

<style scoped>
article {
  max-width: 100%;
  width: 470px;
}
article p {
  background: #0E151E;
  border-left: 9px solid red;
  min-height: 70px;
  padding: 1em;
  display: flex;
  align-items: center;
}

article h3 {
  font-size: 22px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: normal;
  margin-bottom: 0.5em;
}

p {
  font-size: 1em;
}

p.color-pink {
  border-left: 9px solid #AD14BA;
}

p.color-purple {
  border-left: 9px solid #6C0BF6;
}

p.color-green {
  border-left: 9px solid #14BA56;
}

p.color-orange {
  border-left: 9px solid #E36823;
}
</style>

