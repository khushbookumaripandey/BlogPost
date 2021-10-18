import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '../views/Homepage.vue'
import Navbar from '../components/Navbar.vue'
import CreatePost from '../views/CreatePost.vue'
import Post from '../views/Post.vue'
import EditPost from '../views/EditPost'
import MobileCreatePost from '../mobileview/MobileCreatePost.vue'
import MobileEditPost from '../mobileview/MobileEditPost.vue'
import MobilePost from '../mobileview/MobilePost.vue'
import MobileHomepage from '../mobileview/MobileHomepage.vue'
import AllUser from '../views/AllUser.vue'
import MobileAllUser from '../mobileview/MobileAllUser.vue'
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
  },
  {
    path: '/allUser',
    name: 'AllUser',
    component: AllUser
  },
  {
    path: '/mobileHome',
    name: 'MobileHomepage',
    component: MobileHomepage
  },
  {
    path: '/mobileCreatePost',
    name: 'MobileCreatePost',
    component: MobileCreatePost
  },
  {
    path: '/mobilePost',
    name: 'MobilePost',
    component: MobilePost
  },
  {
    path: '/mobileEditPost',
    name: 'MobileEditPost',
    component: MobileEditPost
  },
  {
    path: '/mobileAllUser',
    name: 'MobileAllUser',
    component: MobileAllUser
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
