<template>
  <div class="card-view">
    <card-module />
  </div>
</template>

<script>
import CardModule from '@/modules/cards'
export default {
  name: 'CardView',
  components: {
    CardModule
  }
}
</script>

<style lang="scss" scoped>
.card-view {
  width: 100%;
  height: auto;
  margin-bottom: 1.5rem
}
</style>