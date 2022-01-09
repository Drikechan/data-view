<template>
  <div class="container">
    <svg width="500" height="200" viewBox="0 0 500 200">
      <rect ></rect>
    </svg>
    <svg width="440px" height="440px" viewBox="0 0 440 440" >
      <circle cx="220" cy="220" r="200" stroke-width="20" stroke="#d1d3d7" fill="transparent"></circle>
      <circle class="circle" transform="matrix(0 -1 1 0 0 440)" cx="220" cy="220" r="200" stroke-width="20 " stroke="#00a5e0" fill="transparent"></circle>
    </svg>
    <svg t="1641176491725"  viewBox="0 0 1024 1024" width="200" height="200">
      <path class="category" d="M490.666667 533.333333v256a64 64 0 0 1-64 64h-192a64 64 0 0 1-64-64v-192a64 64 0 0 1 64-64h256z m298.666666 0a64 64 0 0 1 64 64v192a64 64 0 0 1-64 64h-192a64 64 0 0 1-64-64V533.333333h256z m-362.666666 64h-192v192h192v-192z m362.666666 0h-192v192h192v-192zM426.666667 170.666667a64 64 0 0 1 64 64v256H234.666667a64 64 0 0 1-64-64v-192a64 64 0 0 1 64-64h192z m266.666666 0a160 160 0 1 1 0 320 160 160 0 0 1 0-320zM426.666667 234.666667h-192v192h192v-192z m266.666666 0a96 96 0 1 0 0 192 96 96 0 0 0 0-192z" p-id="6673"></path>
    </svg>
    <svg width="300" height="300">
      <circle cx="0" cy="0" r="30" fill="blue" stroke="black" stroke-width="5">
        <animate attributeName="cy" attributeType="XML" from="0" to="100" dur="1" fill="freeze"></animate>
      </circle>
    </svg>
    <svg width="200" height="200" viewBox="0 0 200 200">
      <rect x="0" y="0" width="10" height="10" fill="red">
        <animateMotion path="M10 10 L110 10 L110 110 L10 110  Z"
        dur="5" rotate="0" repeatCount="2" fill="freeze"></animateMotion>
      </rect>
      <path d="M10 10 L110 10 L110 110 L10 110  Z" stroke="green" stroke-width="1" fill="transparent"></path>
    </svg>
    <svg width="200" height="200" viewBox="0 0 200 200">
      <rect x="0" y="0" width="10" height="10" fill="red">
        <animateMotion id="forward-rect" path="M10 10 L110 10 L110 110 L10 110  "
                       dur="5" rotate="0" fill="freeze" begin="0; backward-rect.end + 0.5s"></animateMotion>
        <animateMotion id="backward-rect" path="M10 110 L110 110 L110 10 L10 10"
                       dur="5" rotate="0" fill="freeze" begin="forward-rect.end + 0.5s"></animateMotion>
        <animate attributeName="fill"
        attributeType="XML"
        id="red-to-blue"
        from="red"
        to="end"
        dur="5s"
        fill="freeze"
        begin="0">
        </animate>
        <animate attributeName="fill"
                 attributeType="XML"
                 id="bule-to-red"
                 from="blue"
                 to="end"
                 dur="5s"
                 fill="freeze"
                 begin="red-to-blue.end + 0.5s">
        </animate>
      </rect>
      <path d="M10 10 L110 10 L110 110 L10 110" stroke="green" stroke-width="1" fill="transparent"></path>
    </svg>
    <svg width="400" height="400" style="background: #333">
      <defs>
        <path id="fly-box-path" d="M5 5 L395 5 L395 395 L5 395 Z" fill="transparent"></path>
        <mask id="fly-box-mask">
          <circle r="100" cx="0" cy="0" fill="white">
            <animateMotion dur="3s" path="M5 5 L395 5 L395 395 L5 395 Z" rotate="0" repeatCount="indefinite"></animateMotion>
          </circle>
        </mask>
        <linearGradient id="test-linear-gradient">
          <stop offset="0%" stop-color="red" stop-opacity="1"></stop>
          <stop offset="50%" stop-color="green" stop-opacity="0.5"></stop>
          <stop offset="100%" stop-color="blue" stop-opacity="0.2"></stop>
        </linearGradient>
        <!-- radialGradient提供cx、cy外圈，fx、fy内圈，r为半径 -->
        <radialGradient id="test-radial-gradient" r="50%" cx="50%" cy="50%"
          fx="50%" fy="50%">
          <stop offset="0%" stop-opacity="1" stop-color="#fff"></stop>
          <stop offset="100%" stop-opacity="0" stop-color="#fff"></stop>
        </radialGradient>
      </defs>
      <use href="#fly-box-path" stroke-width="1" stroke="#235fa7"></use>
      <use href="#fly-box-path" stroke-width="3" stroke="#4fd2dd" mask="url(#fly-box-mask)"></use>
<!--      <rect width="390" height="390" fill="url(#test-linear-gradient)"></rect>-->
      <circle cx="200" cy="200" r="190" fill="url(#test-radial-gradient)"></circle>
    </svg>
  </div>
</template>
<script>
import { onMounted } from "vue";

export default {
  setup() {
    console.log(1)
    onMounted(() => {
      const svgDom = document.getElementsByClassName('category')[0];
      console.log(svgDom)
      console.log(svgDom.getTotalLength())
    })

  }
}
</script>

<style scoped >

svg {
  border: 1px solid black;
}
.circle {
  animation: circle 5s linear infinite;
}
@keyframes circle {
  from {
    stroke-dasharray: 0 1382 ;
  }
  to {
    stroke-dasharray: 1382 0 ;
  }
}

.category {
  fill: transparent;
  stroke-width: 5;
  stroke: #333;
  animation: category 5s linear forwards;
}
@keyframes category {
  0% {
    fill: transparent;
    stroke: wheat;
    stroke-dasharray: 7505;
    stroke-dashoffset: 7505;
  }
  50% {
    fill: transparent;
    stroke: wheat;
    stroke-dasharray: 7505;
    stroke-dashoffset: 0;
  }
  75% {
    fill: #42b983;
    stroke: #42b983;
  }
  100% {
    fill: purple;
    stroke: purple;
  }

}
</style>