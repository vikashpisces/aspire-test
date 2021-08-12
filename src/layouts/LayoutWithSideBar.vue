<template>
  <el-container class="side-bar__layout">
    <el-aside width="25%" class="side-bar__left-drawar bg-dark">
      <section class="brand cursor-pointer" @click="handleBrandClick">
        <img :src="logoSrc" class="app-logo" />
        <div class="tag-line text-muted font-15 font-family-opensans-regular">
          {{tagline}}
        </div>
      </section>
      <section class="side-bar__left-drawar__content">
        <slot name="side-bar__content"></slot>
      </section>
    </el-aside>
    <el-main class="side-bar__content">
      <slot></slot>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'LayoutWithSideBar',
  props: {
    tagline: { type: String, default: ''},
    logoSrc: { type: String, default: '/img/logo.svg' }
  },
  methods: {
    handleBrandClick () {
      this.$router.replace({ path: '/'} )
    }
  }
}
</script>

<style lang="scss" scoped>
.side-bar {
  &__layout {
    height: 100%;
  }
  &__left-drawar {
    display: flex;
    flex-direction: column;
    .brand {
      height: 150px;
      padding: 3rem;
      .tag-line {
        margin-top: 1.2rem;
      }
    }
    &__content {
      height: 100%;
    }
  }
  &__content {
    height: 100%;
    padding: 4rem;
    padding-bottom: 0;
  }
}
</style>