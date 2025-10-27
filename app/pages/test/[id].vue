<script lang="ts" setup>
definePageMeta({
  layout: "custom",
  middleware: ["my-middleware"],
});

const { $hello } = useNuxtApp();
const msg = $hello("wison");
console.log(msg);
</script>

<template>
  <div>test</div>
</template>

<style lang="scss" scoped></style>
