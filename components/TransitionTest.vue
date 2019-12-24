<template>
  <div>
    <VScrollXTransition>
            <span
              v-if="!expanded"
              data-t="xxx"
            >&nbsp;xFxFx&nbsp;</span>
    </VScrollXTransition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      expanded: false
    }
  }
}
</script>
