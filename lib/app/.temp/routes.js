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
    name: "v-991a3c6c9a98",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\README.md").then(comp => {
        Vue.component("v-991a3c6c9a98", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-a4c3aede3473e",
    path: "/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\config\\README.md").then(comp => {
        Vue.component("v-a4c3aede3473e", comp.default)
        next()
      })
    }
  },
  {
    path: "/config/index.html",
    redirect: "/config/"
  },
  {
    name: "v-eb77d2ba86e91",
    path: "/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-eb77d2ba86e91", comp.default)
        next()
      })
    }
  },
  {
    path: "/default-theme-config/index.html",
    redirect: "/default-theme-config/"
  },
  {
    name: "v-c44b6ef1dd031",
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\guide\\README.md").then(comp => {
        Vue.component("v-c44b6ef1dd031", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-106c669c05bdc",
    path: "/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\guide\\assets.md").then(comp => {
        Vue.component("v-106c669c05bdc", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3b566ddd32dee",
    path: "/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\guide\\basic-config.md").then(comp => {
        Vue.component("v-3b566ddd32dee", comp.default)
        next()
      })
    }
  },
  {
    name: "v-07ab004dd5c9e",
    path: "/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-07ab004dd5c9e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-abd1a040d49a2",
    path: "/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\guide\\deploy.md").then(comp => {
        Vue.component("v-abd1a040d49a2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-322a9ed82df28",
    path: "/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\guide\\getting-started.md").then(comp => {
        Vue.component("v-322a9ed82df28", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1c644711baf5",
    path: "/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\guide\\i18n.md").then(comp => {
        Vue.component("v-1c644711baf5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3079a8834e70e",
    path: "/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\guide\\markdown.md").then(comp => {
        Vue.component("v-3079a8834e70e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d0da4d7b32562",
    path: "/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\guide\\using-vue.md").then(comp => {
        Vue.component("v-d0da4d7b32562", comp.default)
        next()
      })
    }
  },
  {
    name: "v-05af0ea8122c7",
    path: "/zh/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\README.md").then(comp => {
        Vue.component("v-05af0ea8122c7", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/index.html",
    redirect: "/zh/"
  },
  {
    name: "v-42bc89d19a03d",
    path: "/zh/algorithm/Charpter4.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\algorithm\\Charpter4.md").then(comp => {
        Vue.component("v-42bc89d19a03d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8780ea63bbc21",
    path: "/zh/algorithm/Charpter5.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\algorithm\\Charpter5.md").then(comp => {
        Vue.component("v-8780ea63bbc21", comp.default)
        next()
      })
    }
  },
  {
    name: "v-89a1019045f6d",
    path: "/zh/algorithm/Charpter6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\algorithm\\Charpter6.md").then(comp => {
        Vue.component("v-89a1019045f6d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-16efcc21ba3a4",
    path: "/zh/algorithm/Charpter7.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\algorithm\\Charpter7.md").then(comp => {
        Vue.component("v-16efcc21ba3a4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a0b92028dcee1",
    path: "/zh/algorithm/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\algorithm\\Index.md").then(comp => {
        Vue.component("v-a0b92028dcee1", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/algorithm/index.html",
    redirect: "/zh/algorithm/"
  },
  {
    name: "v-5137346f6a3e1",
    path: "/zh/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\config\\README.md").then(comp => {
        Vue.component("v-5137346f6a3e1", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/config/index.html",
    redirect: "/zh/config/"
  },
  {
    name: "v-f53e6889b70cc",
    path: "/zh/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-f53e6889b70cc", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/default-theme-config/index.html",
    redirect: "/zh/default-theme-config/"
  },
  {
    name: "v-42069546465e4",
    path: "/zh/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\guide\\README.md").then(comp => {
        Vue.component("v-42069546465e4", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/guide/index.html",
    redirect: "/zh/guide/"
  },
  {
    name: "v-0e18617b0033c",
    path: "/zh/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\guide\\assets.md").then(comp => {
        Vue.component("v-0e18617b0033c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d8fdde315fbcd",
    path: "/zh/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\guide\\basic-config.md").then(comp => {
        Vue.component("v-d8fdde315fbcd", comp.default)
        next()
      })
    }
  },
  {
    name: "v-79452facd682f",
    path: "/zh/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-79452facd682f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9c56020565001",
    path: "/zh/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\guide\\deploy.md").then(comp => {
        Vue.component("v-9c56020565001", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3a5efe5776458",
    path: "/zh/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\guide\\getting-started.md").then(comp => {
        Vue.component("v-3a5efe5776458", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c40286b05e649",
    path: "/zh/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\guide\\i18n.md").then(comp => {
        Vue.component("v-c40286b05e649", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e51a04b65aa3a",
    path: "/zh/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\guide\\markdown.md").then(comp => {
        Vue.component("v-e51a04b65aa3a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0f3833d6fe436",
    path: "/zh/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\guide\\using-vue.md").then(comp => {
        Vue.component("v-0f3833d6fe436", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4906723b0cf1c",
    path: "/zh/interface/BlackMarket.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\interface\\BlackMarket.md").then(comp => {
        Vue.component("v-4906723b0cf1c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-49e6e8e48cf87",
    path: "/zh/interface/Mind.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\interface\\Mind.md").then(comp => {
        Vue.component("v-49e6e8e48cf87", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4c407299266f7",
    path: "/zh/interface/TouTiao.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\interface\\TouTiao.md").then(comp => {
        Vue.component("v-4c407299266f7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-11b3efe5981d1",
    path: "/zh/interface/Yuedu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\interface\\Yuedu.md").then(comp => {
        Vue.component("v-11b3efe5981d1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4715fd040328",
    path: "/zh/interview/ali.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\interview\\ali.md").then(comp => {
        Vue.component("v-4715fd040328", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6f3203f1c51b1",
    path: "/zh/interview/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\interview\\index.md").then(comp => {
        Vue.component("v-6f3203f1c51b1", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/interview/index.html",
    redirect: "/zh/interview/"
  },
  {
    name: "v-6ecd00a6c2028",
    path: "/zh/interview/longhu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\interview\\longhu.md").then(comp => {
        Vue.component("v-6ecd00a6c2028", comp.default)
        next()
      })
    }
  },
  {
    name: "v-592086c43aa39",
    path: "/zh/miniapp/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\miniapp\\README.md").then(comp => {
        Vue.component("v-592086c43aa39", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/index.html",
    redirect: "/zh/miniapp/"
  },
  {
    name: "v-95d86744f392",
    path: "/zh/miniapp/WXS.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\miniapp\\WXS.md").then(comp => {
        Vue.component("v-95d86744f392", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3a2497fa9000b",
    path: "/zh/miniapp/mpvue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\miniapp\\mpvue.md").then(comp => {
        Vue.component("v-3a2497fa9000b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f4f88c20ddc42",
    path: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\miniapp\\wepy组件通信.md").then(comp => {
        Vue.component("v-f4f88c20ddc42", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/wepy组件通信.html",
    redirect: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-59283aa8cb748",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\miniapp\\小程序事件.md").then(comp => {
        Vue.component("v-59283aa8cb748", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序事件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html"
  },
  {
    name: "v-bdb624a448cc5",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\miniapp\\小程序组件.md").then(comp => {
        Vue.component("v-bdb624a448cc5", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-174d3566f75a7",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\miniapp\\小程序组件化.md").then(comp => {
        Vue.component("v-174d3566f75a7", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件化.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html"
  },
  {
    name: "v-560303eaa50a9",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\miniapp\\小程序路由.md").then(comp => {
        Vue.component("v-560303eaa50a9", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序路由.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-c847bf0b97d17",
    path: "/zh/note/Bootstrap.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\note\\Bootstrap.md").then(comp => {
        Vue.component("v-c847bf0b97d17", comp.default)
        next()
      })
    }
  },
  {
    name: "v-797278078531a",
    path: "/zh/note/es6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\note\\es6.md").then(comp => {
        Vue.component("v-797278078531a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c596421d22e9a",
    path: "/zh/note/flex.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\note\\flex.md").then(comp => {
        Vue.component("v-c596421d22e9a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1c4cd168bcc51",
    path: "/zh/note/knowledge.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\note\\knowledge.md").then(comp => {
        Vue.component("v-1c4cd168bcc51", comp.default)
        next()
      })
    }
  },
  {
    name: "v-28a52b6cd7bf8",
    path: "/zh/note/web-flow.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\note\\web-flow.md").then(comp => {
        Vue.component("v-28a52b6cd7bf8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-dfe525a4a7e0a",
    path: "/zh/note/web_summarize.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\note\\web_summarize.md").then(comp => {
        Vue.component("v-dfe525a4a7e0a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-234544ad41525",
    path: "/zh/react/JSX.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\react\\JSX.md").then(comp => {
        Vue.component("v-234544ad41525", comp.default)
        next()
      })
    }
  },
  {
    name: "v-06e6857270da",
    path: "/zh/react/MVVM.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\react\\MVVM.md").then(comp => {
        Vue.component("v-06e6857270da", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6e89f30e9f456",
    path: "/zh/react/Props.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\react\\Props.md").then(comp => {
        Vue.component("v-6e89f30e9f456", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b1f416aff584e",
    path: "/zh/react/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\react\\README.md").then(comp => {
        Vue.component("v-b1f416aff584e", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/index.html",
    redirect: "/zh/react/"
  },
  {
    name: "v-f6b77699bfbe",
    path: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\react\\React生命周期.md").then(comp => {
        Vue.component("v-f6b77699bfbe", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React生命周期.html",
    redirect: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html"
  },
  {
    name: "v-d3b432e94e9aa",
    path: "/zh/react/React%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\react\\React组件.md").then(comp => {
        Vue.component("v-d3b432e94e9aa", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React组件.html",
    redirect: "/zh/react/React%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-5114fa0e6c5cb",
    path: "/zh/react/React%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\react\\React路由.md").then(comp => {
        Vue.component("v-5114fa0e6c5cb", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React路由.html",
    redirect: "/zh/react/React%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-b0b4ebd69ee8a",
    path: "/zh/react/redux.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\react\\redux.md").then(comp => {
        Vue.component("v-b0b4ebd69ee8a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-26554c28e07ee",
    path: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\react\\redux中间件.md").then(comp => {
        Vue.component("v-26554c28e07ee", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/redux中间件.html",
    redirect: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html"
  },
  {
    name: "v-0773339dbf26b",
    path: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\react\\组件通信.md").then(comp => {
        Vue.component("v-0773339dbf26b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/组件通信.html",
    redirect: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-df9084084bdde",
    path: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\react\\高阶组件.md").then(comp => {
        Vue.component("v-df9084084bdde", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/高阶组件.html",
    redirect: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-1bf2f2f2c4aa9",
    path: "/zh/standard/Compatibility.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\standard\\Compatibility.md").then(comp => {
        Vue.component("v-1bf2f2f2c4aa9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6071d03429302",
    path: "/zh/standard/Cooperation.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\standard\\Cooperation.md").then(comp => {
        Vue.component("v-6071d03429302", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c450faf1dd063",
    path: "/zh/standard/Project.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\standard\\Project.md").then(comp => {
        Vue.component("v-c450faf1dd063", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f6f50dd05e77",
    path: "/zh/standard/Standard.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\standard\\Standard.md").then(comp => {
        Vue.component("v-f6f50dd05e77", comp.default)
        next()
      })
    }
  },
  {
    name: "v-80f2d96153e75",
    path: "/zh/standard/Start.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\standard\\Start.md").then(comp => {
        Vue.component("v-80f2d96153e75", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e1f67d23149c",
    path: "/zh/vue/Babel.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\vue\\Babel.md").then(comp => {
        Vue.component("v-e1f67d23149c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4097dfbc21547",
    path: "/zh/vue/Es6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\vue\\Es6.md").then(comp => {
        Vue.component("v-4097dfbc21547", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1033e18f5064a",
    path: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\vue\\Es6方法扩展.md").then(comp => {
        Vue.component("v-1033e18f5064a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Es6方法扩展.html",
    redirect: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html"
  },
  {
    name: "v-be0a8ddc8c91d",
    path: "/zh/vue/Promise.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\vue\\Promise.md").then(comp => {
        Vue.component("v-be0a8ddc8c91d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e7c4208d278a3",
    path: "/zh/vue/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\vue\\README.md").then(comp => {
        Vue.component("v-e7c4208d278a3", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/index.html",
    redirect: "/zh/vue/"
  },
  {
    name: "v-e3447f7920cc9",
    path: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\vue\\Vue 各种方法之间的区别.md").then(comp => {
        Vue.component("v-e3447f7920cc9", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue 各种方法之间的区别.html",
    redirect: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html"
  },
  {
    name: "v-ee0d0797c975e",
    path: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\vue\\Vue动画.md").then(comp => {
        Vue.component("v-ee0d0797c975e", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue动画.html",
    redirect: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html"
  },
  {
    name: "v-38e6ba5f4f1be",
    path: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\vue\\Vue组件.md").then(comp => {
        Vue.component("v-38e6ba5f4f1be", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue组件.html",
    redirect: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-70a639d5fee22",
    path: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\vue\\Vue路由.md").then(comp => {
        Vue.component("v-70a639d5fee22", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue路由.html",
    redirect: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-f7d5448585f1d",
    path: "/zh/vue/Webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\vue\\Webpack.md").then(comp => {
        Vue.component("v-f7d5448585f1d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4f7ed619e7d48",
    path: "/zh/vue/vuex.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\vue\\vuex.md").then(comp => {
        Vue.component("v-4f7ed619e7d48", comp.default)
        next()
      })
    }
  },
  {
    name: "v-06fb0e6a89333",
    path: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\Shinelon\\Desktop\\styles\\style\\src\\zh\\vue\\vue钩子函数.md").then(comp => {
        Vue.component("v-06fb0e6a89333", comp.default)
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