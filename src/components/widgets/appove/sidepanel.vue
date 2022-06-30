<script>
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import chatbot from "./chatbot"
import labelNote from "./labelNote"

export default {
  components: { ckeditor: CKEditor.component, chatbot, labelNote,},
  data() {
    return {
      showModal: false,
      editor: ClassicEditor,
      editorData: "<p>Content of the editor.</p>"
    };
  }
};
</script>

<template>
  <div class="email-leftbar card">
    <b-button variant="danger" @click="showModal = true">Compose</b-button>
    <div class="mail-list mt-4">
      <router-link to="/email/inbox" class="active">
        <i class="mdi mdi-email-outline me-2"></i> Inbox
        <span class="ms-1 float-end">(18)</span>
      </router-link>
      <router-link to="/email/inbox">
        <i class="mdi mdi-star-outline me-2"></i>Starred
      </router-link>
      <router-link to="/email/inbox">
        <i class="mdi mdi-diamond-stone me-2"></i>Important
      </router-link>
      <router-link to="/email/inbox">
        <i class="mdi mdi-file-outline me-2"></i>Draft
      </router-link>
      <router-link to="/email/inbox">
        <i class="mdi mdi-email-check-outline me-2"></i>Sent Mail
      </router-link>
      <router-link to="/email/inbox">
        <i class="mdi mdi-trash-can-outline me-2"></i>Trash
      </router-link>
    </div>

    <labelNote />
    <chatbot />

    <b-modal v-model="showModal" title="New Message" centered>
      <form>
        <div class="mb-3">
          <input type="email" class="form-control" placeholder="To" />
        </div>

        <div class="mb-3">
          <input type="text" class="form-control" placeholder="Subject" />
        </div>
        <div class="mb-3">
          <ckeditor v-model="editorData" :editor="editor"></ckeditor>
        </div>
      </form>
      <template v-slot:modal-footer>
        <b-button variant="secondary" @click="showModal = false">Close</b-button>
        <b-button variant="primary">
          Send
          <i class="fab fa-telegram-plane ms-1"></i>
        </b-button>
      </template>
    </b-modal>
  </div>
</template>