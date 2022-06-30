<template>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="page-title-box d-flex align-items-center justify-content-between">
                <h4 class="mb-0 font-size-18">{{ title }}</h4>

                <div class="page-title-right">
                <b-breadcrumb :items="items" class="m-0"></b-breadcrumb>
                </div>
            </div>
            <div class="row mt-4">
              <div class="col-sm-12 col-md-6">
                <div id="tickets-table_length" class="dataTables_length">
                  <label class="d-inline-flex align-items-center">
                    Show&nbsp;
                    <b-form-select
                      class="form-select form-select-sm"
                      v-model="perPage"
                      size="sm"
                      :options="pageOptions"
                    ></b-form-select
                    >&nbsp;entries
                  </label>
                </div>
              </div>
              <!-- Search -->
              <div class="col-sm-12 col-md-6">
                <div
                  id="tickets-table_filter"
                  class="dataTables_filter text-md-end"
                >
                  <label class="d-inline-flex align-items-center">
                    Search:
                    <b-form-input
                      v-model="filter"
                      type="search"
                      placeholder="Search..."
                      class="form-control form-control-sm ms-2"
                    ></b-form-input>
                  </label>
                </div>
              </div>
              <!-- End search -->
            </div>
            <!-- Table -->
            <div class="table-responsive mb-0">
              <b-table
                class="datatables"
                :items="tableData"
                :fields="fields"
                responsive="sm"
                :per-page="perPage"
                :current-page="currentPage"
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
                :filter="filter"
                :filter-included-fields="filterOn"
                @filtered="onFiltered"
              ></b-table>
            </div>
            <div class="row">
              <div class="col">
                <div
                  class="dataTables_paginate paging_simple_numbers float-end"
                >
                  <ul class="pagination pagination-rounded mb-0">
                    <!-- pagination -->
                    <b-pagination
                      v-model="currentPage"
                      :total-rows="rows"
                      :per-page="perPage"
                    ></b-pagination>
                  </ul>
                </div>
              </div>
            </div>
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
    title: {
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
      totalRows: 1,
      todoTotalRows: 1,
      currentPage: 1,
      todocurrentPage: 1,
      perPage: 10,
      todoperPage: 10,
      pageOptions: [10, 25, 50, 100],
      todoOptions: [10, 50, 100, 150, 200],
      filter: null,
      todoFilter: null,
      filterOn: [],
      todofilterOn: [],
      sortBy: "age",
      sortDesc: false,
      fields: [
        {
          key: "name",
          sortable: true,
        },
        {
          key: "position",
          sortable: true,
        },
        {
          key: "office",
          sortable: true,
        },
        {
          key: "age",
          sortable: true,
        },
        {
          key: "date",
          sortable: true,
        },
        {
          key: "salary",
          sortable: true,
        },
      ],
      editableTablefields: [
        { key: "name", label: "โรงพยาบาล", type: "text", editable: true},
        { key: "department", label: "จังหวัด", type: "select", options: ['Accounting', 'Development', 'HR', 'Marketing'], editable: true },
        { key: "age", label: "G1", type: "number", editable: true },
        { key: "dateOfBirth", label: "G2", type: "date", editable: true },
        { key: "isActive", label: "G3", type: "checkbox", editable: true },
        { key: "isActive", label: "G4", type: "checkbox", editable: true },
        { key: "isActive", label: "G5", type: "checkbox", editable: true },
        { key: "isActive", label: "Total", type: "checkbox", editable: true },
        { key: "isActive", label: "ระดับ", type: "checkbox", editable: true },
      ],
    };
  },
  computed: {
    rows() {
      return this.tableData.length;
    },
    todoList() {
      return this.todos.length;
    },
  },  
mounted() {
    this.totalRows = this.tableData.length;
    this.todoTotalRows = this.todos.length;
},
methods: {
onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },

    todoFiltered(filteredItems) {
      this.todoTotalRows = filteredItems.length;
      this.todocurrentPage = 1;
    },

    handleInput(value, data) {
      this.editableDataItems[data.index][data.field.key] = value;
    }    
},
};
</script>