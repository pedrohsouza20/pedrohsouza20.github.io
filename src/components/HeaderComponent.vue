<script setup lang="ts">
</script>

<template>
  <header>
    <div class="size-limiter">
      <nav>
        <ul>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
      <aside>
        <ul>
          <li>
            <a href=""><img src="./../assets/icons/linkedin.svg" alt=""></a>
          </li>
          <li>
            <a href=""><img src="./../assets/icons/github.svg" alt=""></a>
          </li>
        </ul>
      </aside>
    </div>
  </header>
</template>

<style scoped>
header {
  user-select: none;
  position: fixed;
  top: 0%;
  z-index: 10;
  width: 100%;
  height: 60px;
  display: flex;
  background-color: #0E151E;
  justify-content: center;
  font-family: 'Inter', sans-serif;
}

.size-limiter {
  width: 1000px;
  padding: 0 60px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header nav {
}

header ul {

  list-style-type: none;
  display: flex;
}

header nav ul li {
  margin-right: 3.5em;
}

header ul li a {
  text-decoration: none;
  color: #fff;
}

header aside ul{
  display: flex;
  align-items: center;
}

header aside ul li {
  margin-top: 8px;
  align-self: center;
}

header aside li {
  margin-left: 22px;
}

header aside img {
  width: 25px;
}
</style>

