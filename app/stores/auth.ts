import { createAuthClient } from "better-auth/client";

const authClient = createAuthClient();

export const useAuthStore = defineStore("useAuthStore", () => {
  const isLoading = ref(false);

  async function signIn() {
    isLoading.value = true;
    try {
      await authClient.signIn.social({
        provider: "github",
        callbackURL: "/dashboard",
        errorCallbackURL: "/error",
      });
    }
    catch (e) {
      console.error("something went wrong", e);
    }
    finally {
      isLoading.value = false;
    }
  }

  return {
    signIn,
    isLoading,
  };
});
