<template>
  <layout-with-side-bar 
    tagline="Trusted way of banking for 3,000+ SMEs and startups in Singapore">
    <router-view />
    <template v-slot:side-bar__content>
      <el-menu
        default-active="2"
        background-color="#0C365A"
        active-text-color="#01D167"
        text-color="#fff">
        <el-menu-item 
          v-for="menu in menuList"
          :key="menu.id"
          :index="''+menu.id">
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
  name: 'Home',
  components: {
    LayoutWithSideBar
  },
  props: {
  },
  data () {
    return {
      menuList: [
        { id: '1', title: 'Home', iconFile: 'Home'},
        { id: '2', title: 'Cards', iconFile: 'Card'},
        { id: '3', title: 'Payments', iconFile: 'Payments'},
        { id: '4', title: 'Credit', iconFile: 'Credit'},
        { id: '5', title: 'Settings', iconFile: 'Account'},
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