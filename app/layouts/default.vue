<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
const isFold = ref(false);
function handleFold() {
  isFold.value = !isFold.value;
}

const open = ref(false);
function handleOpen(val: boolean) {
  open.value = val;
}

const menus = ref<NavigationMenuItem[]>([
  { label: "个人简历", icon: "i-lucide-user", to: "/" },
  { label: "技术分享", icon: "i-lucide-ampersand", to: "/tech" },
  { label: "生活记录", icon: "i-lucide-bike", to: "/life" },
]);
</script>

<template>
  <div class="flex flex-col md:flex-row">
    <header class="header-wrap flex justify-center align-middle md:hidden">
      <UDrawer direction="top" v-model:open="open">
        <i class="icon-fold" label="Open" @click="handleOpen(true)"></i>
        <template #content>
          <div class="h-48 !pt-6" @click="handleOpen(false)">
            <UNavigationMenu
              orientation="vertical"
              :collapsed="isFold"
              :items="menus"
              class="w-full"
              :ui="{
                link: 'w-full h-10 flex justify-center',
                linkLabel: 'w-20',
              }"
            />
            <div class="menus-footer">
              <UIcon name="i-pajamas-github" class="size-6" />
            </div>
          </div>
        </template>
      </UDrawer>
    </header>
    <header
      class="sidebar-wrap hidden md:block transition-[width]"
      :class="{ 'sidebar-hide': isFold }"
    >
      <div class="menu-icon" @click="handleFold">
        <i class="icon-fold" :class="isFold ? 'icon-unfold' : 'icon-fold'"></i>
      </div>
      <UNavigationMenu
        orientation="vertical"
        popover
        :collapsed="isFold"
        :items="menus"
        class="menus w-full"
      />
      <div class="menus-footer">
        <UIcon name="i-pajamas-github" class="size-6" />
      </div>
    </header>
    <div class="flex-1 h-[100vh] overflow-auto">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-wrap {
  width: 100%;
  height: 40px;
  background-color: var(--vs-color-bg-light);
}
.sidebar-wrap {
  width: 20vw;
  max-width: 240px;
  height: 100vh;
  background-color: var(--vs-color-bg-light);
  position: relative;
  padding-top: 60px;
  .menu-icon {
    width: 18px;
    position: absolute;
    right: 12px;
    top: 8px;
    cursor: pointer;
  }
  :deep(.menus) {
    li {
      a {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        height: 40px;
        font-size: 16px !important;
        .truncate {
          width: 80px;
        }
      }
    }
  }
}
.menus-footer {
  width: 100%;
  position: absolute;
  bottom: 12px;
  left: 0;
  display: flex;
  justify-content: center;
  cursor: pointer;
}
.sidebar-hide {
  width: 30px;
  position: relative;
  background-color: #fff;
  .menu-icon {
    animation: identifier 300ms ease-out forwards 200ms;
    @at-root {
      @keyframes identifier {
        0% {
          right: 12px;
        }
        50% {
          right: -12px;
        }
        100% {
          right: 6px;
        }
      }
    }
  }
}
</style>
