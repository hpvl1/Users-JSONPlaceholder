<script setup>
import { onMounted, reactive } from 'vue';
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const state = reactive({
  user: {},
});

onMounted(async () => {
  getUserData();
});

async function getUserData() {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${props.id}`);
    let user = await response.json();
    state.user = user;

    if (!response.ok) {
      const message = `An error has occured: ${response.status} - ${response.statusText}`;
      throw new Error(message);
    }
  } catch (err) {
    console.error(err);
  }
}
</script>

<template>
  <div class="user">
    <v-container>
      <template v-if="Object.entries(state.user).length != 0">
        <span class="user__username">@{{ state.user.username }}</span>
        <p class="user__name">{{ state.user.name }}</p>
        <v-row>
          <v-col md="3" cols="12">
            <p class="user__tag-title mt-12">Email</p>
            <p class="user__info mt-2">{{ state.user.email }}</p>
          </v-col>
          <v-col md="3" cols="12">
            <p class="user__tag-title mt-12">Phone</p>
            <p class="user__info mt-2">{{ state.user.phone }}</p>
          </v-col>
          <v-col md="3" cols="12">
            <p class="user__tag-title mt-12">Website</p>
            <p class="user__info mt-2">{{ state.user.website }}</p>
          </v-col>
          <v-col md="3" cols="12">
            <p class="user__tag-title mt-12">Company</p>
            <p class="user__info mt-2">{{ state.user.company.name }}</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="3" cols="12">
            <p class="user__tag-title mt-12">Address</p>
            <p class="user__info mt-2">
              {{ state.user.address.suite }} {{ state.user.address.street }},
              {{ state.user.address.city }}, {{ state.user.address.zipcode }}
            </p>
          </v-col>
        </v-row>
      </template>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
p,
span {
  white-space: nowrap;
}
.user {
  &__username {
    font-size: 0.875rem;
    font-weight: 400;
    position: absolute;
    left: 37%;
    margin-top: -0.5rem;
  }

  &__name {
    font-style: normal;
    color: #000000;
    font-size: 2.5rem;
    font-weight: 800;
  }

  &__tag-title {
    font-size: 1rem;
    font-weight: 700;
  }

  &__info {
    font-size: 0.875rem;
    font-weight: 400;
  }
}

@media screen and (max-width: 959px) {
  .user {
    &__username {
      left: 2%;
      margin-top: 50px;
    }
  }
}
</style>
