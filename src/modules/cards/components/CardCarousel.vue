<template>
  <el-carousel 
    class="card-carousel"
    indicator-position="outside"
    :autoplay="false"
    arrow="never"
    trigger="click">
    <el-carousel-item 
      v-for="card in cardList"
      :key="card.id">
      <card :detail="card.data"></card>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import Card from './Card'

export default {
  name: 'CardCarousel',
  components: {
    Card
  },
  data () {
    return {
      cardList: [
        { id: 1, 
          data: { 
            cardTypeLogo: 'Visa Logo',
            cardHolderName: 'Mark Henry', 
            cardNumber: 1234567890122020, 
            expiry: '2020-12-31', 
            cvv: '123'
          }
        },
        { id: 2, 
          data: { 
            cardTypeLogo: 'Visa Logo',
            cardHolderName: 'Doe John', 
            cardNumber: 8764567826381920, 
            expiry: '2023-09-31', 
            cvv: '345'
          }
        },
        { id: 3, 
          data: { 
            cardTypeLogo: 'Visa Logo',
            cardHolderName: 'Howard Zhen', 
            cardNumber: 6475092047629278, 
            expiry: '2021-11-31', 
            cvv: '346'
          }
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.card-carousel {
  &.el-carousel {
    .el-carousel__container {
      height: 310px;
    }
    .el-carousel__indicator{
      button {
        background-color: #01D167;
        width: 8px;
        height: 8px;
        border-radius: calc(var(--el-border-radius-base) * 2);
        opacity: 0.2;
      }
      &.is-active {
        button {
          width: 16px;
          opacity: 1;
        }
      }
    }
  }
}

</style>