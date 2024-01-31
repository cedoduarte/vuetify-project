<template>
    <h1 class="text-center text-h3">Tasks</h1>
    <FormComponent />
    <TaskTableComponent />
</template>

<script setup lang="ts">
import FormComponent from './FormComponent.vue';
import TaskTableComponent from './TaskTableComponent.vue';
import { onMounted } from "vue";
import { useTaskStore } from '../store/tasks';

const taskStore = useTaskStore();

/*
onMounted(() => {
    taskStore.getTasks();
});
*/
</script>