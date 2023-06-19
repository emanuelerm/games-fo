<template>
  <AppHeader/>
  <AppFooter/>
</template>

<script>
import axios from "axios";
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';
export default {
  name: "charactersPage",
  components: {
    AppHeader, AppFooter
  },
  data() {
    return {
      characters: [],
      activePage: 1,
      apiEndpoint: "/character?page=",
      apiUrl: "http://127.0.0.1:8000/api",
    };
  },
  methods: {
    getData() {
      console.log("ciao");
      axios.get(`${this.apiUrl}/characters`).then((res) => {
        this.characters = res.data.results.data;
      });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped></style>
