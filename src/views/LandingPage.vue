<template>
  <layout-with-side-bar 
    tagline="Trusted way of banking for 3,000+ SMEs and startups in Singapore">
    <router-view />
    <template v-slot:side-bar__content>
      <el-menu
        default-active="/home"
        background-color="#0C365A"
        active-text-color="#01D167"
        text-color="#fff"
        router>
        <el-menu-item 
          v-for="menu in menuList"
          :key="menu.id"
          :index="''+menu.id"
          class="font-family-opensans-regular">
          <template #title>
            <img class="menu-icon" :src="`/img/${menu.iconFile}.svg`" />
            <span class="menu-title">{{menu.title}}</span>
          </template>
        </el-menu-item>
      </el-menu>
    </template>
  </layout-with-side-bar>
</template>

<script>
import LayoutWithSideBar from '@/layouts/LayoutWithSideBar.vue'

export default {
  name: 'LandingPage',
  components: {
    LayoutWithSideBar
  },
  props: {
  },
  data () {
    return {
      menuList: [
        { id: '/home', title: 'Home', iconFile: 'Home'},
        { id: '/card', title: 'Cards', iconFile: 'Card'},
        { id: '/payment', title: 'Payments', iconFile: 'Payments'},
        { id: '/credit', title: 'Credit', iconFile: 'Credit'},
        { id: '/account', title: 'Settings', iconFile: 'Account'},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.app-view {
  .side-bar__left-drawar {
    overflow: hidden;
    .el-menu {
      padding: 0;
      box-sizing: border-box;
      &-item {
        width: 101%;
        padding-left: 3rem !important;
        font-size: 1rem;
        .menu-icon {
          margin-right: 1rem;
        }
      }
    }
    &__content {
      height: 100%;
      width: 100%;
      overflow: hidden;
    }
  }
}

</style>
<style lang="scss">
.app-view {
  .side-bar__left-drawar {
    overflow: hidden;
  }
}
</style>