<template>
    <form @submit.prevent="$emit('process')">
        <slot></slot>
    </form>
</template>

<script setup lang="ts">
import { defineEmits } from "vue";

defineEmits(["process"]);
</script>

<style scoped>
</style>