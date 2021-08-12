<template>
  <el-collapse 
    class="card-transactions">
    <el-collapse-item 
      class="transaction"
      v-for="(txn, index) in topTransactions"
      :key="txn.id">
      <template #title>
        <div class="transaction-overview">
          <img class="vendor-logo" :src="`/img/${txn.vendorLogo}.svg`" />
          <div class="txn-detail">
            <div class="vendor-name font-family-opensans-semibold">{{txn.vendor}}</div>
            <div class="txn-date font-family-opensans-regular">{{txn.txnDate}}</div>
            <div class="txn-about font-family-opensans-semibold">
              <img src="/img/business-and-finance.svg"/>
              <span style="white-space: nowrap;">{{txn.txnAbout}}</span>
            </div>
          </div>
          <div class="txn-amount font-family-opensans-bold">
            <span v-if="txn.amount >= 0" class="positive">+ S$ {{txn.amount}}</span>
            <span v-else-if="txn.amount < 0" class="negative">- S$ {{txn.amount * -1}}</span>
          </div>
        </div>
        <el-divider v-if="index !== topTransactions.length-1"></el-divider>
      </template>
      <div> More details coming soon</div>
    </el-collapse-item>
  </el-collapse>
  <div class="view-more-transaction font-family-opensans-semibold">
    View all card transactions
  </div>
</template>

<script>
export default {
  name: 'CardTransactions',
  data () {
    return {
      topTransactions: [
        { id: 'abc123', vendor: 'Hamleys', txnDate: '2020-05-20', amount: 150, vendorLogo: 'file-storage', txnAbout: 'Refund on debit card'},
        { id: 'abc124', vendor: 'Hamleys', txnDate: '2020-05-20', amount: -150, vendorLogo: 'flights', txnAbout: 'Charged to debit card'},
        { id: 'abc125', vendor: 'Hamleys', txnDate: '2020-05-20', amount: -150, vendorLogo: 'megaphone', txnAbout: 'Charged to debit card'},
        { id: 'abc126', vendor: 'Hamleys', txnDate: '2020-05-20', amount: -150, vendorLogo: 'file-storage', txnAbout: 'Charged to debit card'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.card-transactions {
  .transaction {
    &-overview {
      display: flex;
      width: 100%;
      margin-bottom: 18px;
      margin-top: -5px;
      .vendor-logo {
        width: 48px;
        height: 48px;
        object-fit: none;
        background: #009DFF1A;
        border-radius: 50%;
        margin-right: 12px;
      }
      .txn-detail {
        line-height: 24px;
        width: 100%; 
        .vendor-name {
          font-weight: 600;
        }
        .txn-date {
          color: #AAAAAA;
          font-size: 0.75rem;
        }
        .txn-about {
          color: #325BAF;
          font-weight: 600;
          display: flex;
          align-items: center;
          img {
            width: 24px;
            height: 20px;
            background: #325BAF;
            border-radius: 50%;
            object-fit: none;
            margin-right: 8px;
          }
        }
      }
      .txn-amount {
        margin-top: 5px;
        margin-right: 5px;
        font-weight: 600;
        font-size: 0.9rem;
        align-self: flex-start;
        white-space: nowrap;
        font-weight: 600;
        .positive {
          color: #01D167;
        }
      }
    }
  }
}
.view-more-transaction {
  width: 100%;
  background: #EDFFF5;
  text-align: center;
  padding: 1rem 0;
  margin: 0px -3px -5px -25px;
  border: 1px solid #DDFFEC;
  position: absolute;
  bottom: -48px;
  z-index: -1;
  border-radius: 0 0 calc(var(--el-border-radius-base) * 2) calc(var(--el-border-radius-base) * 2);
  color: #01D167;
  font-weight: 500;
}
</style>
<style lang="scss">
.card-transactions {
  &.el-collapse {
    &-item {
      padding-bottom: 5px;
      border-radius: calc(var(--el-border-radius-base) * 2);
      margin-bottom: 1.5rem;
      &__header {
        .el-collapse-item__arrow {
          display: inline-block !important;
        }
      }
    }
  }
  .transaction {
    .el-collapse-item__header {
      padding: 0 !important; 
      margin: 0 !important; 
      background: transparent !important; 
      border-radius: 0 !important; 
      border: none !important; 
      box-shadow: none !important; 
      height: auto !important; 
      line-height: 1 !important;
      align-items: flex-start !important;
      position: relative;
      .el-divider--horizontal {
        display: block;
        height: 2px;
        width: 97%;
        margin: 24px 0;
        position: absolute;
        bottom: -20px;
        background: #F5F5F5;
      }
    }
  }
}

</style>