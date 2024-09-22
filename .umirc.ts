import { defineConfig } from "umi";

export default defineConfig(
  {
    routes: [
      { path: '/login', component: 'login',layout: false  },
      {
        path: '/',
        wrappers: [
          '@/wrappers/auth',
        ],
        // component: '@/layouts/index',
        routes: [
          { path: "/", component: "home" },
          { path: "/contents", component: "contents" },
          { path: "/upvotes", component: "upvotes" },
          { path: "/favorites", component: "favorites" },
          { path: "/docs", component: "docs" },
        ],
      }, 
  
    ]
  }
)

