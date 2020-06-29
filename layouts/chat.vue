/* eslint-disable vue/require-default-prop */
<template>
  <v-app style="background: #1c3463;">
    <v-navigation-drawer
      v-model="drawer"
      app
      mobile-break-point="650"
      color="rgba(234, 226, 213, 0.5)"
    >
      <v-list subheader>
        <v-subheader>在星球上的外星人👽️</v-subheader>

        <v-list-item
          v-for="({ name, id,photo }, index) in users"
          :key="`user-${index}`"
          @click.prevent
        >
          <v-list-item-content>
            <v-list-item-title v-text="name" />
          </v-list-item-content>

          <v-list-item-icon>
            <v-avatar>
              <img :src="photo">
            </v-avatar>
            <!-- <v-icon :color="id === user.id ? 'primary' : 'grey'">
              mdi-account-circle-outline
            </v-icon> -->
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="#cec8be">
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title>
        👽️👽️👽️
        <v-chip color="green" text-color="white">
          <v-avatar left class="green darken-4" />
          online
        </v-chip>
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        icon
        class="mx-1"
        @click="exit"
      >
        <v-icon>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container
        fluid
        style="height: 100%;"
      >
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
        import { mapState, mapMutations, mapActions } from "vuex";
        export default {
          name: "ChatLayout",
          data: () => ({
            drawer: true,
          }),
          computed: {
            ...mapState(["user", "users"]),
          },
          middleware: "auth",
          created() {
            this.joinRoom(this.user);
          },
          methods: {
            ...mapActions(["joinRoom", "leftRoom"]),
            exit() {
              this.leftRoom();
              this.$router.push("/?message=leftChat");
            },
          },
        };
</script>
