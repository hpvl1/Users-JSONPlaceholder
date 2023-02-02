<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
const state = reactive({
  user: {
    name: null,
    username: null,
    email: null,
    phone: null,
    website: null,
    company: null,
    city: null,
    street: null,
    suite: null,
    zipcode: null,
  },
});

const router = useRouter();

async function createUser() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(state.user),
    });

    if (response.status === 201) {
      window.alert('Пользователь добавлен!');
      router.push({
        name: 'Users',
      });
    }

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
  <div class="add-user">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <p class="add-user__title">Create user</p>
        </v-col>
      </v-row>
      <v-form class="user-form">
        <v-row>
          <v-col cols="12" md="4">
            <label class="user-form__label">Name</label>
            <v-text-field v-model="state.user.name" class="mt-3" outlined required> </v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <label class="user-form__label">Username</label>
            <v-text-field
              v-model="state.user.username"
              class="mt-3"
              outlined
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <label class="user-form__label">Email</label>
            <v-text-field v-model="state.user.email" class="mt-3" outlined required></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <label class="user-form__label">Phone</label>
            <v-text-field v-model="state.user.phone" class="mt-3" outlined required></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <label class="user-form__label">Website</label>
            <v-text-field
              v-model="state.user.website"
              class="mt-3"
              outlined
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <label class="user-form__label">Company</label>
            <v-text-field
              v-model="state.user.company"
              class="mt-3"
              outlined
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <label class="user-form__label">City</label>
            <v-text-field v-model="state.user.city" class="mt-3" outlined required></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <label class="user-form__label">Street</label>
            <v-text-field v-model="state.user.street" class="mt-3" outlined required></v-text-field>
          </v-col>
          <v-col cols="12" md="2">
            <label class="user-form__label">Suite</label>
            <v-text-field v-model="state.user.suite" class="mt-3" outlined required></v-text-field>
          </v-col>
          <v-col cols="12" md="2">
            <label class="user-form__label">Zipcode</label>
            <v-text-field
              v-model="state.user.zipcode"
              class="mt-3"
              outlined
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-btn height="40" class="create-user" @click="createUser" outlined>Create user</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
  </div>
</template>

<style scoped>
.user-form__label {
  font-size: 0.875rem;
  font-weight: 400;
}
.v-btn {
  text-transform: none;
}
.create-user {
  border: 1px solid #000000;
  padding: 8px 16px;
}

.add-user__title {
  font-size: 2.5rem;
  font-weight: 800;
}
</style>
