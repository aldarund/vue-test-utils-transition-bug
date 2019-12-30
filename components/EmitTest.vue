<template>

  <TransitionTest id="v1" @something="v1=true">
    <TransitionTest id="v2" @something="v2=true">
    </TransitionTest>
  </TransitionTest>
</template>
<script>
import TransitionTest from '~/components/TransitionTest.vue'
export default {
  components: {
    TransitionTest
  },
  data() {
    return {
      v1: false,
      v2: false
    }
  }
}
</script>
