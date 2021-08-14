<template>
  <div class="login-view">
    <login-module></login-module>
  </div>
</template>

<script>
import LoginModule from '@/modules/login'
export default {
  name: 'LoginView',
  components: {
    LoginModule
  }
}
</script>

<style lang="scss" scoped>
.login-view {
  width: 100%;
  height: 100%;
}
</style>