<template>
  <v-form ref="form" @submit.prevent="send">
    <v-text-field
      v-model="text"
      label="輸入訊息..."
      outlined
      :rules="rules"
      append-icon="fa fa-rocket"
      @input="typing"
      @click:append="send"
      @blur="resetValidation"
    />
  </v-form>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data: () => ({
    text: "",
    rules: [v => !!v || "請輸入一點文字吧!",
               v =>(v&&v.length<=256)|| "字數已經超過囉~",
             ],
  }),
  computed: {
    ...mapGetters(["typingStatus"]),
  },
  methods: {
    ...mapActions(["createMessage", "setTypingStatus"]),

    send() {
      if (this.$refs.form.validate()) {
        this.createMessage(this.text);
        this.text = "";
        this.setTypingStatus(false);
        this.resetValidation();
      }
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    typing() {
      if (!this.typingStatus) {
        this.setTypingStatus(true);
      }
    },
  },
};
</script>
<style scoped>


</style>
