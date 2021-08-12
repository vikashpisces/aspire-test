<template>
  <el-container class="app-layout">
    <el-header class="app-layout__header">
      <div class="brand row inline items-center cursor-pointer" @click="handleBrandClick">
        <img :src="logoSrc" class="app-logo" />
        <div class="text-primary boldest font-medium">
          {{pageTitle}}
        </div>
      </div>
    </el-header>

    <el-main class="app-layout__content">
      <slot>App Layout</slot>
    </el-main>
  </el-container>
</template>

<script>
import defaultLogo from '/img/logo.png'
export default {
  name: 'AppLayout',
  props: {
    pageTitle: { type: String, default: 'Title'},
    logoSrc: { type: String, default: defaultLogo }
  },
  data () {
    return {
    }
  },
  methods: {
    handleBrandClick () {
      this.$router.replace({ path: '/'} )
    }
  }
}
</script>

<style lang="scss">
.app-layout {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  &__header {
    height: 50px;
    position: fixed;
    width: 100%;
    background: #305473;
    box-shadow: 0px 2px 4px 0px #305473;
    .brand {
      padding: 5px 10px;
      * {
        margin-right: 10px;
      } 
    }
    .app-logo {
      width: 40px;
      height: 40px;
      img {
        object-fit: contain !important;
      }
    }
  }
  &__content {
    height: 100%;
    margin-top: 50px;
    overflow: hidden;
  }
}
</style>