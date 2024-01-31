<template>
  <h2>Home</h2>
  <LayoutComponent>
    <template #navbar>
      <nav>
        <ul>
          <li>Hola</li>
          <li>Adios</li>
        </ul>
      </nav>
    </template>
    <template #default>
      <p>Hola mundo</p>
      <AFormComponent @process="processForm">
        <VTextField v-model="data.email" type="text" placeholder="Enter email" />
        <VBtn type="submit">Send</VBtn>
      </AFormComponent>
    </template>
    <template #footer>
      Copyright 2024
    </template>
  </LayoutComponent>
</template>

<script setup lang="ts">
import LayoutComponent from "./LayoutComponent.vue";
import AFormComponent from "./AFormComponent.vue";
import { reactive } from "vue";

const data = {
  email: ""
};

const processForm = () => {
  console.log(data.email);
}
</script>