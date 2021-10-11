import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const postData = 'http://localhost:3000/blogdata'
const fetchData = 'http://localhost:3000/blogdata/'
const deleteData = 'http://localhost:3000/blogdata/'
const updateData = (pid) => 'http://localhost:3000/blogdata/'
export default new Vuex.Store({
  state: {
    value: []
  },
  getters: {
    getData (state) {
      return state.value
    }
  },
  mutations: {
    setData (state, item) {
      state.value = item
    }
  },
  actions: {
    postblog ({ commit }, { data, success }) {
      const details = {
        title: data.title,
        description: data.description,
        imgUrl: data.imgUrl
      }
      axios.post(postData, details)
        .then(res => {
          console.log(res.data)
          localStorage.setItem('Id', res.data.id)
          success(res.data)
        })
    },
    getBlogData ({ commit }, data) {
      axios.get(fetchData + localStorage.getItem('Id'))
        .then(
          res => {
            console.log(res.data)
            const test = res.data
            console.log('this is getlogData')
            commit('setData', test)
          })
        .catch(e => console.log('error', e))
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
