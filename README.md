prettier：核心的Prettier 包。﻿
eslint-config-prettier：用于禁用与Prettier 冲突的ESLint 规则。﻿
eslint-plugin-prettier：将Prettier 格式化作为一项ESLint 规则来运行。﻿

服务器上部署服务命令：
pm2 start ecosystem.config.cjs

停止部署
pm2 stop ecosystem.config.cjs

打包命令：
tar -cz -f  ./app.gzip ./.output
-c 建立打包文件
-z 透过gzip 的支持进行压缩或解压缩
-f 指定挡名

解压命令
tar -xz -f app.gzip`