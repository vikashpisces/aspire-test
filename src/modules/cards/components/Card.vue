<template>
  <div class="bank-card">
    <el-button type="text" class="show-card-num-btn">
      <div class="d-flex items-center">
        <img src="/img/remove_red_eye-24px.svg" /> 
        <span @click="toggleCardNumber" class="font-family-opensans-bold"> Show card number</span>
      </div>
    </el-button>
    <div class="asset-logo"></div>
    <div class="card-holder-name font-medium font-family-opensans-bold">{{detail.cardHolderName}}</div>
    <div class="card-number font-family-opensans-bold">
      <template v-for="(digit, index) in cardNumber" :key="`digit-${index}-${digit}`">
        <span class="digit masked" v-if="digit === '.'"></span>
        <span class="digit font-small" v-else>{{digit}}</span>
      </template>
    </div>
    <div class="validation-data font-smallest font-family-opensans-bold">
      <span class="expiry">{{expiry}}</span>
      <div class="cvv-data">
        <span>CVV:</span>
        <span class="cvv">{{cvv}}</span>
      </div>
    </div>
    <div class="card-type-logo"></div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  name: 'Card',
  props: {
    detail: Object
  },
  data () {
    return {
      showCardNumber: false
    }
  },
  computed: {
    cardNumber () {
      if(this.showCardNumber) {
        return this.detail.cardNumber.toString().split('')
      } else {
        return this.detail.cardNumber.toString().split('')
          .map( (digit, index) => index < 12 ? '.' : digit)
      }
    },
    cvv () {
      return this.detail.cvv.toString().split('').map(digit => '*').join('')
    },
    expiry () {
      const expiry = dayjs(this.detail.expiry)
      const localeData = expiry.localeData()
      
      let expiryDay = expiry.get('d')
      let expiryMonth = expiry.get('M') + 1
      let expiryYear = expiry.get('y').toString().substring(2)

      expiryDay = localeData.weekdaysShort()[expiryDay]
      return `${expiryDay}: ${expiryMonth}/${expiryYear}`
    }
  },
  methods: {
    toggleCardNumber () {
      this.showCardNumber = !this.showCardNumber
    }
  }
}
</script>

<style lang="scss" scoped>
.bank-card {
  height: 248px;
  background: #01d167;
  border-radius: calc(var(--el-border-radius-base) * 3);
  margin-top: 60px;
  position: relative;
  padding: 1.5rem;
  box-sizing: border-box;
  color: #fff;
  .show-card-num-btn {
    position: absolute;
    right: 0px;
    top: -35px;
    color: #01d167;
  }
  .asset-logo {
    background-color: #fff;
    mask: url('/img/logo.svg') no-repeat right/84px 24px;
    width: 100%;
    height: 24px;
    float: right;
    margin-bottom: 1.5rem;
  }
  .card-holder-name {
    letter-spacing: 0.58px;
  }
  .card-number {
    margin-top: 33px;
    .digit {
      &.masked {
        width: 9px;
        height: 9px;
        background: #fff;
        display: inline-block;
        border-radius: 50%;
      }
      + .digit {
        margin-left: 6px;
      }
      &:nth-of-type(4n) {
        margin-right: 27px !important;
      }
      &:nth-of-type(16) {
        margin-right: 0 !important;
      }
    }
  }
  .validation-data {
    margin-top: 10px;
    .cvv-data {
      margin-left: 36px;
      display: inline-flex;
      align-items: center;
      .cvv {
        margin-left: 5px;
        font-size: 1.5rem;
        letter-spacing: 2.88px;
        line-height: 1.5rem;
        padding-top: 10px;
      }
    }
  }
  .card-type-logo {
    background-color: #fff;
    mask: url('/img/Visa Logo.svg') no-repeat right/84px 24px;
    width: 100%;
    height: 24px;
    float: right;
    margin-bottom: 1.5rem;
  }
}

</style>
<style lang="scss">
.bank-card{
  .show-card-num-btn {
    img {
      margin-right: 5px;
    }
  }
}
</style>