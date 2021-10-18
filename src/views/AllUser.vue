<template>
<div class="outermost">
<div class="header">
<div class="text">XYZ Foundation</div>
</div>
<div class="cover" v-for="user in getData" :key="user.id">
    <div class="row">
    <div class="column1">
     <img :src="user.previewImage" alt="img" class="Image" >
     <!-- <img :src="user.imgUrl" alt="img" class="Image" v-else> -->
       </div>
       <div class="column2">
    <div class="title">
        {{user.title}}
    </div>
    <div class="description">
    {{user.description}}
    </div>
    </div>
    </div>
    <div class="btns">
    <button class="cancel" @click="callView(user.id)">View</button>
    <button class="cancel" @click="callCanceled()">Cancel</button>
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
    // ...mapActions(['deleteBlogData'])
    callView (e) {
      localStorage.setItem('Id', e)
      this.$router.push('/post')
    },
    callCanceled () {
      this.$router.push('/createpost')
    }
  },
  beforeMount () {
    this.getBlogData()
  }
}
</script>

<style scoped>
.header{
  position: absolute;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 10vh;
 background-color: rgb(230, 250, 255);
  z-index: 1;
  top: 0;
}
.text{
    position: relative;
    font-size: 2em;
    text-align: center;
}
.card {
    width: 100px;
    display: flex;
    justify-content: center;
    background-color: white;
    height: auto;
}
.cover{
   margin-top: 30px;
   padding: 20px 20px;
   background: white;
   /* display: flex; */
   /* justify-content:left; */
   margin:100px ;
   width:85%;
   height: auto;
}
.cards {
    position: fixed;
   box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
   transition: 0.3s;
   background-color: #3B82F6;
   width: 300px;
   height: 160px;
   text-align: center;
}
.card-single span{
     font-size: medium;
     font-weight: bold;
     color: whitesmoke;
 }
 .title{
     font-weight: bold;
     font-family: serif;
     color:black;
     font-size: 1em;
     margin-left:400px;
     height:auto;
     width:auto;
 }
 .description{
     margin-top: 10px;
     margin-left:10px;
     color:black;
     font-size: 1em;
     height: auto;
     width:auto;
 }
 .column2{
     float: left;
width:70%;
display: flex;
flex-direction: column;
justify-content: center;
/* border:1px solid black; */
height: auto;
 }
 .column1{
     float: left;
     width:30%;
     /* border:1px solid black; */
 }
 .Image{
     height: 100%;
     width: 100%;
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
.btns{
     display: flex;
 justify-content: space-evenly;
}
.row::after{
    content: "";
    display: table;
    clear: both;
    height: auto;
}
</style>
