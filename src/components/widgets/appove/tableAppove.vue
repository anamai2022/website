<template>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="page-title-box d-flex align-items-center justify-content-between">
                <h4 class="mb-0 font-size-18">{{ titles }}</h4>

                <div class="page-title-right">
                <b-breadcrumb :items="items" class="m-0"></b-breadcrumb>
                </div>
            </div>
        <el-table
    :data="HospitalData"
    :default-sort = "{prop: 'f_hospitalname', order: 'descending'}"
    style="width: 100%" 
    stripe
    :row-class-name="tableRowClassName">
    <el-table-column
      fixed
      prop="f_hospitalname"
      label="โรงพยาบาล"
      width="150">
    </el-table-column>
    <el-table-column
      prop="f_province"
      label="จังหวัด"
      width="120">
    </el-table-column>

    <el-table-column
      fixed="right"
      label="Operations"
      width="120">
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="Type to search"/>
      </template>      
      <template slot-scope="scope">
        <el-button type="warning" icon="el-icon-share"
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button 
          size="mini"
          type="danger"
          icon="el-icon-delete"
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage2"
      :page-sizes="[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]"
      :page-size="pageSize"
      layout="sizes, prev, pager, next"
      :total="this.HospitalData.length">
    </el-pagination>
          </div>
        </div>
      </div>
    </div>   
</template>
<script>
import  {  HospitalService } from "@/api/index.js";
import appConfig from "@/app.config";
import { tableData } from "./dataAdvancedtable";
import BEditableTable from 'bootstrap-vue-editable-table';
export default {
  name: "TableAppoveComponnets",
  page: {
    title: appConfig.shortname,
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  props: {
    titles: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      default: () => {
        return []
      },
    },
  },  
components: {
    BEditableTable
  },  
  data() {
    return {    
      informationHeader: appConfig.informationHeader,
      informationDetail: appConfig.informationDetail,
      linkeHome: appConfig.linkeHome,
      search: '',
      total:11,
      pageSize: 4,
      page: 1,
      HospitalData:null,
    };
  },
   created() {
    this.getProfile()
  },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
        console.log('click: ',row.state)
        const id = row.state;
        this.$router.push({ name: 'appove', query: { id: row.state } });
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      currentPage2(){
        console.log(currentPage2)
      },
      handleSizeChange(val) {
      Console. Log (` ${Val} per page `);
     },
     handleCurrentChange(val) {
      Console.log (` current page: ${Val} `);
     },      
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        }
        return '';
      },   
    async getProfile(){
      let f_code = 1
      const results = await HospitalService.getHospitalZoneAreaAll(f_code);
      this.HospitalData = results.result      
      return results
    },         
    },
};
</script>
<style scoped>
  .el-table .warning-row {
    background: oldlace;
  }
</style>