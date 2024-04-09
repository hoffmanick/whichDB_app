import { createRouter, createWebHistory } from 'vue-router'
import Testmap from "@/views/testmap.vue"

const routes = [
    {path: "/testmap/:databaseid",
    name: "Testmap",
    component: Testmap,
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
