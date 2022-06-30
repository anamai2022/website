<script>
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
  components: { ckeditor: CKEditor.component, },
  data() {
    return {
      showModal: false,
      editor: ClassicEditor,
      editorData: "<p>Content of the editor.</p>",
      active:true,
    };
  }
};
</script>

<template>
  <div class="email-leftbar card">
    <b-button variant="danger">กล่องข้อมูล</b-button>
    <div class="mail-list mt-4">
      <router-link to="/appove/inbox" class="active">
        <i class="mdi mdi-email-mark-as-unread me-2"></i> {{waitingAppove}}
        <span class="ms-1 float-end">(18)</span>
      </router-link>
      <router-link to="/appove/nextlevel">
        <i class="mdi mdi-email-open me-2"></i>{{appoveStatusComplate}}
      </router-link>
      <router-link to="/appove/waiting">
        <i class="mdi mdi-email-edit me-2"></i>{{appoveCreateStatus}}
      </router-link>              
      <router-link to="/appove/backlog">
        <i class="mdi mdi-email-alert me-2"></i>{{appoveStatus}}
      </router-link>
      <router-link to="/appove/appove">
        <i class="mdi mdi-email-search-outline me-2"></i>{{appoveSumStatus}}
      </router-link>      
    </div>
  </div>
</template>
<script>
import appConfig from "@/app.config";
export default {
  name: "Sidepanel",
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
components: {},  
  data() {
    return {
      waitingAppove: appConfig.waitingAppove,
      appoveStatusComplate: appConfig.appoveStatusComplate,
      appoveStatus: appConfig.appoveStatus,
      appoveSumStatus: appConfig.appoveSumStatus,
      appoveCreateStatus: appConfig.appoveCreateStatus,
    }
  },
}
</script>