<template>
  <div class="card-actions">
    <div 
      class="action cursor-pointer" 
      :title="action.title" 
      v-for="action in cardActions" 
      :key="action.id">
      <img :src="action.logo" class="action-logo"/>
      <p class="font-smaller action-title font-family-opensans-regular">{{action.title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardActions',
  data () {
    return {
      cardActions: [
        { id: 1, title: 'Freeze Card', logo: '/img/Freeze card.svg'},
        { id: 2, title: 'Set Spend Limit', logo: '/img/Set spend limit.svg'},
        { id: 3, title: 'Add to Gpay', logo: '/img/GPay.svg'},
        { id: 4, title: 'Replace Card', logo: '/img/Replace card.svg'},
        { id: 5, title: 'Cancel card', logo: '/img/Deactivate card.svg'},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.card-actions {
  display: flex;
  padding: 21px 31px;
  background: #EDF3FF;
  border-radius: calc(var(--el-border-radius-base) * 4);
  margin-top: 1rem;
  justify-content: space-between;
  .action {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    &-logo {
      width: fit-content;
      padding-bottom: 7px;
    }
    &-title {
      line-height: 1rem;
      padding: 0;
      margin: 0;
      color: #0C365A;
    }
    + .action {
     padding-left: 20px;
    }
  }
}
</style>