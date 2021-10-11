import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '../views/Homepage.vue'
import Navbar from '../components/Navbar.vue'
import CreatePost from '../views/CreatePost.vue'
import Post from '../views/Post.vue'
import EditPost from '../views/EditPost'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage
  },
  {
    path: '/navbar',
    name: 'Navbar',
    component: Navbar
  },
  {
    path: '/createpost',
    name: 'Createpost',
    component: CreatePost
  },
  {
    path: '/post',
    name: 'Post',
    component: Post
  },
  {
    path: '/editpost',
    name: 'EditPost',
    component: EditPost
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
