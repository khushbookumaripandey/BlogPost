<template>
<div class="outermost">
    <div class="card">
    <div class="column1">
        <img :src="getData.imgUrl" alt="img" class="Image">
    </div>
    <div class="column2">
        <div>
        <h4  class="title">{{getData.title}}</h4>
        </div>
        <div>
        <h4 name="desc" class="descprition" v-html="getData.description.replace(/\n/gm,'<br>')"></h4>
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
      this.$router.push('/createpost')
    },
    callCanceled () {
      this.$router.push('/')
    },
    callEdit () {
      this.$router.push('/editpost')
    }
  },
  beforeMount () {
    this.getBlogData()
  }
}
</script>

<style scoped>
.outermost{
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: rgb(230, 250, 255);
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  height: 83%;
  width:82%;
  margin-top: 5%;
  margin-left: 9%;
  margin-right: 9%;
  margin-bottom: 5%;
  display: flex;
  justify-content: space-around;
  background-color: white;
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
float: left;
}
.column2{
background-color: white;
width: 50%;
float: left;
padding-left: 1vw;
}
.Image{
height: 100%;
width: 100%
}
.title{
  width:39.75vw;
  height: 8vh;
  border:none;
  outline: none;
  font-size: 3vh;
  font-weight: bold;
  font-family: serif;
  margin-top: 3vh;
  margin-bottom: 3vh;
  padding: 1vh;
  text-align: center;
  color:blue;
}
.descprition{
    width:39.75vw;
    height: 55vh;
  border: none;
  outline: none;
  font-size: 2vh;
  font-style: initial;
  font-weight: initial;
  font-family:Arial, Helvetica, sans-serif;

}
.btn{
    display: flex;
  justify-content: space-evenly;
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
margin-top: 2vh;
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
margin-top: 2vh;
}

</style>
