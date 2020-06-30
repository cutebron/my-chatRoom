<template>
  <v-row justify="center" no-gutters>
    <h1 v-if="isSystemMessage" class="text-center  system">
      {{ message.text }}
    </h1>
    <v-col v-else class="msg-wrapper">
      <v-row no-gutters justify="space-between" class="msg" :class="{ owner }">
        <v-col cols="auto">
            <v-avatar>
              <img :src="message.photo">
          </v-avatar>
            <span class="name">{{ message.name }}</span>
        </v-col>
         <v-col cols="8">
           <p class="mb-0  msgtext">{{ message.text }}</p>
         </v-col>
        <v-col cols="2"  class="timecol">
          <span class=" sendtime ">{{ message.time }}</span>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    message: {
      type: Object,
      default: () => {},
    },
    owner: {
      type: Boolean,
    },
  },
  computed: {
    isSystemMessage() {
      return this.message.name === "admin";
    },
  },
};
</script>

<style lang="scss" scoped>

.system {
  margin-bottom: 1rem;
  color: #fff;
  font-family:monospace;
  background-color:rgba(235, 221, 204, 0.151);
  p {
    margin-bottom: 1rem;
    font-size:5rem;
  }
}
.msgmain{
  display:inline-block
}
.name{
  font-size:25px;
  color:rgb(39, 14, 63)
}
.msgtext{
  margin-left:20px;
  font-family:monospace;
}


.sendtime{
  flex:1;
  color:gray;
  font-family:monospace;
  height:20px;
   margin-top:20px;
}
.msg-wrapper {
  display: flex;
  flex-direction: column;
}
.msg {
  padding: 1rem;
  width: 60%;
  margin: 0 1rem;
  box-shadow: 0 1px 0 0 rgba(50, 50, 50, 0.3);
  border-radius: 4px;
  background: #1976d2;
  color: #fff;
  position: relative;
  word-break: break-all;
  margin-bottom: 1rem;
  &__date {
    text-decoration: underline;
  }
}
.owner {
  background: rgba(255, 250, 250, 0.842);
  color: #000000;
  align-self: flex-end;
  font-family:monospace;
}
@media (max-width: 400px) {
  .msg {
    width: 90%;
  }
}
</style>
