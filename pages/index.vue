<template>
  <v-row justify="center" align="center">
       <Snackbar
          class="bar"
          v-model="snackbar"
          :text="message"
        />
      <v-card  class="mycard mx-lg-auto mx-auto" max-width="344">
          <v-img
            height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png">
          </v-img>
        <v-card-title  class="d-flex justify-center align-center">
            <h2>聊聊星球</h2>
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
      photo:"",
      room:"ROOM",
      typingStatus: false,
    },
    nameRules:[
      v => !!v||"此欄位必填",
      v =>(v&&v.length<=10)|| "名字必須小於10位元",
    ],
    snackbar: false,
    UserPhotoList:[
            'https://cdn.vuetifyjs.com/images/john.jpg',
            '/catEgineer.jpg',
            '/kitty.jpg'],
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
        this.user.photo=this.userPhoto();
        console.log(this.user.photo);
        this.createUser(this.user);
        this.$router.push('ChatRoom');
      }
    },
    userPhoto(){
       return  this.UserPhotoList[Math.floor(Math.random() * this.UserPhotoList.length)];
    },
  },
   head: {
    title: "聊聊星球",
  },
};
</script>
<style scoped>
.mycard{
  border-radius:5%;
  background-color:#f7eddc;
  box-shadow: 30px 0px 10px rgba(0,0,0,.5);
  z-index:10000;
  animation: blinking 2s linear infinite;
}
@keyframes blinking{
    0%,50%{
       transform: translate(0px,10px);
    }
    50%,100%{
         transform: translate(0px,-10px);
    }
}
.mycard:hover{
  opacity: 0.8;
animation-play-state: paused;
}

h2{
  color:#424242
}
.field .v-input{
  color:#686363!important;
}
.bar{
  opacity: 0.6;
}
</style>
