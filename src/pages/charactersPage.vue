<template>
	<div>

	</div>
</template>

<script>
import axios from 'axios';
	export default {
		name:'charactersPage',
		data() {
			return {
				characters: [],
				apiEndpoint:'/character?page=',
				apiUrl: 'http://127.0.0.1:8000/api'
			}
		},
		methods:{
			getData(){
				axios.get(`${this.apiUrl}/character`).then((res)=>{
					this.characters = res.data.result.data,
					console.log(res);
				})
			},
			mounted() {
			this.getData();
		}
		}
	}
</script>

<style lang="scss" scoped>

</style>