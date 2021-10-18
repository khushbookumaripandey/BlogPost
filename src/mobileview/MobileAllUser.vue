<template>
<div>
<div class="header">
<div class="text">XYZ Foundation</div>
</div>
<div class="cover" v-for="user in getData" :key="user.id">
    <div class="row">
    <div class="column1">
     <img :src="user.imgUrl" alt="img" class="Image">
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
      this.$router.push('/mobilePost')
    },
    callCanceled () {
      this.$router.push(' /mobileCreatePost ')
    }
  },
  beforeMount () {
    this.getBlogData()
  }
}
</script>

<style scoped>
@media screen and (max-width: 400px){
.header{
  position: absolute;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  width:400px;
  height: 10vh;
 background-color: rgb(230, 250, 255);
  z-index: 1;
  top: 0;
}
.text{
    position: relative;
    font-size: 2em;
    text-align: center;
    /* justify-content: center; */
}
/* .cover{ */
   /* margin-top: 30px; */
   /* padding: 20px ; */
   /* background: white; */
   /* display: flex; */
   /* flex-direction: column; */
   /* justify-content: center; */
   /* display: flex; */
   /* justify-content:left; */
   /* margin:100px ; */
   /* width:500px; */
   /* height: 800px; */
/* } */
/* .cover{
    margin:3em;
    display: flex;
    flex-direction: row;
    justify-content: center;

} */
.card {
    width: 100px;
    display: flex;
    justify-content: center;
    background-color: white;
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
     font-size: 2em;
     margin-left:3em;
     height:auto;
     width:auto;
 }
 .description{
     margin-top: 10px;
     margin-left:3em;
     color:black;
     font-size: 1.5em;
     height: auto;
     width:auto;
 }
 .column2{
/* float: left; */
width:300px;
display: flex;
flex-direction: column;
justify-content: center;
/* border:1px solid black; */
height: auto;
 }
 /* .column1{ */
     /* float: left; */
     /* width:300px; */
     /* border:1px solid black; */
 /* } */
 .column1{
     position:sticky;
     justify-content: center;
     margin-left:3em;
 }
 .Image{
     height: 300px;
     width: 300px;
     position: center;
 }
.cancel{
cursor: pointer;
border: 2px solid #aaa;
background-color: transparent;
height: 4em;
width: 6em;
color:#aaa;
font-size: 1em;
box-shadow: 0 6px 6px rgba(0, 0, 0, 0.6);
margin-top: 2em;
margin-bottom: 2em;

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
.container{
    height: auto;
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
}
</style>
