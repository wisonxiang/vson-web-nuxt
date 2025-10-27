export default defineNuxtRouteMiddleware((to, from) => {
  if (to.params.id === "1") {
    return abortNavigation();
  }
});

// abortNavigation 会阻止导航 /test/1
