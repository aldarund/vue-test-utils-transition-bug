<template>
  <div>
    xxx
  </div>
</template>
<script>
export default {
 props: {
    test: {
      default: 'xx',
      required: true
    },
    test2: {
      default: 'xx',
      required: true
    }
  },
  watch: {
    test: {
      handler: function (val, oldVal) { console.log(val, oldVal, this.test)},
      immediate: true
    },
    test2: {
      handler: function (val, oldVal) { console.log(val, oldVal, this.test)}
    }
  }
}
</script>
