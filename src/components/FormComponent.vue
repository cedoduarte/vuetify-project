<template>
    <VForm ref="formRef" class="form-component mx-auto my-3" @submit.prevent="processForm">
        <ErrorComponent />
        <VTextField variant="outlined" :rules="rules" required v-model="name" type="text" placeholder="Enter task" />
    </VForm>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useTaskStore } from "../store/tasks";
import ErrorComponent from "./ErrorComponent.vue";
import type { VForm } from "vuetify/components";

const name = ref<string>("");
const { createTask } = useTaskStore();
const rules = [
    (value: string) => !!value || "The field is required",
    (value: string) => !!value && value.length >= 2 || "It needs to have at least 2 characters"
];
const formRef = ref<null | VForm>(null);

const processForm = async () => {
    const { valid } = await formRef.value!.validate();
    if (valid) {
        createTask(name.value);
        name.value = "";
    }
}
</script>

<style scoped>
.form-component {
    width: 350px;
}
</style>