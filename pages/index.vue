<template>
  <v-row justify="center" align="center">
      <v-card  class="mycard mx-lg-auto mx-auto" max-width="344">
        <Snackbar
          v-model="snackbar"
          :text="message"
        />
        <v-img
          height="250"
          src="https://cdn.vuetifyjs.com/images/cards/cooking.png">
        </v-img>

       <v-card-title  class="d-flex justify-center align-center">
          <h2>隨機聊天室</h2>
        </v-card-title >
        <v-card-text class="d-flex justify-center">
          <v-form
            ref="form"
            v-model="isValid"
            lazy-validation
            @submit.prevent="submit"
          >
            <v-text-field
              v-model="user.name"
              :counter="10"
              :rules="nameRules"
              label="請輸入姓名"
              class="field"
              required
            />
            <v-btn
              :disabled="!isValid"
              color="primary"
              class="mt-3 mx-12"
              type="submit"
            >
              開始聊天
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
  </v-row>
</template>

<script>
import { mapActions } from "vuex";
import Snackbar from "@/components/Snackbar";
import messageDict from "@/lib/messageDict";



export default {
  name: "Home",
  layout: "login",
  components: {
    Snackbar,
  },
  data:()=>({
    isValid: true,
    user: {
      name: "",
      room:"ROOM",
      typingStatus: false,
    },
    nameRules:[
      v => !!v||"此欄位必填",
      v =>(v&&v.length<=10)|| "名字必須小於10位元"
    ],
    snackbar: false,
  }),
  computed: {
    message() {
      const { message } = this.$route.query;
      return messageDict[message] || "";
    },
  },
  mounted() {
    this.snackbar = !!this.message;
  },
  methods:{
    ...mapActions(["createUser"]),
    submit(){
      if(this.$refs.form.validate()){
        this.createUser(this.user);
        this.$router.push('ChatRoom');
      }
    }
  },
   head: {
    title: "聊聊星球",
  },


}
</script>
<style scoped>
.mycard{
  border-radius:5%;
  background-color:#f7eddc;
  box-shadow:3px 3px 5px 6px;
}
h2{
  color:#424242
}
.field .v-input{
  color:#686363!important;

}
</style>
