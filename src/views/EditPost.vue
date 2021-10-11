<template>
<div class="container1">
<div class="inner">
  <div class="column1"></div>
  <div class="column2">
    <div>
    <input type="text" class="title" v-model="dataId.title" placeholder="Give a Title">
    </div>
    <div>
    <textarea name="desc" class="descprition"  v-model="dataId.description" placeholder="Write Description for blog"></textarea>

    </div>
    <input type="text" class="imageUpload" v-model="dataId.imgUrl" placeholder="Put Image Url">
    <div class="btn1">
    <button class="cancel" @click="callSave()">Save</button>
    <button class="cancel" @click="callcancel()">cancel</button>
    </div>
  </div>
  <div class="column3">
  </div>
</div>
  </div>
</template>
<script>
import axios from 'axios'
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      dataId: {
        title: '',
        description: '',
        imgUrl: ''
      }
    }
  },
  computed: {
    ...mapGetters(['getData'])
  },
  methods: {
    ...mapActions(['postblog']),
    callcancel () {
      this.$router.push('/post')
    },
    callSave () {
      axios.put('http://localhost:3000/blogdata/' + localStorage.getItem('Id'), this.dataId)
        .then(res => {
          console.log('put function', res.data)
          this.$router.push('/post')
          this.$alert('Blog success to update')
        })
        .catch(this.$alert('Blog failed to update'))
    }
  },
  mounted () {
    axios.get('http://localhost:3000/blogdata/' + localStorage.getItem('Id'))
      .then(
        res => {
          console.log(res.data)
          this.dataId = res.data
          console.log('this is editdata')
        })
      .catch(e => console.log('error', e))
  }
}
</script>

<style scoped>

.inner{
  display: flex;
  justify-content: space-between;
  height: 100%;
}
.column1{
  float: left;
 width:25%;
background-color: rgb(230, 250, 255);

}
.column2{
float: left;
width:50%;
justify-content: center;
}
.column3{
 float: left;
 width:25%;
 background-color: rgb(230, 250, 255);
}
.title{
  width:45vw;
  height: 5vh;
  border:none;
  outline: none;
  font-size: 3.5vh;
  font-weight: bold;
  font-family: serif;
  margin-top: 5vh;
  margin-bottom: 5vh;
  margin-left: 2vw;
  margin-right: 2vw;
  padding: 1vh;
  text-align: center;
  color: blue;
}
.descprition{
  width:45.80vw;
  height: 50vh;
  border: none;
  outline: none;
  font-size: 2.5vh;
  font-style: initial;
  font-weight: initial;
  margin-left: 2vw;
  margin-right: 2vw;
  font-family:Arial, Helvetica, sans-serif;
}
.imageUpload{
text-align: center;
border: none;
outline: none;
width:45vw;
height: 5vh;
margin-top: 7vh;
padding: 1vh;
font-family: serif;
font-size: 2.5vh;
margin-left: 2vw;
margin-right: 2vw;
font-style: initial;
font-weight: initial;

}
.btn1{
  display: flex;
  justify-content: space-evenly;
}
.container1{
  position: fixed;
  height: 100%;
  width: 100%;
}
.publish{
  cursor: pointer;
border: 2px solid #aaa;
background-color: transparent;
height: 6vh;
width: 10vw;
color:#aaa;
font-size: 1.5vw;
box-shadow: 0 6px 6px rgba(0, 0, 0, 0.6);
margin-top: 8vh;
}
.cancel{
  cursor: pointer;
border: 2px solid #aaa;
background-color: transparent;
height: 6vh;
width: 10vw;
color:#aaa;
font-size: 1.5vw;
box-shadow: 0 6px 6px rgba(0, 0, 0, 0.6);
margin-top: 8vh;
}
</style>
