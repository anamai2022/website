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
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    :default-sort = "{prop: 'date', order: 'descending'}"
    style="width: 100%" 
    stripe
    :row-class-name="tableRowClassName">
    <el-table-column
      fixed
      prop="date"
      label="โรงพยาบาล"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="จังหวัด"
      width="120">
    </el-table-column>
    <el-table-column
      prop="state"
      label="G1"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="G2"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="G3"
      width="300">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="G4"
      width="120">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="G5"
      width="120">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="Total"
      width="120">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="ระดับ"
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
      :total="this.tableData.length">
    </el-pagination>
          </div>
        </div>
      </div>
    </div>    
</template>
<script>
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
      tableData: tableData,
      informationHeader: appConfig.informationHeader,
      informationDetail: appConfig.informationDetail,
      linkeHome: appConfig.linkeHome,
      tableData:tableData,
      search: '',
      total:11,
      pageSize: 4,
      page: 1,
    };
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
    },
};
</script>
<style scoped>
  .el-table .warning-row {
    background: oldlace;
  }
</style>