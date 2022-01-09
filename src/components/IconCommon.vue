<template>
  <svg :style="{...style}">
    <use :href="iconName"></use>
  </svg>
</template>
<script>
export default {
  props: {
    style: {
      type: Object,
      default: () => {}
    },
    iconName: {
      type: String
    }
  }
}
</script>