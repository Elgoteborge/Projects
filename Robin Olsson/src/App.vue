<script>
  import Webshop from "./components/Webshop.vue"
  import Down from "./components/Down.vue"

  export default {
    components: {
      Webshop,
      Down
    }
  }
</script>

<template>
  <Webshop msg="Stil, funktion, hållbarhet." />

  <div>
    <nav>
      <ul>
        <li>
          <RouterLink to="/">Hem</RouterLink>
        </li>
        <li>
          <RouterLink to="/about">Om oss</RouterLink>
        </li>
      </ul>
    </nav>
    <main>
      <RouterView />
    </main>
  </div>

<Down />
</template>

<style scoped>
* {
    box-sizing: border-box;
}
div {
    display: flex;
    width: 100%;
}

nav {
    width: 5%;
    display: flex;
    justify-content: center;
    flex-shrink: 0;
}
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

ul li {
    display: flex;
    align-items: center;
    height: 1.5em;
    margin-bottom: 0.5em;
  }

ul li a {
    text-decoration: none;
    color: black;
    padding: 7px;
    display: block;
}

ul li a:hover {
    background-color: #e6e4e0;
}

.main {
    width: 95%;
    flex-grow: 1;
}
</style>
