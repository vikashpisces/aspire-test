<template>
  <div class="card-module">
    <card-module-header></card-module-header>
    <card-module-body></card-module-body>
  </div>
</template>

<script>
import CardModuleHeader from './components/CardModuleHeader'
import CardModuleBody from './components/CardModuleBody'
export default {
  name: 'CardModule',
  components: {
    CardModuleHeader,
    CardModuleBody
  }
}
</script>

<style lang="scss" scoped>
.card-module {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>