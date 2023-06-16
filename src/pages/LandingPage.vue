<template>
  <div class="container">
    <div class="row">
      <h3>{{ title }}</h3>
      <router-link
        :to="{ name: link.routeName }"
        class="nav-link"
        active-class="active"
      >
        {{ link.label }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
  data() {
    return {
      title: "welcome to games fo",
      link: {
        label: "Characters",
        routeName: "characters",
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
