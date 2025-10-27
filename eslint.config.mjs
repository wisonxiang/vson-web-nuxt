import { globalIgnores } from "eslint/config";
import {
  defineConfigWithVueTs,
  vueTsConfigs,
} from "@vue/eslint-config-typescript";
import pluginVue from "eslint-plugin-vue";
import skipFormatting from "@vue/eslint-config-prettier/skip-formatting";
import eslintConfigPrettier from "@vue/eslint-config-prettier";

export default defineConfigWithVueTs(
  {
    name: "app/files-to-lint",
    files: ["**/*.{ts,mts,tsx,vue}"],
  },
  globalIgnores(["**/dist/**"]),
  pluginVue.configs["flat/essential"],
  vueTsConfigs.recommended,
  skipFormatting,
  eslintConfigPrettier, //添加这一行代码
  {
    rules: {
      "@typescript-eslint/no-unused-vars": 0, //允许未使用的变量
      "@typescript-eslint/no-explicit-any": 0, //允许使用any类型
      "@typescript-eslint/no-unused-expressions": 0, //允许未使用的表达式
      "vue/block-lang": 0, //允许使用vue/block-lang
      "vue/multi-word-component-names": 0, //允许使用vue/multi-word-component-names
    },
  },
);
