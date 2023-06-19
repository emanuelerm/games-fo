<template>
  <AppHeader/>
  <main>
      <div class="my-container">
      <svg class="my-svg" viewBox="0 0 1260 100">
        <symbol id="s-text">
          <text text-anchor="middle" x="50%" y="80%">
            Benvenuti in
          </text>
        </symbol>

        <g class="g-ants">
          <use xlink:href="#s-text" class="text-copy"></use>
          <use xlink:href="#s-text" class="text-copy"></use>
          <use xlink:href="#s-text" class="text-copy"></use>
          <use xlink:href="#s-text" class="text-copy"></use>
          <use xlink:href="#s-text" class="text-copy"></use>
          <use xlink:href="#s-text" class="text-copy"></use>
        </g>
      </svg>

      <svg class="my-svg2" viewBox="0 0 1260 100">
        <symbol id="s-text2">
          <text text-anchor="middle" x="50%" y="80%">
            Game creator
          </text>
        </symbol>

        <g class="g-ants2">
          <use xlink:href="#s-text2" class="text-copy2"></use>
          <use xlink:href="#s-text2" class="text-copy2"></use>
          <use xlink:href="#s-text2" class="text-copy2"></use>
          <use xlink:href="#s-text2" class="text-copy2"></use>
          <use xlink:href="#s-text2" class="text-copy2"></use>
          <use xlink:href="#s-text2" class="text-copy2"></use>
        </g>
      </svg>
    </div>
  </main>
  
  <AppFooter/>
</template>

<script>
import AppHeader from '../../components/AppHeader.vue';
import AppFooter from '../../components/AppFooter.vue';
export default {
  name: "LandingPage",
  components: {
    AppHeader, AppFooter
  }
  
};
</script>

<style lang="scss" scoped>
  @import url(https://fonts.googleapis.com/css?family=Montserrat);

  main{
    margin-top: 80px;
  }

.my-continer{
	display: flex;
	height: 100%;
	width: 100%;
	align-items:center ;
}

.my-svg{
	display: block;
	font:6rem "Montserrat";
	width: 100%;
	height: 200px;
	margin: 0;
}

.text-copy{
	fill: none;
	stroke: white;
	stroke-dasharray: 6% 29%;
	stroke-width: 5px;
	stroke-dashoffset: 0%;
	animation: stroke-offset 5.5s infinite linear;
}

.text-copy:nth-child(1){
	stroke: #196774;
	animation-delay: -1;
}

.text-copy:nth-child(2){
	stroke: #ffffff;
	animation-delay: -2s;
}

.text-copy:nth-child(3){
	stroke: #90a19d;
	animation-delay: -3s;
}

.text-copy:nth-child(4){
	stroke: #ef3b2d;
	animation-delay: -4s;
}

.text-copy:nth-child(5){
	stroke: #196774;
	animation-delay: -5s;
}

.text-copy:nth-child(6){
	stroke: #ef3b2d;
	animation-delay: -6.8s;
}
@keyframes stroke-offset{
	100% {stroke-dashoffset: -35%;};
}

//dashboard
ul{
	list-style-type: none;
}

.my-continer2{
	display: flex;
	height: 100%;
	width: 100%;
	align-items:center ;
}

.my-svg2{
	display: block;
	font:6rem "Montserrat";
	width: 100%;
	height: 200px;
	margin: 0;
}

.text-copy2{
	fill: none;
	stroke: white;
	stroke-dasharray: 6% 29%;
	stroke-width: 5px;
	stroke-dashoffset: 0%;
	animation: stroke-offset 5.5s infinite linear;
}

.text-copy2:nth-child(1){
	stroke: #196774;
	animation-delay: -1;
}

.text-copy2:nth-child(2){
	stroke: #ffffff;
	animation-delay: -2s;
}

.text-copy2:nth-child(3){
	stroke: #90a19d;
	animation-delay: -3s;
}

.text-copy2:nth-child(4){
	stroke: #ef3b2d;
	animation-delay: -4s;
}

.text-copy2:nth-child(5){
	stroke: #196774;
	animation-delay: -5s;
}

.text-copy2:nth-child(6){
	stroke: #ef3b2d;
	animation-delay: -6.8s;
}
@keyframes stroke-offset{
	100% {stroke-dashoffset: -35%;};
}
</style>
