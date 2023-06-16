<template>
  <ul>
    <li v-for="character in characters">{{ character.name }}</li>
  </ul>
</template>

<script>
import axios from "axios";
export default {
  name: "charactersPage",
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
