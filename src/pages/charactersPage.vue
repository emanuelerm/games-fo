<template>
	<AppHeader />
	<main class="d-flex align-items-center my-3">
		<div class="container scroll d-flex ">
			<div class="row gap-5 justify-content-center">
				<div v-for="character in characters" class="card text-center">
					<div class="rotate_item">
						<div class="card-img">
							<img :src="character.image" alt="{{ character.name }}" />
						</div>
						<div class="card-title">
							<h2 class="m-0 truncate infoContainer text-capitalize">
								{{ character.name }}</h2>
						</div>
						<div class="infoContainer">
							<p>
								<span class="fw-2 text-uppercase fw-bold">difficoulty:</span> <br>
								{{ character.difficoulty }}
							</p>
							<p>
								<span class="fw-2 text-uppercase fw-bold">role:</span> <br>
								{{ character.role }}
							</p>
							<p>
								<span class="fw-2 text-uppercase fw-bold">description:</span> <br>
								{{ character.description }}
							</p>

						</div>
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
main{
	padding-top: 150px;
}
.row{
	flex-wrap: wrap;
}

.card {
	border: 0;
	width: calc(100% / 3);
	height: 550px;
	overflow: hidden;
	padding: 3%;
	position: relative;
	z-index: 1;
	&:hover {
		overflow: visible;
		height: 650px;
	}
	&:hover .rotate_item{
		height: 550px;
		color: white;
		padding: 10px;
		background-color: #90a19d;
		transform: rotatey(180deg);
		transition: 1.6s;
		z-index: 4;

		.infoContainer {
			transform: rotatey(180deg);
		}

		img {
			opacity: 0;
			transition: 1s;
		}
	}

	img {
		object-fit: cover;
		overflow: hidden;
		width: 100%;
		height: 100%;
		position: absolute;
		left: 50%;
		transform: translateX(-55%);
		margin: 0;
	}
}
</style>
