<template>
<div>
    <Navbar/>
   <div class="container">
<div class="bgImg" ></div>
   <div class="test">Welcome to our blogging <br>site on a <br>xyz foundation.</div>
   <div class="text">Fast,reliable and packed with features,<br>our blogging platform gives<br>options that are designed to fit your needs.<br><br>
   <button class="btn" @click="form">Post</button>
   </div>
</div>
</div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  components: {
    Navbar
  },
  methods: {
    addSkill (e) {
      alert(e)
      if (e.key === ',' && this.tempSkill) {
        if (!this.skills.includes(this.tempSkill)) {
          this.skills.push(this.tempSkill)
        }
        this.tempSkill = ''
      }
    },
    myimg (e) {
      console.log(e.target.files)
    },
    form () {
      this.$router.push('/createpost')
    }
  }
}
</script>

<style scoped>
.container{
  position: fixed;
  height: 100%;
  width: 100%;
}
.bgImg{
    position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgb(230, 250, 255);;
}
.test{
    position: relative;
    font-size: 7vh;
    color:#000000;
    margin: 10vh;
}
.text{
    position: relative;
     font-size: 4vh;
     color:#aaa;
     margin: 10vh;
}
.btn{
cursor: pointer;
border: 2px solid #aaa;
background-color: transparent;
height: 10vh;
width: 20vw;
color:#000000;
font-size: 5vh;
box-shadow: 0 6px 6px rgba(0, 0, 0, 0.6);
margin: 5vh;
}
.btn:hover{
color:#000000;
background-color:#FFFFFF;
}
@media all and (max-width:30em){
.btn{
display:block;
padding: 10vh;
}
}
</style>
