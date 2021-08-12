<template>
  <div class="card-module-header">
    <label class="header-title text-size-small">Available balance</label>
    <div class="header-actions items-center">
      <span class="currency-tag text-white bg-primary">$$</span>
      <span class="currency-value boldest">3,000</span>
      <el-button class="btn-add-card text-white" size="mini">
        <div class="btn-custom-content d-flex items-center">
          <img src="/img/box.svg" />
          <span class="btn-text">New card</span>
        </div>
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardModuleHeader'
  
}
</script>

<style lang="scss" scoped>
.card-module-header {
  .header-actions {
    display: flex;
    .currency-tag {
      display: block;
      width: 40px;
      height: 24px;
      line-height: 24px;
      text-align: center;
      border-radius: calc(var(--el-border-radius-base) - 1px);
      margin-right: 12px;
      font-size: 0.8rem;
    }
    .currency-value {
      font-size: 1.5rem;
    }
    .btn-add-card { 
      margin-left: auto;
      background: #325BAF;
    }
  }
}

</style>
<style lang="scss">
.card-module-header {
  .header-actions {
    .btn-add-card {
      .btn-custom-content {
        .btn-text {
          margin: 5px;
        }
      }
    }
  }
}
</style>