import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueSimpleAlert from 'vue-simple-alert'
Vue.use(VueSimpleAlert)
Vue.use(Vuex)
const postData = 'http://localhost:3000/blogdata'
const fetchData = 'http://localhost:3000/blogdata'
const deleteData = 'http://localhost:3000/blogdata/'
const updateData = (pid) => 'http://localhost:3000/blogdata/'
const viewPostData = 'http://localhost:3000/blogdata/'
export default new Vuex.Store({
  state: {
    value: [],
    specificValue: []
  },
  getters: {
    getData (state) {
      return state.value
    },
    getPostData (state) {
      return state.specificValue
    }
  },
  mutations: {
    setData (state, item) {
      state.value = item
    },
    setPostData (state, item) {
      state.specificValue = item
    }
  },
  actions: {
    postblog ({ commit }, { data, success }) {
      const details = {
        title: data.title,
        description: data.description,
        imgUrl: data.imgUrl,
        previewImage: data.previewImage
      }
      axios.post(postData, details)
        .then(res => {
          console.log(res.data)
          localStorage.setItem('Id', res.data.id)
          success(res.data)
        })
    },
    getBlogData ({ commit }, data) {
      axios.get(fetchData)
        .then(
          res => {
            console.log(res.data)
            const test = res.data
            console.log('this is getlogData')
            commit('setData', test)
          })
        .catch(e => console.log('error', e))
    },
    viewPost ({ commit }, data) {
      axios.get(viewPostData + localStorage.getItem('Id'))
        .then(
          res => {
            console.log(res.data)
            const test = res.data
            console.log('this is getPostData')
            commit('setPostData', test)
          })
      console.log('this is deleteData')
      console.log('this is deleteData after then')
    },
    deleteBlogData () {
      axios.delete(deleteData + localStorage.getItem('Id'))
      console.log('this is deleteData')
      console.log('this is deleteData after then')
    },
    editBlogData () {
      axios.put(updateData + localStorage.getItem('Id'))
      console.log('edit method for store is calling')
    }
  },
  modules: {
  }
})
