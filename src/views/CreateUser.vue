<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

import InputForm from '../components/UI/InputForm.vue';
import LabelInputForm from '../components/UI/LabelInputForm.vue';

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
            <LabelInputForm class="user-form__label">Name</LabelInputForm>
            <InputForm type="text" class="mt-3" v-model.trim="state.user.name" />
          </v-col>
          <v-col cols="12" md="4">
            <LabelInputForm class="user-form__label">Username</LabelInputForm>
            <InputForm type="text" class="mt-3" v-model.trim="state.user.username" />
          </v-col>
          <v-col cols="12" md="4">
            <LabelInputForm class="user-form__label">Email</LabelInputForm>
            <InputForm type="email" class="mt-3" v-model.trim="state.user.email" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <LabelInputForm class="user-form__label">Phone</LabelInputForm>
            <InputForm type="tel" class="mt-3" v-model.trim="state.user.phone" />
          </v-col>
          <v-col cols="12" md="4">
            <LabelInputForm class="user-form__label">Website</LabelInputForm>
            <InputForm type="url" class="mt-3" v-model.trim="state.user.website" />
          </v-col>
          <v-col cols="12" md="4">
            <LabelInputForm class="user-form__label">Company</LabelInputForm>
            <InputForm type="text" class="mt-3" v-model.trim="state.user.company" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <LabelInputForm class="user-form__label">City</LabelInputForm>
            <InputForm type="text" class="mt-3" v-model.trim="state.user.city" />
          </v-col>
          <v-col cols="12" md="4">
            <LabelInputForm class="user-form__label">Street</LabelInputForm>
            <InputForm type="text" class="mt-3" v-model.trim="state.user.street" />
          </v-col>
          <v-col cols="12" md="2">
            <LabelInputForm class="user-form__label">Suite</LabelInputForm>
            <InputForm type="text" class="mt-3" v-model.trim="state.user.suite" />
          </v-col>
          <v-col cols="12" md="2">
            <LabelInputForm class="user-form__label">Zipcode</LabelInputForm>
            <InputForm type="text" class="mt-3" v-model.trim="state.user.zipcode" />
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
