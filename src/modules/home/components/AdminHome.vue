<template>
  <div class="admin-home">
    <div class="welcome-text font-family-opensans-regular text-size-large text-center">
      Hello, Admin
    </div>
    <div class="welcome-text-secondary text-center text-grey">
      Kindly review & approve loan applications below
    </div>
    <el-table
      :data="gridData"
      class="loan-applications-grid"
      empty-text="There are no applications to review currently"
      v-loading="isLoading"
    >
      <template v-for="header in gridHeaders" :key="header.prop">
        <el-table-column 
          v-if="header.label.toLowerCase() !== 'action'"
          :label="header.label"
          :prop="header.prop"
          :sortable="header.sortable"
          :class-name="header.className">
        </el-table-column>
        <el-table-column
          v-else
          :label="header.label">
          <template #default="scope">
            <el-button type="danger" size="mini" @click="handleReject(scope.row)">Reject</el-button>
            <el-button type="primary" size="mini" class="primary-btn" @click="handleApprove(scope.row)">Approve</el-button>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
import $http from '@/services/httpClient'
export default {
  name: 'AdminHome',
  data () {
    return {
      gridHeaders: [
        {
          label: 'Name',
          prop: 'name',
          sortable: true
        },
        {
          label: 'Amount',
          prop: 'amount',
          sortable: true
        },
        {
          label: 'Duration (years)',
          prop: 'duration',
          sortable: true
        },
        {
          label: 'Status',
          prop: 'status',
          sortable: true,
          className: 'status-col'
        },
        {
          label: 'Action'
        }
      ],
      gridData: [],
      isLoading: false
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.fetchLoanApplications()
    },
    async fetchLoanApplications () {
      try {
        this.isLoading = true
        const url = '/loan-application'
        const response = await $http.get(url)
        this.gridData = response?.data || []
      } catch (error) {
        console.log('Error while fetching loan applications: ', error)
      } finally {
        this.isLoading = false
      }
    },
    handleReject (application) {
      this.$prompt('', 'Kindly provide the remark', {
        inputPattern: /^[0-9A-Za-z!@.,;:'"?-]{1,100}/,
        inputErrorMessage: 'Remarks is required'
      })
      .then( ({value}) =>  {
        this.updateApplicationStatus(application,'rejected', value)
      })
      .catch (() => {
        this.$message.closeAll()
        this.$message({
          type: 'info',
          message: 'No actions taken'
        })
      })
    },
    handleApprove (application) {
      this.updateApplicationStatus(application,'Approved')
    },
    async updateApplicationStatus (application, status = '', remarks = '') {
      console.log(application)
      try {
        if(!status) {
          return
        }
        this.isLoading = true
        const url = `/loan-application/${application.id}`
        const payload = { ...application, status, remarks }
        await $http.put(url, payload)
        this.$message.closeAll()
        this.$message({
          type: 'success',
          message: `Loan application ${application.id} has been ${status}`
        })
        this.fetchLoanApplications()
      } catch (error) {
        console.log('Error while approving the loan application: ', error)
        this.$message.closeAll()
        this.$message({
          type: 'error',
          message: `Unable to approve the Loan application ${application.id}`
        })
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.admin-home {
  width: 100%;
  height: 100%;
  .welcome-text{
    line-height: 3rem;
  }
  .loan-applications-grid {
    margin-top: 1.5rem;
  }
}
</style>
<style lang="scss">
.admin-home {
  .loan-applications-grid {
    .status-col {
      text-transform: CAPITALIZE;
    }
  }
}
</style>