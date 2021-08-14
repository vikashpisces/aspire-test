<template>
  <div class="user-home">
    <div class="welcome-text font-family-opensans-regular text-size-large text-center">
      Hello, {{userDisplayName}}
    </div>
    <div class="welcome-text-secondary text-center text-grey">
      {{welcomeSecondaryMessage}}
    </div>
    <el-form
      class="loan-application"
      :model="loanFormData"
      :rules="formRules"
      ref="loanApplication"
      label-width="120px"
      v-loading="isLoading"
    >
      <el-form-item label="Loan Amount" prop="amount">
        <el-input v-model="loanFormData.amount" :disabled="applicationExists"/> 
        <span class="text-muted unit">(S$)</span>
      </el-form-item>
      <el-form-item label="Tenure" prop="duration">
        <el-input v-model="loanFormData.duration" :disabled="applicationExists" /> 
        <span class="text-muted unit">(Years)</span>
      </el-form-item>
      <el-form-item label="Status" prop="status" v-if="loanStatus">
        <el-tag effect="dark" :type="loanStatusTag" size="mini" style="margin-top: 10px;">{{loanStatus}}</el-tag>
      </el-form-item>
      <el-form-item :label="loanFormData.weeklyPayment ? 'Weekly Payment' : ''" prop="weeklyPayment" v-if="applicationExists">
        <span v-if="loanFormData.weeklyPayment" style="margin-right: 10px;">{{loanFormData.weeklyPayment}} S$</span>
        <el-button type="primary" size="mini" @click="setRepayment">{{setRepaymentTitle}}</el-button>
      </el-form-item>
      <el-form-item label="Remarks" prop="remarks" v-if="loanFormData.remarks">
        <span>{{loanFormData.remarks}}</span>
      </el-form-item>
      <el-button type="primary" class="primary-btn apply-btn" @click="handleApply" v-if="enableApplyButton">Apply</el-button>
    </el-form>
  </div>
</template>

<script>
import $http from '@/services/httpClient'
export default {
  name: 'UserHome',
  data () {
    return {
      isLoading: false,
      loanFormData: {
        name: '',
        amount: undefined,
        duration: undefined,
        status: '',
        remarks: '',
        weeklyPayment: ''
      },
      formRules: {
        name: [
          { required: true, message: 'Kindly enter Applicant\'s name', trigger: 'blur'}
        ],
        amount: [
          { required: true, message: 'Kindly enter Loan amount', trigger: 'blur'}
        ],
        duration: [
          { required: true, message: 'Kindly enter loan duration', trigger: 'blur'}
        ]
      },
      currentUserName: '',
      applicationExists: false,
      repayAmountModified: false
    }
  },
  computed: {
    userDisplayName () {
      return this.currentUserName || 'Guest'
    },
    welcomeSecondaryMessage () {
      return this.applicationExists ? 'Please review your loan application': 'Kindly submit your loan application'
    },
    loanStatus () {
      return this.loanFormData?.status || ''
    },
    loanStatusTag () {
      return this.loanStatus.toLowerCase() === 'open'
        ? '' :
          this.loanStatus.toLowerCase() === 'rejected'
          ? 'danger' :
            this.loanStatus.toLowerCase() === 'approved'
            ? 'success' : ''
    },
    setRepaymentTitle () {
      return this.loanFormData?.weeklyPayment ? 'Edit Repay' : 'Set Repay'
    },
    enableApplyButton () {
      return !this.applicationExists || this.repayAmountModified
    }
  },
  created () {
    this.getCurrentUserName()
  },
  mounted () {
    this.fetchCurrentUserApplication()
  },
  methods: {
    getCurrentUserName () {
      this.currentUserName = localStorage.getItem('loggedInUser') || ''
    },
    async handleApply () {
      try {
        await this.$refs.loanApplication.validate()

        this.submitApplication()
      } catch (error) {
        console.log('Error in form validation: ',error)
       }
    },
    async submitApplication () {
      try {
        this.isLoading = true
        const method = this.repayAmountModified ? 'put': 'post'
        let url = '/loan-application'
        url += method === 'put' ? `/${this.loanFormData.id}`: ''
        status = this.loanFormData?.weeklyPaymentstatus || 'open'
        const { data } = await $http[method](url, {...this.loanFormData, status, name: this.currentUserName})
        this.$message({type: 'success', message: 'Your application has been submitted successfully'})
        if(method === 'post') {
          this.$refs.loanApplication.resetFields()
        }
        this.repayAmountModified = false
        this.fetchCurrentUserApplication()
      } catch (error) {
        console.log('Error while submitting the application: ', error)
        this.$message({type: 'error', message: 'Please try after sometime'})
      } finally {
        this.isLoading = false
      }
    },
    async fetchCurrentUserApplication () {
      try {
        const url = `/loan-application?name=${this.currentUserName}`
        const { data } = await $http.get(url)
        if(data.length) {
          this.loanFormData = data[0]
          this.applicationExists = true
        } else {
          this.applicationExists = false
        }
      } catch (error) {
        console.log('Error while fetching current user loan application: ', error)
        this.applicationExists = false
      }
    },
    setRepayment () {
      this.$prompt (
        '',
        'Set Weekly repayment amount',
        {
          inputPattern: /^\d+(\.\d{1,2})?$/,
          inputErrorMessage: 'Kindly enter valid amount'
        })
        .then( ({value}) => {
          this.loanFormData.weeklyPayment = value * 1
          this.repayAmountModified = true
        })
        .catch(() => {
          this.repayAmountModified = false
          this.$message({type: 'info', message: 'Repayment amount not updated'})
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.user-home {
  width: 100%;
  height: 100%;
  .welcome-text{
    line-height: 3rem;
  }
  .loan-application {
    width: 50%;
    margin: 5rem 25%;
    .apply-btn {
      margin: 1rem 55%;
    }
  }
}
</style>
<style lang="scss">
.loan-application {
  &.el-form {
    .el-form-item__content {
      display: flex;
      .unit {
        width: 1px;
        margin-left: 5px;
      }
    }
  }
}
</style>