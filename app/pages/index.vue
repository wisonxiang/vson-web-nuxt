<script lang="ts" setup>
const items = [
  {
    date: "2021年4月 -- 至今",
    icon: "i-hugeicons-ai-innovation-02",
    title: "深圳法大大网络科技有限公司／Web 前端高级工程师",
    description: `<div style="display:flex;flex-direction: column;line-height:28px;margin-bottom:16px ">
      <p>主要项目：智审系统 iTerms（<a href="https://ai.iterms.com/" target="_blank">www.iterms.com</a>）</p>
      <ul>
      主要功能包括：
        <li>1. AI智能合同审查： 深度运用AI大模型能力，精准识别合同中的各类风险，显著提升公司管理者、法务人员、财务人员等在合同审阅环节的效率。</li>
        <li>2. 协作审查： 针对复杂合同需要多部门/职能协同审阅修订的情况，提供清晰的流程管理与合同归档功能。</li>
        <li>3. 合同起草： 支持基于系统提供的丰富模板起草合同，并内置海量法律条款库，助力用户快速生成合规的合同条款。</li>
        <li>4. 文本比对： 可对合同修改前后的版本进行比对，精准定位并标识具体的内容变更。</li>
        <li>5. AI助手： 将核心系统功能整合至问答式AI助手中，用户能够通过自然对话方式便捷地进行合同审查等操作。</li>
      </ul>
      <p>前端主要基于vue3框架开发，业务深度涉及onlyoffice、web-wps、pdfjs、sse等技术；移动端主要针对微信小程序开发；同时支持SaaS平台和本地化部署。</p>
      </div>`,
  },
  {
    date: "2019/5 -- 2021/4",
    icon: "i-iconoir-atom",
    title: "深圳市传音科技有限公司／Web 前端开发",
    description:
      '<div style="display:flex;flex-direction: column;line-height:28px;margin-bottom:16px"><span>主要项目：<br /> 1. 开发者平台官网开发（https://dev.transsion.com），开发者用户可以通过平台将 APP 或游戏投放到传音系手机上的应用商店或游戏平台，为用户打开非洲互联网市场提供有效途径；</span><span>2. H5游戏平台，承载用户投放的H5游戏，并提供SDK为用户提供完善的管理服务；</span><span>3. 生活充值服务，是一款提供给移动端用户话费、流量、电视费等生活缴费的 H5 应用，目前支持了尼日利亚、加纳、肯尼亚三个国家服务，通过 ga 上统计到日活在 5000 以上，日订单量在 100 以上。</span></div>',
  },
  {
    date: "2015/9 -- 2019/4",
    icon: "i-hugeicons-ai-phone-01",
    title: "深圳市理奥网络技术有限公司／Web 前端开发",
    description:
      '<div style="display:flex;flex-direction: column;line-height:28px;margin-bottom:16px"><span>主要项目：<br />1、“千寻万物官网&运营管理平台”，是公司新媒体电商项目的支撑系统，主要提供在不同渠道如抖音、快手、火山等上面的运营各项数据展示和趋势分析，包括实时的 GMV、浏览数、粉丝数、订单数等统计和日表、周表及月表的统计分析。同事也对在销商品的库存不足和推迟发货商品的监控警报</span><span>2、微信小程序“魔性点点点”，是一款健康的益智类游戏程序，主要面向青少年儿童，里面集合了多款有趣且创意的小游戏，可单机玩也可与朋友在线对战，可以充分达到在好玩中又开发了智力；</span><span>该项目前端基于 WEPY 框架，使用 ES6 规范进行开发；运用 socket.io 进行对战功能通讯，在项目中主要负责部分小游戏和功能页面开发。</span></div>',
  },
  {
    date: "2012/8 -- 2015/8",
    icon: "i-hugeicons-alien-02",
    title: "微创软件股份公司 驻腾讯 SNG 项目组 / 软件测试",
    description:
      '<div style="display:flex;flex-direction: column;line-height:28px"><span>主要项目：<br />“兴趣部落”是腾讯手机 QQ 推出的基于兴趣的公开主题社区，并与拥有共同兴趣标签的 QQ 群实现了打通和关联，形成以兴趣聚合的社区生态系统。</span><span>在项目中主要负责 UI 自动化测试，用到 python 脚本和 selenium 框架；接口自动化测试,用到 jmeter 等相关工具和技术；压力测试，用到 loadRunner monkey 等技术和工具。</span></div>',
  },
];
</script>

<template>
  <div class="pt-[24px]! px-[10%]! w-full">
    <section class="flex mb-6!">
      <img
        class="me-img w-40 h-42 rounded-xl overflow-hidden border-[2px] border-slate-200 object-cover hidden sm:block"
        src="/img/me.jpeg"
        alt="me"
      />
      <div class="flex flex-col flex-1 justify-center gap-y-1 pl-0! sm:pl-12!">
        <span class="text-4xl font-bold">向文城</span>
        <span class="text-xl font-medium mt-3!">web前端开发工程师</span>
        <span class="flex items-center"
          >深圳<i class="font-bold mx-1!">·</i
          ><UIcon name="i-hugeicons-mail-01" class="mr-1!" />vson@vson.top<i
            class="font-bold mx-1!"
            >·</i
          ><UIcon name="i-hugeicons-telephone" class="mr-1!" />16620816068</span
        >
      </div>
    </section>
    <IntroCard icon="i-mynaui-academic-hat-solid" name="教育背景">
      <span className="flex  font-medium flex-wrap">
        西南民族大学（2008年9月 - 2012年7月）<i class="font-bold mx-2!">/</i
        >自动化专业<i class="font-bold mx-2!">/</i>全日制统招本科（一本）
      </span>
    </IntroCard>
    <IntroCard icon="i-unjs-destr" name="技能专长">
      <ol class="font-medium list-decimal pl-4! leading-8">
        <li>精通 javascript、html、css ，熟悉 typescript</li>
        <li>熟悉 vue2、vue3、nuxt 框架及生态，了解react.js</li>
        <li>熟悉element-ui、vue-ui、tailwindcss等组件样式库</li>
        <li>熟悉 vite、webpack、rollup、gulp 等前端工程化打包工具</li>
        <li>熟悉node.js使用，了解koa、pm2及linux系统</li>
        <li>了解 webRTC、socket.io、three.js、onlyoffice、sse 等前端技术</li>
      </ol>
    </IntroCard>
    <IntroCard icon="i-grommet-icons-certificate" name="项目经验">
      <UTimeline :items="items" class="w-full">
        <template #description="{ item }">
          <div class="flex items-center gap-1">
            <div v-html="item.description"></div>
          </div>
        </template>
      </UTimeline>
    </IntroCard>
  </div>
</template>

<style lang="scss" scoped></style>
