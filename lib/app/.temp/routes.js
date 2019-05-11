import Vue from 'vue'
Vue.component("Bit", () => import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\.vuepress\\components\\Bit.vue"))
import ThemeLayout from '@themeLayout'
import ThemeNotFound from '@themeNotFound'
import { injectMixins } from '@app/util'
import rootMixins from '@app/root-mixins'

injectMixins(ThemeLayout, rootMixins)
injectMixins(ThemeNotFound, rootMixins)

export const routes = [
  {
    name: "v-df3b430e2ea69",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\README.md").then(comp => {
        Vue.component("v-df3b430e2ea69", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-2fd9bf0f11e24",
    path: "/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\config\\README.md").then(comp => {
        Vue.component("v-2fd9bf0f11e24", comp.default)
        next()
      })
    }
  },
  {
    path: "/config/index.html",
    redirect: "/config/"
  },
  {
    name: "v-8670669dc68fb",
    path: "/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-8670669dc68fb", comp.default)
        next()
      })
    }
  },
  {
    path: "/default-theme-config/index.html",
    redirect: "/default-theme-config/"
  },
  {
    name: "v-caac6968cb51f",
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\guide\\README.md").then(comp => {
        Vue.component("v-caac6968cb51f", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-5669d01f67d78",
    path: "/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\guide\\assets.md").then(comp => {
        Vue.component("v-5669d01f67d78", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1ae74117e62da",
    path: "/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\guide\\basic-config.md").then(comp => {
        Vue.component("v-1ae74117e62da", comp.default)
        next()
      })
    }
  },
  {
    name: "v-96c7aa9d57d7f",
    path: "/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-96c7aa9d57d7f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ba2b7dfa93b36",
    path: "/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\guide\\deploy.md").then(comp => {
        Vue.component("v-ba2b7dfa93b36", comp.default)
        next()
      })
    }
  },
  {
    name: "v-dff0b08d7b69c",
    path: "/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\guide\\getting-started.md").then(comp => {
        Vue.component("v-dff0b08d7b69c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-16698da5a5f11",
    path: "/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\guide\\i18n.md").then(comp => {
        Vue.component("v-16698da5a5f11", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f7b19e818ea1c",
    path: "/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\guide\\markdown.md").then(comp => {
        Vue.component("v-f7b19e818ea1c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a97798566042e",
    path: "/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\guide\\using-vue.md").then(comp => {
        Vue.component("v-a97798566042e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f84c0a9a96a3a",
    path: "/zh/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\README.md").then(comp => {
        Vue.component("v-f84c0a9a96a3a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/index.html",
    redirect: "/zh/"
  },
  {
    name: "v-372bba16892c6",
    path: "/zh/algorithm/Charpter4.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\algorithm\\Charpter4.md").then(comp => {
        Vue.component("v-372bba16892c6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0c270d5601a9",
    path: "/zh/algorithm/Charpter5.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\algorithm\\Charpter5.md").then(comp => {
        Vue.component("v-0c270d5601a9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e92049312ae0f",
    path: "/zh/algorithm/Charpter6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\algorithm\\Charpter6.md").then(comp => {
        Vue.component("v-e92049312ae0f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-134aed589fa69",
    path: "/zh/algorithm/Charpter7.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\algorithm\\Charpter7.md").then(comp => {
        Vue.component("v-134aed589fa69", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0e88d5bf1daf1",
    path: "/zh/algorithm/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\algorithm\\Index.md").then(comp => {
        Vue.component("v-0e88d5bf1daf1", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/algorithm/index.html",
    redirect: "/zh/algorithm/"
  },
  {
    name: "v-b869607cd595a",
    path: "/zh/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\config\\README.md").then(comp => {
        Vue.component("v-b869607cd595a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/config/index.html",
    redirect: "/zh/config/"
  },
  {
    name: "v-1ece3ed3ad3d",
    path: "/zh/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-1ece3ed3ad3d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/default-theme-config/index.html",
    redirect: "/zh/default-theme-config/"
  },
  {
    name: "v-6796a9fe6f0c9",
    path: "/zh/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\guide\\README.md").then(comp => {
        Vue.component("v-6796a9fe6f0c9", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/guide/index.html",
    redirect: "/zh/guide/"
  },
  {
    name: "v-d8b3cf29932e7",
    path: "/zh/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\guide\\assets.md").then(comp => {
        Vue.component("v-d8b3cf29932e7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ae6bbf7eff27",
    path: "/zh/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\guide\\basic-config.md").then(comp => {
        Vue.component("v-ae6bbf7eff27", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8fd18590f2ae3",
    path: "/zh/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-8fd18590f2ae3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-079741fc281c4",
    path: "/zh/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\guide\\deploy.md").then(comp => {
        Vue.component("v-079741fc281c4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-87441223202d7",
    path: "/zh/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\guide\\getting-started.md").then(comp => {
        Vue.component("v-87441223202d7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-bd6bcf6af9423",
    path: "/zh/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\guide\\i18n.md").then(comp => {
        Vue.component("v-bd6bcf6af9423", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a2abc3232400b",
    path: "/zh/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\guide\\markdown.md").then(comp => {
        Vue.component("v-a2abc3232400b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0af4304b018b9",
    path: "/zh/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\guide\\using-vue.md").then(comp => {
        Vue.component("v-0af4304b018b9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ebdfeb02903a8",
    path: "/zh/interface/BlackMarket.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\interface\\BlackMarket.md").then(comp => {
        Vue.component("v-ebdfeb02903a8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-34b61e5daf1af",
    path: "/zh/interface/Mind.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\interface\\Mind.md").then(comp => {
        Vue.component("v-34b61e5daf1af", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d45c50f0284e6",
    path: "/zh/interface/TouTiao.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\interface\\TouTiao.md").then(comp => {
        Vue.component("v-d45c50f0284e6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b10aa62144445",
    path: "/zh/interface/Yuedu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\interface\\Yuedu.md").then(comp => {
        Vue.component("v-b10aa62144445", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d416c6164bc9c",
    path: "/zh/interview/ali.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\interview\\ali.md").then(comp => {
        Vue.component("v-d416c6164bc9c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-57e2512555c9c",
    path: "/zh/interview/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\interview\\index.md").then(comp => {
        Vue.component("v-57e2512555c9c", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/interview/index.html",
    redirect: "/zh/interview/"
  },
  {
    name: "v-5dade5b40f4f7",
    path: "/zh/interview/longhu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\interview\\longhu.md").then(comp => {
        Vue.component("v-5dade5b40f4f7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-99e9ec3412634",
    path: "/zh/miniapp/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\miniapp\\README.md").then(comp => {
        Vue.component("v-99e9ec3412634", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/index.html",
    redirect: "/zh/miniapp/"
  },
  {
    name: "v-cef6f8dfeccdb",
    path: "/zh/miniapp/WXS.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\miniapp\\WXS.md").then(comp => {
        Vue.component("v-cef6f8dfeccdb", comp.default)
        next()
      })
    }
  },
  {
    name: "v-743fe680c4e9f",
    path: "/zh/miniapp/mpvue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\miniapp\\mpvue.md").then(comp => {
        Vue.component("v-743fe680c4e9f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8eb491cf3dcda",
    path: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\miniapp\\wepy组件通信.md").then(comp => {
        Vue.component("v-8eb491cf3dcda", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/wepy组件通信.html",
    redirect: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-feae7e269320d",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\miniapp\\小程序事件.md").then(comp => {
        Vue.component("v-feae7e269320d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序事件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html"
  },
  {
    name: "v-fb64badafd972",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\miniapp\\小程序组件.md").then(comp => {
        Vue.component("v-fb64badafd972", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-e4f216365825d",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\miniapp\\小程序组件化.md").then(comp => {
        Vue.component("v-e4f216365825d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件化.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html"
  },
  {
    name: "v-b84c3ea361327",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\miniapp\\小程序路由.md").then(comp => {
        Vue.component("v-b84c3ea361327", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序路由.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-961ac94b83d6a",
    path: "/zh/note/Bootstrap.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\note\\Bootstrap.md").then(comp => {
        Vue.component("v-961ac94b83d6a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e14f5bd0ebd27",
    path: "/zh/note/es6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\note\\es6.md").then(comp => {
        Vue.component("v-e14f5bd0ebd27", comp.default)
        next()
      })
    }
  },
  {
    name: "v-882f0e710404d",
    path: "/zh/note/flex.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\note\\flex.md").then(comp => {
        Vue.component("v-882f0e710404d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7139f69bebd19",
    path: "/zh/note/knowledge.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\note\\knowledge.md").then(comp => {
        Vue.component("v-7139f69bebd19", comp.default)
        next()
      })
    }
  },
  {
    name: "v-13feba6125c5d",
    path: "/zh/note/web-flow.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\note\\web-flow.md").then(comp => {
        Vue.component("v-13feba6125c5d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2bd6bb0b9fe0a",
    path: "/zh/note/web_summarize.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\note\\web_summarize.md").then(comp => {
        Vue.component("v-2bd6bb0b9fe0a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d774fe73f3fe3",
    path: "/zh/react/JSX.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\react\\JSX.md").then(comp => {
        Vue.component("v-d774fe73f3fe3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-18abfa95e3662",
    path: "/zh/react/MVVM.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\react\\MVVM.md").then(comp => {
        Vue.component("v-18abfa95e3662", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2a2d2e8dadde5",
    path: "/zh/react/Props.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\react\\Props.md").then(comp => {
        Vue.component("v-2a2d2e8dadde5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-286f243540a14",
    path: "/zh/react/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\react\\README.md").then(comp => {
        Vue.component("v-286f243540a14", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/index.html",
    redirect: "/zh/react/"
  },
  {
    name: "v-d7764cb848e42",
    path: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\react\\React生命周期.md").then(comp => {
        Vue.component("v-d7764cb848e42", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React生命周期.html",
    redirect: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html"
  },
  {
    name: "v-2bd78ef7a6118",
    path: "/zh/react/React%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\react\\React组件.md").then(comp => {
        Vue.component("v-2bd78ef7a6118", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React组件.html",
    redirect: "/zh/react/React%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-30a095ae4a5c2",
    path: "/zh/react/React%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\react\\React路由.md").then(comp => {
        Vue.component("v-30a095ae4a5c2", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React路由.html",
    redirect: "/zh/react/React%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-4cf2f569d490b",
    path: "/zh/react/redux.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\react\\redux.md").then(comp => {
        Vue.component("v-4cf2f569d490b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b1db6d2ddf026",
    path: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\react\\redux中间件.md").then(comp => {
        Vue.component("v-b1db6d2ddf026", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/redux中间件.html",
    redirect: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html"
  },
  {
    name: "v-4c1ee3f73dce2",
    path: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\react\\组件通信.md").then(comp => {
        Vue.component("v-4c1ee3f73dce2", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/组件通信.html",
    redirect: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-1c8ee109d38dd",
    path: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\react\\高阶组件.md").then(comp => {
        Vue.component("v-1c8ee109d38dd", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/高阶组件.html",
    redirect: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-cd31a40dedc6e",
    path: "/zh/standard/Compatibility.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\standard\\Compatibility.md").then(comp => {
        Vue.component("v-cd31a40dedc6e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f9d770acb9cf9",
    path: "/zh/standard/Cooperation.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\standard\\Cooperation.md").then(comp => {
        Vue.component("v-f9d770acb9cf9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ea4fbe7db60a7",
    path: "/zh/standard/Project.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\standard\\Project.md").then(comp => {
        Vue.component("v-ea4fbe7db60a7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-765c2b2bf3217",
    path: "/zh/standard/Standard.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\standard\\Standard.md").then(comp => {
        Vue.component("v-765c2b2bf3217", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c186cfba8ab35",
    path: "/zh/standard/Start.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\standard\\Start.md").then(comp => {
        Vue.component("v-c186cfba8ab35", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0fc0e1704ee14",
    path: "/zh/vue/Babel.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\vue\\Babel.md").then(comp => {
        Vue.component("v-0fc0e1704ee14", comp.default)
        next()
      })
    }
  },
  {
    name: "v-35b533ece28da",
    path: "/zh/vue/Es6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\vue\\Es6.md").then(comp => {
        Vue.component("v-35b533ece28da", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4b6bf4d485db6",
    path: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\vue\\Es6方法扩展.md").then(comp => {
        Vue.component("v-4b6bf4d485db6", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Es6方法扩展.html",
    redirect: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html"
  },
  {
    name: "v-b469334334761",
    path: "/zh/vue/Promise.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\vue\\Promise.md").then(comp => {
        Vue.component("v-b469334334761", comp.default)
        next()
      })
    }
  },
  {
    name: "v-17551d62dafaf",
    path: "/zh/vue/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\vue\\README.md").then(comp => {
        Vue.component("v-17551d62dafaf", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/index.html",
    redirect: "/zh/vue/"
  },
  {
    name: "v-6ffa8124442f6",
    path: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\vue\\Vue 各种方法之间的区别.md").then(comp => {
        Vue.component("v-6ffa8124442f6", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue 各种方法之间的区别.html",
    redirect: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html"
  },
  {
    name: "v-f9a004be5c3c1",
    path: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\vue\\Vue动画.md").then(comp => {
        Vue.component("v-f9a004be5c3c1", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue动画.html",
    redirect: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html"
  },
  {
    name: "v-224a10ea0e67f",
    path: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\vue\\Vue组件.md").then(comp => {
        Vue.component("v-224a10ea0e67f", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue组件.html",
    redirect: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-c701903cd90f8",
    path: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\vue\\Vue路由.md").then(comp => {
        Vue.component("v-c701903cd90f8", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue路由.html",
    redirect: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-dfd3ba6be2307",
    path: "/zh/vue/Webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\vue\\Webpack.md").then(comp => {
        Vue.component("v-dfd3ba6be2307", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9668930285051",
    path: "/zh/vue/vuex.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\vue\\vuex.md").then(comp => {
        Vue.component("v-9668930285051", comp.default)
        next()
      })
    }
  },
  {
    name: "v-68fe473010596",
    path: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\vue\\vue钩子函数.md").then(comp => {
        Vue.component("v-68fe473010596", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/vue钩子函数.html",
    redirect: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html"
  },
  {
    path: '*',
    component: ThemeNotFound
  }
]