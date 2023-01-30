<script setup>
import { onMounted, reactive } from 'vue';
import { useRouter } from 'vue-router';

const state = reactive({
  userList: [],
});

const router = useRouter();

onMounted(async () => {
  getUsersData();
});

async function getUsersData() {
  try {
    const users = await fetch('https://jsonplaceholder.typicode.com/users').then((response) =>
      response.json(),
    );
    state.userList = users;
    if (!response.ok) {
      const message = `An error has occured: ${response.status} - ${response.statusText}`;
      throw new Error(message);
    }
  } catch (err) {
    console.error(err);
  }
}

function onClickUser(id) {
  router.push({
    name: 'User',
    params: {
      id,
    },
  });
}

function onClickCreateUser() {
  router.push({
    name: 'CreateUser',
  });
}
</script>

<template>
  <div class="users">
    <v-container>
      <v-row>
        <v-col cols="5" md="9">
          <p class="users__title">Users</p>
        </v-col>
        <v-col cols="7" md="3">
          <v-btn
            elevation="1"
            height="40"
            tile="true"
            top="true"
            outlined
            class="create-user mt-15 mb-15"
            @click="onClickCreateUser"
            >Create user</v-btn
          >
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="4" lg="4" v-for="user in state.userList" :key="user.id">
          <v-card
            class="user-card"
            elevation="1"
            tile
            max-width="380"
            min-width="350"
            height="160"
            @click="onClickUser(user.id)"
          >
            <v-card-title class="title pt-6">{{
              user.name
            }}</v-card-title>
            <v-card-subtitle class="username">@{{ user.username }}</v-card-subtitle>
            <v-card-text class="email mt-4">{{ user.email }}</v-card-text>
            <v-card-text class="phone">{{ user.phone }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.v-card-title {
  line-height: 1.5rem;
}
.v-card-subtitle {
  line-height: 1rem;
}
.v-card-text {
  line-height: 0.0625rem;
}
.v-btn {
  text-transform: none;
}

.users__title {
  margin-top: 56px;
  margin-bottom: 48px;
  font-size: 2.5rem;
  font-weight: 800;
}

.create-user {
  border: 1px solid #000000;
  padding: 8px 16px;
  margin-left: 20%;
}
.title {
  font-size: 1rem;
  font-weight: 700;
  padding-right: 10.5rem;
}

.username {
  font-size: 0.75rem;
  font-weight: 400;
  padding-right: 13rem;
}

.email {
  font-size: 0.875rem;
  font-weight: 400;
  padding-right: 9rem;
}

.phone {
  font-size: 0.875rem;
  font-weight: 400;
  padding-right: 10rem;
}

@media screen and (max-width: 959px) {
  .create-user {
    margin-top: 36px;
    margin-left: 10%;
  }
  .user-card {
    margin: 0 auto;
  }

  .users__title {
    margin-left: 60%;
  }
}

@media screen and (max-width: 599px) {
  .users__title {
    margin-bottom: 32px;
    margin-left: 0;
  }
  .create-user {
    margin-top: 36px;
  }
}
</style>
