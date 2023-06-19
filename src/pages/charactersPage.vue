<template>
	<AppHeader />
	<main class="d-flex align-items-center my-3">
		<div class="container scroll d-flex gap-5">
			<div class="row gap-2">
				<div v-for="character in characters" class="card text-center">
					<div class="rotate_item">
						<div class="card-img">
							<img :src="character.image" alt="{{ character.name }}" />
						</div>
						<div class="card-title">
							<h5 class="m-0 truncate infoContainer text-capitalize">{{ character.name }}</h5>
						</div>
						<div class="infoContainer">
							<p>
								{{ character.description }}
							</p>
							<p>
								{{ character.difficoulty }}
							</p>
							<p>
								{{ character.role }}
							</p>
							<p>
								{{ character.derivation }}
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
.card {
	border: 0;
	width: 280px;
	height: 450px;
	overflow: hidden;
	padding: 0;
	position: relative;

	&:hover .rotate_item{
		color: white;
		background-color: #90a19d;
		transform: rotatey(180deg);
		transition: 1.3s;

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
