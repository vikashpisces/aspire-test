<template>
  <div class="my-debit-cards">
    <section class="card-section">
      <el-row>
        <el-col :md="12" class="left-col">
          <card-carousel></card-carousel>
          <card-actions></card-actions>
        </el-col>
        <el-col :md="12" class="right-col">
          <el-collapse
            v-model="activeAccordion">
            <el-collapse-item
              v-for="item in accordions"
              :key="item.name"
              :name="item.name"
              class="outer-collapse-item"
              >
                <template #title>
                  <div class="custom-collapse-header">
                    <img :src="item.logo"/>
                    <span class="accordion-title font-family-opensans-regular">{{item.label}}</span>
                    <img class="arrow" src="img/up-arrow.svg" v-if="activeAccordion !== item.name"/>
                    <img class="arrow" src="img/down-arrow.svg" v-else/>
                  </div>
                </template>
              <component :is="item.component"></component>
            </el-collapse-item>
          </el-collapse>
        </el-col>
      </el-row>
    </section>
  </div>
</template>

<script>
import CardCarousel from './CardCarousel'
import CardActions from './CardActions'
import CardDetails from './CardDetails'
import CardTransactions from './CardTransactions'
import { shallowRef } from '@vue/reactivity'

const CardDetailsComponent = shallowRef(CardDetails)
const CardTransactionsComponent = shallowRef(CardTransactions)
export default {
  name: 'MyDebitCard',
  components: {
    CardCarousel,
    CardActions,
    CardDetailsComponent,
    CardTransactionsComponent
  },
  data () {
    return {
      activeAccordion: 'card-txn',
      accordions: [
        { name: 'card-details', label: 'Card details', logo: '/img/Card details.svg', component: CardDetailsComponent },
        { name: 'card-txn', label: 'Recent transactions', logo: '/img/Card Txn.svg', component: CardTransactionsComponent }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.my-debit-cards {
  width: 100%;
  height: 100%;
  .card-section {
    height: 100%;
    padding: 0 40px 40px;
    margin-bottom: 40px;
    .right-col {
      padding-left: 46px;
      padding-top: 60px;
    }
  }
}

</style>
<style lang="scss">
.my-debit-cards {
  .card-section {
    .right-col {
      .el-collapse {
        border: none;
        &-item {
          padding-bottom: 5px;
          border-radius: calc(var(--el-border-radius-base) * 2);
          margin-bottom: 1.5rem;
          &:last-of-type {
            margin-bottom: -5px;
          }
          &.is-active {
            &.outer-collapse-item {
              border: 1px solid #F0F0F0;
              position: relative;
              background: #fff;
            }
          }
          &__header {
            padding: 1.5rem; 
            margin: -5px -2px -5px -2px; 
            background: #F5F9FF; 
            border-radius: calc(var(--el-border-radius-base) * 2); 
            border: 1px solid #F5F5F5; 
            box-shadow: 0 0 8px #0000000a; 
            height: 22px; 
            line-height: 22px;
            .custom-collapse-header {
              width: 100%;
              display: flex;
              align-items: center;
              .accordion-title {
                color: #0C365A;
                font-size: 0.9rem;
                margin-left: 12px;
              }
              .arrow {
                margin: 0 8px 0 auto;
              }
              + .el-collapse-item__arrow {
                display: none;
              }
            }
          }
          &__wrap {
            border-bottom: none;
            padding: 1.7rem 1.5rem 0;
          }
          &__content {
            padding-bottom: 0;
          }
        }
      }
    }
  }
}
</style>