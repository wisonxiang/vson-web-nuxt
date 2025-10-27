<script lang="ts" setup>
defineProps<{ icon: string; name: string }>();
</script>

<template>
  <UCard variant="subtle" class="p-4! mb-6!">
    <div class="flex items-center text-sm text-primary mb-4!">
      <UIcon :name="icon" class="mr-1!" />
      <span>{{ name }}</span>
    </div>
    <slot></slot>
  </UCard>
</template>
