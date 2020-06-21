<template>
  <v-row justify="center" align="center">
      <v-card  class="mycard mx-lg-auto mx-auto" max-width="344">
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
              label="Name"
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
import LoginWindow from '~/components/LoginWindow.vue'


export default {
  name: "Home",
  layout: "login",
  components: {

  },
  data:()=>({
    isValid: true,
    user: {
      name: "",
      typingStatus: false,
    },
  })


}
</script>
<style scoped>
.mycard{
  border-radius:5%;
  background-color:#f7eddc;
}
h2{
  color:#424242
}
.field .v-input{
  color:#686363!important;

}
</style>
