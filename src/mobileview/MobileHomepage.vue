<template>
   <div class="container">
   <div class="test">Welcome to our blogging <br>site on a xyz foundation.</div>
   <div class="text">Fast,reliable and packed with features,<br>our blogging platform gives options <br>that are designed to fit your needs.<br><br></div>
    <button class="btns" @click="form">Post</button>
</div>
</template>
<script>
export default {
  components: {
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
      this.$router.push('/mobileCreatePost')
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 400px){
  .container{
  /* position: relative; */
  height: 500px;
  width: 100%;
}
.test{
    /* position: relative; */
    font-size: 2em;
    color:#000000;
    display: flex;
    justify-content: center;
     margin-top:5em ;
}
.text{
     position: relative;
     font-size: 1.3em;
     color:#aaa;
     /* margin-top: 2em; */
     display: flex;
     flex-direction: row;
     justify-content: center;
     margin-top: 5em;
}
.btns{
cursor: pointer;
border: 1px solid #aaa;
background-color:transparent;
/* padding: 0.5em; */
color:#000000;
/* font-size: 0.5em; */
height: 3rem;
width: 7rem;
box-shadow: 0 6px 6px rgba(0, 0, 0, 0.6);
z-index: 1;
margin-top:5em;
margin-left: 17em;
}
.btns:hover{
color:#000000;
background-color:#FFFFFF;
}
}

/* @media all and (max-width:30em){
.btn{
display:block;
padding: 10vh;
} */
/* } */
</style>
