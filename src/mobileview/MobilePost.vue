<template>
<div class="outermost">
    <div class="card">
    <div class="column1">
        <img :src="getData.imgUrl" alt="img" class="Image">
    </div>
    <div class="column2">
        <div>
        <div class="title">{{getData.title}}</div>
        </div>
        <div>
        <div name="desc" class="descprition" v-html="getData.description.replace(/\n/gm,'<br>')"></div>
    </div>
    <div class="btn">
       <button class="publish" @click="callEdit()">Edit</button>
    <button class="cancel" @click="callDelete()">Delete</button>
    <button class="cancel" @click="callCanceled()">Cancel</button>
    </div>
    </div>
    </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
    }
  },

  computed: {
    ...mapGetters(['getData'])
  },
  methods: {
    ...mapActions(['getBlogData']),
    ...mapActions(['deleteBlogData']),
    callDelete () {
      this.deleteBlogData()
      this.$alert('Blog success to delete')
      this.$router.push('/mobileCreatePost')
    },
    callCanceled () {
      this.$router.push('/mobileHome')
    },
    callEdit () {
      this.$router.push('/mobileEditPost')
    }
  },
  beforeMount () {
    this.getBlogData()
  }
}
</script>
<style scoped>
@media screen and (max-width: 400px){
.outermost{
  position: fixed;
  height: 850px;
  width: 100%;
  background-color: rgb(230, 250, 255);
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  height: 83%;
  width:82%;
  margin-top: 7vh;
  margin-left: 9vw;
  margin-right: 9vw;
  margin-bottom: 5vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* justify-content: space-around; */
  background-color: white;
  overflow: auto;
}
.card:after{
    content: "";
  display: table;
  clear: both;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
.column1{
background-color: white;
width: 50%;
min-width: 275px;
/* border:1px solid black; */
}
.column2{
background-color: white;
width: 50%;
min-width: 275px;
/* border: 1px solid black; */
/* padding-left: 1vw; */
}
.Image{
margin-top: 3em;
height: 100%;
width: 100%
}
.title{
  width:100%;
  height: 3em;
  /* border:1px solid black; */
  outline: none;
  font-size: 1.5em;
  font-weight: bold;
  font-family: serif;
  /* margin-top: 1em; */
  /* margin-bottom: 0em; */
  padding: 1vh;
  text-align: center;
  color:blue;
}
.descprition{
  width:100%;
  height: auto;
  /* border: 1px solid black; */
  outline: none;
  font-size: 1em;
  font-style: initial;
  font-weight: initial;
  font-family:Arial;
  text-align: center;
  /* margin-left: 2em; */
}
.btn{
  display: flex;
  justify-content: space-evenly;
}
.publish{
cursor: pointer;
border: 2px solid #aaa;
background-color: transparent;
height: 3rem;
width: 5rem;
color:#aaa;
font-size: 1em;
box-shadow: 0 6px 6px rgba(0, 0, 0, 0.6);
margin-top: 1em;
}
.cancel{
  cursor: pointer;
border: 2px solid #aaa;
background-color: transparent;
height: 3rem;
width: 5rem;
color:#aaa;
font-size: 1em;
box-shadow: 0 6px 6px rgba(0, 0, 0, 0.6);
margin-top: 1em;
margin-bottom: 1em;
}
}
</style>
