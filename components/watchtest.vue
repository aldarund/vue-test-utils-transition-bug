<template>
  <div>
    xxx
  </div>
</template>
<script>
  export default {
    props: ['test', 'test2', 'test3'],
    watch: {
      test: {
        handler: function (val, oldVal) {
          console.log(val, oldVal, this.test)
        },
        immediate: true
      },
      test2: {
        handler: function (val, oldVal) {
          console.log(val, oldVal, this.test)
        }
      }
    },
    mounted () {
      this.$watch(
        'test3',
        function () {
          console.log(this.test3)
        },
        { immediate: true }
      )
    }
  }
</script>
