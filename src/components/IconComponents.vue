<template>
  <div class="svg-line">
    <svg width="20px" height="20px" viewBox="0 0 100 100">
      <line x1="0" x2="100" y1="50" y2="50" stroke-width="10" stroke="currentColor"></line>
      <line x1="50" x2="50" y1="0" y2="100" stroke-width="10" stroke="currentColor"></line>
    </svg>
    <svg width="500px" height="200px" style="border: 1px solid black">
      <rect x="100" y="100" width="100" height="50" style="stroke: black; fill: none" stroke-width="100"></rect>
    </svg>

    <svg width="200px" height="100px" >
      <defs>
        <symbol id="more" viewBox="0 0 100 100">
          <circle r="5" cx="20" cy="25" fill="currentColor" stroke-width="5"></circle>
          <circle r="5" cx="20" cy="50" fill="currentColor" stroke-width="5"></circle>
          <circle r="5" cx="20" cy="75" fill="currentColor" stroke-width="5"></circle>
          <line x1="40" y1="25" x2="90" y2="25" stroke="currentColor" stroke-width="5"></line>
          <line x1="40" y1="50" x2="80" y2="50" stroke="currentColor" stroke-width="5"></line>
          <line x1="40" y1="75" x2="90" y2="75" stroke="currentColor" stroke-width="5"></line>
        </symbol>
      </defs>
    </svg>
  </div>
</template>
<script>
export default {


}
</script>

<style scoped>
.svg-line {
  color: red;
}
</style>
