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
    name: "v-65c64093abf2f",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\README.md").then(comp => {
        Vue.component("v-65c64093abf2f", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-535369ba733e7",
    path: "/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\config\\README.md").then(comp => {
        Vue.component("v-535369ba733e7", comp.default)
        next()
      })
    }
  },
  {
    path: "/config/index.html",
    redirect: "/config/"
  },
  {
    name: "v-425efb8fe080e",
    path: "/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-425efb8fe080e", comp.default)
        next()
      })
    }
  },
  {
    path: "/default-theme-config/index.html",
    redirect: "/default-theme-config/"
  },
  {
    name: "v-d423fe36cb2ad",
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\guide\\README.md").then(comp => {
        Vue.component("v-d423fe36cb2ad", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-e5ba712c1bff1",
    path: "/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\guide\\assets.md").then(comp => {
        Vue.component("v-e5ba712c1bff1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4b182a3cae937",
    path: "/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\guide\\basic-config.md").then(comp => {
        Vue.component("v-4b182a3cae937", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c908ef58aa5ed",
    path: "/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-c908ef58aa5ed", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0a6dc1dc3f885",
    path: "/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\guide\\deploy.md").then(comp => {
        Vue.component("v-0a6dc1dc3f885", comp.default)
        next()
      })
    }
  },
  {
    name: "v-fc2c194d4eb9d",
    path: "/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\guide\\getting-started.md").then(comp => {
        Vue.component("v-fc2c194d4eb9d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-822794e4e067",
    path: "/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\guide\\i18n.md").then(comp => {
        Vue.component("v-822794e4e067", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8a63e7f73f304",
    path: "/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\guide\\markdown.md").then(comp => {
        Vue.component("v-8a63e7f73f304", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8b103f0d4e559",
    path: "/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\guide\\using-vue.md").then(comp => {
        Vue.component("v-8b103f0d4e559", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a439754de7fa6",
    path: "/zh/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\README.md").then(comp => {
        Vue.component("v-a439754de7fa6", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/index.html",
    redirect: "/zh/"
  },
  {
    name: "v-4059d4aeb7bb6",
    path: "/zh/algorithm/Charpter4.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\algorithm\\Charpter4.md").then(comp => {
        Vue.component("v-4059d4aeb7bb6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7f1e8037edef",
    path: "/zh/algorithm/Charpter5.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\algorithm\\Charpter5.md").then(comp => {
        Vue.component("v-7f1e8037edef", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2b9d383484d66",
    path: "/zh/algorithm/Charpter6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\algorithm\\Charpter6.md").then(comp => {
        Vue.component("v-2b9d383484d66", comp.default)
        next()
      })
    }
  },
  {
    name: "v-bda87c66e1b74",
    path: "/zh/algorithm/Charpter7.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\algorithm\\Charpter7.md").then(comp => {
        Vue.component("v-bda87c66e1b74", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0fa7f70151b91",
    path: "/zh/algorithm/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\algorithm\\Index.md").then(comp => {
        Vue.component("v-0fa7f70151b91", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/algorithm/index.html",
    redirect: "/zh/algorithm/"
  },
  {
    name: "v-f7998a4547065",
    path: "/zh/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\config\\README.md").then(comp => {
        Vue.component("v-f7998a4547065", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/config/index.html",
    redirect: "/zh/config/"
  },
  {
    name: "v-5dadf328ffceb",
    path: "/zh/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-5dadf328ffceb", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/default-theme-config/index.html",
    redirect: "/zh/default-theme-config/"
  },
  {
    name: "v-5b5977f51976f",
    path: "/zh/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\guide\\README.md").then(comp => {
        Vue.component("v-5b5977f51976f", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/guide/index.html",
    redirect: "/zh/guide/"
  },
  {
    name: "v-9856b82ecae7c",
    path: "/zh/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\guide\\assets.md").then(comp => {
        Vue.component("v-9856b82ecae7c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a6f2a10831179",
    path: "/zh/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\guide\\basic-config.md").then(comp => {
        Vue.component("v-a6f2a10831179", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4c52c4782c8cc",
    path: "/zh/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-4c52c4782c8cc", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4432453cbe409",
    path: "/zh/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\guide\\deploy.md").then(comp => {
        Vue.component("v-4432453cbe409", comp.default)
        next()
      })
    }
  },
  {
    name: "v-fff0bdcc763c",
    path: "/zh/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\guide\\getting-started.md").then(comp => {
        Vue.component("v-fff0bdcc763c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0ff7fd44a41e1",
    path: "/zh/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\guide\\i18n.md").then(comp => {
        Vue.component("v-0ff7fd44a41e1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0e1249f9eb175",
    path: "/zh/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\guide\\markdown.md").then(comp => {
        Vue.component("v-0e1249f9eb175", comp.default)
        next()
      })
    }
  },
  {
    name: "v-88430b2e20dcf",
    path: "/zh/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\guide\\using-vue.md").then(comp => {
        Vue.component("v-88430b2e20dcf", comp.default)
        next()
      })
    }
  },
  {
    name: "v-411a808a3b9c1",
    path: "/zh/interface/BlackMarket.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\interface\\BlackMarket.md").then(comp => {
        Vue.component("v-411a808a3b9c1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8d2efb5512ed9",
    path: "/zh/interface/Mind.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\interface\\Mind.md").then(comp => {
        Vue.component("v-8d2efb5512ed9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4e847209f2a1b",
    path: "/zh/interface/TouTiao.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\interface\\TouTiao.md").then(comp => {
        Vue.component("v-4e847209f2a1b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-767ba9d83d6ce",
    path: "/zh/interface/Yuedu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\interface\\Yuedu.md").then(comp => {
        Vue.component("v-767ba9d83d6ce", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f11f80a715cf9",
    path: "/zh/interview/ali.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\interview\\ali.md").then(comp => {
        Vue.component("v-f11f80a715cf9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6d82ffdb60cec",
    path: "/zh/interview/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\interview\\index.md").then(comp => {
        Vue.component("v-6d82ffdb60cec", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/interview/index.html",
    redirect: "/zh/interview/"
  },
  {
    name: "v-65be4fe022449",
    path: "/zh/interview/longhu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\interview\\longhu.md").then(comp => {
        Vue.component("v-65be4fe022449", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2525f361b4484",
    path: "/zh/miniapp/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\miniapp\\README.md").then(comp => {
        Vue.component("v-2525f361b4484", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/index.html",
    redirect: "/zh/miniapp/"
  },
  {
    name: "v-c6f3680e3814c",
    path: "/zh/miniapp/WXS.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\miniapp\\WXS.md").then(comp => {
        Vue.component("v-c6f3680e3814c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-cc3702e843f3c",
    path: "/zh/miniapp/mpvue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\miniapp\\mpvue.md").then(comp => {
        Vue.component("v-cc3702e843f3c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0a826c2e8517b",
    path: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\miniapp\\wepy组件通信.md").then(comp => {
        Vue.component("v-0a826c2e8517b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/wepy组件通信.html",
    redirect: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-3d38dff757d56",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\miniapp\\小程序事件.md").then(comp => {
        Vue.component("v-3d38dff757d56", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序事件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html"
  },
  {
    name: "v-54af96a7dd9ee",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\miniapp\\小程序组件.md").then(comp => {
        Vue.component("v-54af96a7dd9ee", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-444fea54bcc89",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\miniapp\\小程序组件化.md").then(comp => {
        Vue.component("v-444fea54bcc89", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件化.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html"
  },
  {
    name: "v-998b95d1a1b1d",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\miniapp\\小程序路由.md").then(comp => {
        Vue.component("v-998b95d1a1b1d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序路由.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-89688f6f2cbb",
    path: "/zh/note/Bootstrap.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\note\\Bootstrap.md").then(comp => {
        Vue.component("v-89688f6f2cbb", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8454aef033d49",
    path: "/zh/note/es6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\note\\es6.md").then(comp => {
        Vue.component("v-8454aef033d49", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5131717467a6d",
    path: "/zh/note/flex.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\note\\flex.md").then(comp => {
        Vue.component("v-5131717467a6d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9b18511705e39",
    path: "/zh/note/knowledge.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\note\\knowledge.md").then(comp => {
        Vue.component("v-9b18511705e39", comp.default)
        next()
      })
    }
  },
  {
    name: "v-db6c58c348a0c",
    path: "/zh/note/web-flow.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\note\\web-flow.md").then(comp => {
        Vue.component("v-db6c58c348a0c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-53489bcb30d3d",
    path: "/zh/note/web_summarize.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\note\\web_summarize.md").then(comp => {
        Vue.component("v-53489bcb30d3d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6cdf59f10f57e",
    path: "/zh/react/JSX.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\react\\JSX.md").then(comp => {
        Vue.component("v-6cdf59f10f57e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2baace08eb313",
    path: "/zh/react/MVVM.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\react\\MVVM.md").then(comp => {
        Vue.component("v-2baace08eb313", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8bd76199db136",
    path: "/zh/react/Props.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\react\\Props.md").then(comp => {
        Vue.component("v-8bd76199db136", comp.default)
        next()
      })
    }
  },
  {
    name: "v-401e783910385",
    path: "/zh/react/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\react\\README.md").then(comp => {
        Vue.component("v-401e783910385", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/index.html",
    redirect: "/zh/react/"
  },
  {
    name: "v-2a3d39035bda7",
    path: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\react\\React生命周期.md").then(comp => {
        Vue.component("v-2a3d39035bda7", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React生命周期.html",
    redirect: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html"
  },
  {
    name: "v-395c7a532e535",
    path: "/zh/react/React%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\react\\React组件.md").then(comp => {
        Vue.component("v-395c7a532e535", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React组件.html",
    redirect: "/zh/react/React%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-06d07330ba3d3",
    path: "/zh/react/React%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\react\\React路由.md").then(comp => {
        Vue.component("v-06d07330ba3d3", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React路由.html",
    redirect: "/zh/react/React%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-dc20dab685889",
    path: "/zh/react/redux.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\react\\redux.md").then(comp => {
        Vue.component("v-dc20dab685889", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5abef304fd041",
    path: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\react\\redux中间件.md").then(comp => {
        Vue.component("v-5abef304fd041", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/redux中间件.html",
    redirect: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html"
  },
  {
    name: "v-05fa0b143626a",
    path: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\react\\组件通信.md").then(comp => {
        Vue.component("v-05fa0b143626a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/组件通信.html",
    redirect: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-ca751bc8dad5",
    path: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\react\\高阶组件.md").then(comp => {
        Vue.component("v-ca751bc8dad5", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/高阶组件.html",
    redirect: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-8de35252ed88d",
    path: "/zh/standard/Compatibility.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\standard\\Compatibility.md").then(comp => {
        Vue.component("v-8de35252ed88d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a029c187ca7cd",
    path: "/zh/standard/Cooperation.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\standard\\Cooperation.md").then(comp => {
        Vue.component("v-a029c187ca7cd", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c23d1da002212",
    path: "/zh/standard/Project.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\standard\\Project.md").then(comp => {
        Vue.component("v-c23d1da002212", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d5d7458fd6c5b",
    path: "/zh/standard/Standard.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\standard\\Standard.md").then(comp => {
        Vue.component("v-d5d7458fd6c5b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a1b9030f719f",
    path: "/zh/standard/Start.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\standard\\Start.md").then(comp => {
        Vue.component("v-a1b9030f719f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-997200e8beb6b",
    path: "/zh/vue/Babel.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\vue\\Babel.md").then(comp => {
        Vue.component("v-997200e8beb6b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9437574845408",
    path: "/zh/vue/Es6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\vue\\Es6.md").then(comp => {
        Vue.component("v-9437574845408", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d5f546b02d1c9",
    path: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\vue\\Es6方法扩展.md").then(comp => {
        Vue.component("v-d5f546b02d1c9", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Es6方法扩展.html",
    redirect: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html"
  },
  {
    name: "v-4265bbfe33a1a",
    path: "/zh/vue/Promise.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\vue\\Promise.md").then(comp => {
        Vue.component("v-4265bbfe33a1a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-52f0012bf5641",
    path: "/zh/vue/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\vue\\README.md").then(comp => {
        Vue.component("v-52f0012bf5641", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/index.html",
    redirect: "/zh/vue/"
  },
  {
    name: "v-b93eb4af46474",
    path: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\vue\\Vue 各种方法之间的区别.md").then(comp => {
        Vue.component("v-b93eb4af46474", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue 各种方法之间的区别.html",
    redirect: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html"
  },
  {
    name: "v-01a20036e39cf",
    path: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\vue\\Vue动画.md").then(comp => {
        Vue.component("v-01a20036e39cf", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue动画.html",
    redirect: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html"
  },
  {
    name: "v-31a8ac2f9363d",
    path: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\vue\\Vue组件.md").then(comp => {
        Vue.component("v-31a8ac2f9363d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue组件.html",
    redirect: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-f887ab6cf47ed",
    path: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\vue\\Vue路由.md").then(comp => {
        Vue.component("v-f887ab6cf47ed", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue路由.html",
    redirect: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-3970b8e34fd5f",
    path: "/zh/vue/Webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\vue\\Webpack.md").then(comp => {
        Vue.component("v-3970b8e34fd5f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ddc8a8bb900b1",
    path: "/zh/vue/vuex.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\vue\\vuex.md").then(comp => {
        Vue.component("v-ddc8a8bb900b1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f1ab36a905e4b",
    path: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\vue\\vue钩子函数.md").then(comp => {
        Vue.component("v-f1ab36a905e4b", comp.default)
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