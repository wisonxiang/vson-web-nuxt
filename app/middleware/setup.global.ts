export default defineNuxtRouteMiddleware((to, from) => {
  // 在实际应用中，你可能不会将每个路由重定向到 `/`
  // 但在重定向之前检查 `to.path` 很重要，否则可能导致无限重定向循环
  if (to.path === "/test") {
    return navigateTo("/test/2");
  }
});

// 中间件，就是在进入页面前要要运行的一段程序
