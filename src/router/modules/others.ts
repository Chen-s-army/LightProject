import Layout from "@/layouts/index.vue"

export default [
  {
    path: "/user",
    name: "user",
    component: Layout,
    redirect: "/user/index",
    // meta: { title: '个人页', icon: 'user-circle' },
    children: [
      {
        path: "index",
        name: "UserIndex",
        component: () => import("@/pages/user/index.vue"),
        meta: { title: "个人中心" },
      },
    ],
  },
  {
    path: "/loginRedirect",
    name: "loginRedirect",
    // meta: { title: '登录页', icon: 'logout' },
    component: () => import("@/pages/login/index.vue"),
    children: [
      {
        path: "index",
        redirect: "/login",
        component: () => import("@/layouts/blank.vue"),
        meta: { title: "登录中心" },
      },
    ],
  },
]
