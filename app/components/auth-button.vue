<script lang="ts" setup>
import { useAuthStore } from "~/stores/auth";

const authStore = useAuthStore();
const { isLoading, signIn } = authStore;
</script>

<template>
  <button :disabled="isLoading" class="btn btn-accent" @click="signIn">
    Sign In With Github
    <span v-if="isLoading" class="loading loading-spinner loading-md" />
    <Icon v-else name="tabler:brand-github" size="24" />
  </button>
</template>
