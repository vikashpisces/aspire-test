<template>
  <div class="card-module-body">
    <el-tabs
      v-model="activeTabName"
      class="card-tabs"
    >
      <el-tab-pane
        v-for="tab in tabList"
        :key="tab.name"
        :name="tab.name"
        :label="tab.label"

      >
        <component :is="tab.component"></component>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import MyDebitCard from './MyDebitCard'
import AllCompanyCard from './AllCompanyCard'
export default {
  name: 'CardModuleBody',
  components: {
    MyDebitCard,
    AllCompanyCard
  },
  data () {
    return {
      tabList: [
        { name: 'my-debit-cards', label: 'My debit cards', component: MyDebitCard },
        { name: 'all-company-cards', label: 'All company cards', component: AllCompanyCard }
      ],
      activeTabName: 'my-debit-cards'
    }
  }
}
</script>

<style lang="scss">
.card-module-body {
  width: 100%;
  height: 100%;
  .card-tabs {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    &.el-tabs {
      .el-tabs__active-bar {
        background-color: #23CEFD;
      }
      .el-tabs__content {
        height: 100%;
        border: 1px solid #FCFCFC;
        border-radius: calc(var(--el-border-radius-base) * 2);
        box-shadow: 0px 2px 12px #00000014;
        .el-tab-pane {
          height: 100%;
        }
      }
      .el-tabs__item {
        opacity: 0.3;
        &.is-active {
          color: inherit;
          font-weight: 600;
          opacity: 1;
        }

      }
      .el-tabs__nav-wrap {
        &:after {
          background: inherit;
        }
      }
    }
  }
}

</style>