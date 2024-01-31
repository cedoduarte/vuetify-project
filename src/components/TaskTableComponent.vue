<template>
    <VCard class="ma-5" elevation="5">
        <VTable class="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Pending</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(taskItem, index) in taskList" :key="index">
                    <td>{{ taskItem.name }}</td>
                    <td>{{ taskItem.finished }}</td>
                    <td>
                        <VBtn @click="deleteTask(index)" variant="text">❌</VBtn>
                    </td>
                </tr>
            </tbody>
        </VTable>
    </VCard>
</template>

<script setup lang="ts">
import { useTaskStore } from "../store/tasks";
import { computed } from "vue";
import { storeToRefs } from "pinia";

const taskStore = useTaskStore();
const { deleteTask } = taskStore;
//const taskList = computed(() => taskStore.taskList);
const { taskList, showForm, currentTask } = storeToRefs(taskStore);

</script>

<style scoped>
.task-table-action {
    cursor: pointer;
}
</style>