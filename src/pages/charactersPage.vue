<template>
  <AppHeader />
  <main class="d-flex align-items-center my-3">
    <div class="container scroll d-flex gap-5">
      <div class="row">
        <div v-for="character in characters" class="card">
          <div class="card-img">
            <img :src="character.image" alt="{{ character.name }}" />
          </div>
          <div class="card-title">
            <h5 class="m-0 truncate">{{ character.name }}</h5>
          </div>
        </div>
      </div>
    </div>
  </main>
  <AppFooter />
</template>

<script>
import axios from "axios";
import AppHeader from "../components/AppHeader.vue";
import AppFooter from "../components/AppFooter.vue";
export default {
  name: "charactersPage",
  components: {
    AppHeader,
    AppFooter,
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

<style lang="scss" scoped>
.card {
  width: 300px;
  height: 450px;
  overflow: hidden;
  padding: 0;
  position: relative;
  img {
    object-fit: cover;
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 50%;
    transform: translateX(-55%);
  }
}
</style>
