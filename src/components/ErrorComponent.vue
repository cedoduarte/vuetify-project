<template>
    <VAlert v-if="message" color="error">
        {{ message }}
        <template #close>
            <VBtn @click="errorStore.resetMessage">X</VBtn>
        </template>
    </VAlert>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useErrorStore } from '../store/error';

const errorStore = useErrorStore();
const { message } = storeToRefs(errorStore);
</script>