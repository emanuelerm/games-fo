<template>
  <header>
    <nav class="d-flex align-items-center container">
      <h3 class="pe-200">{{ title }}</h3>
      <router-link
        v-for="link in links"
        :to="{ name: link.routeName }"
        class="nav-link ps-5"
        active-class="active"
      >
        {{ link.label }}
      </router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      title: "Welcome to LOL info",
      links: [
        {
          label: "Home",
          routeName: "home",
        },
        {
          label: "Characters",
          routeName: "characters",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

header{
    position: fixed;
    top:0px;
    z-index: 999;
}
.pe-200 {
  padding-right: 200px;
}

nav {
  height: 80px;
  color: white;
}

header {
  width: 100%;
  background-color: #061c25;
}

.nav-link:hover {
  color: aqua;
}
</style>
