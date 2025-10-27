<script lang="ts" setup>
const { data: page } = await useAsyncData(() =>
  queryCollection("content").path("/tech").first(),
);
</script>

<template>
  <div class="p-10!">
    <section class="flex flex-col" v-highlight>
      <ContentRenderer v-if="page" :value="page" class="markdown-body" />
    </section>
  </div>
</template>

<style lang="scss" scoped></style>
