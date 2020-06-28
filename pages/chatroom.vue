<template>
  <div class="chat-wrapper">
    <div ref="chat" class="chatList">
      <ChatList
        v-for="(message, index) in messages"
        :key="`message-${index}`"
        :message="message"
        :owner="message.id === user.id"
      />
    </div>
    <div v-if="typingUsers.length" class="chat__typing">
      <p
        v-for="(typingUser, index) in typingUsers"
        :key="`typingUser-${index}`"
        class="chat__typing-user"
      >
        {{ typingUser.name }} is typing...
      </p>
    </div>
    <div class="chat__form">
      <Message />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import ChatList from "@/components/ChatList";
import Message from '@/components/Message';


 export default {
  name: "ChatRoom",
  layout: "chat",
  components: {
    ChatList,
    Message,
  },
  computed: {
    ...mapState(["user", "messages", "users"]),
    ...mapGetters(["typingUsers"]),
  },
  watch: {
    messages() {
      setTimeout(() => {
        if (this.$refs.chat) {
          this.$refs.chat.scrollTop = this.$refs.chat.scrollHeight;
        }
      }, 0);
    },
  },
  head() {
    return {
      title: `${this.user.room}`,
    };
  },
};
</script>

<style scoped>
.chat-wrapper {
  height: 100%;
  overflow: hidden;
}
.chat__form {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  height: 80px;
}
.chatList {
  position: absolute;
  top: 0;
  right: 10%;
  left: 10%;
  bottom: 80px;
  padding: 1rem;
  overflow-y: auto;
  color:white;
  background-color:rgba(200,220,0,0.3);
}
.chat__typing {
  position: absolute;
  display: flex;
  bottom: 50px;
}
.chat__typing-user:not(first-child) {
  margin-left: 15px;
}
</style>

