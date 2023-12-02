<script setup lang="ts">
defineProps<{
  title?: string,
  color: string,
  description: string
  icon?: string
  personName?: string,
  profission?: string
}>()
</script>

<template>
  <h3>
    {{ title }}
  </h3>
  <article  :class='`color-${color}`' class="card-item">
    <p class="description">
      {{ description }}
    <p :class="`${color}`" v-if="personName">
      <p :class="`${color}`" class="person-name">- {{ personName }},</p>
      <span :class="`${color}`"> {{ profission }}</span>
    </p>
    </p>
  </article>
</template>

<style scoped>
article {
  max-width: 100%;
  width: 470px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

p.purple, span.purple {
  color: #6C0BF6 !important;
}

p.pink, span.pink {
  color: #AD14BA
}
p.green, span.green {
  color: #14BA56
}
p.orange, span.orange {
  color: #E36823
}

.person-name {
  margin-top: 1.6em;
}

article{
  box-sizing: border-box;
  background: #0E151E;
  min-height: 90px;
  padding: 1em;
}

h3 {
  margin-top: 1.6em;
  font-size: 22px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: normal;
  margin-bottom: 0.5em;
}

p {
  font-size: 1em;
}

article.color-pink {
  border-left: 9px solid #AD14BA;
}

article.color-purple {
  border-left: 9px solid #6C0BF6;
}

article.color-green {
  border-left: 9px solid #14BA56;
}

article.color-orange {
  border-left: 9px solid #E36823;
}
</style>

