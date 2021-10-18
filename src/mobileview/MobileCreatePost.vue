<template>
<div class="container1">
<div class="inner">
  <div class="column1"></div>
  <div class="column2">
    <div>
    <input type="text" class="title" v-model="title" placeholder="Give a Title">
    <span style="color: red;font-size: small" v-if="!validtitle"></span>
    </div>
    <div>
    <textarea name="desc" class="descprition"  v-model="description" placeholder="Write Description for blog"></textarea>
    <span style="color: red;font-size: small" v-if="!validdescription"></span>
    </div>
   <div class="img" v-if="previewImage">
      <img :src="previewImage" class="uploading-image" />
      </div>
      <div class="img" v-else>
        NO IMAGE SELECTED
      </div>
      <div >
      <input type="file" accept="image/jpeg" @change=uploadImage>
   </div>
    <div class="btn1">
      <button class="publish" @click="publishing">Publish</button>
    <button class="cancel" @click="callcancel">Cancel</button>
    </div>
  </div>
  <div class="column3">
  </div>
</div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      imgUrl: '',
      title: '',
      description: '',
      validtitle: true,
      validdescription: true,
      validimgUrl: true,
      previewImage: null,
      dataId: {
        title: '',
        description: '',
        imgUrl: '',
        image: ''
      }
    }
  },
  methods: {
    ...mapActions(['postblog']),
    callcancel () {
      this.$router.push('/mobileHome')
    },
    publishing () {
      if (this.title.length > 10) {
        this.dataId.title = this.title
        this.validtitle = true
        console.log('title is true', this.title)
      } else {
        this.validtitle = false
        this.$alert('Title Must be 10 charater long')
      }
      if (this.description !== '') {
        this.dataId.description = this.description
        this.validdescription = true
      } else {
        this.validdescription = false
        this.$alert('Add description!!!!!')
      }
      if (this.imgUrl !== '') {
        this.dataId.imgUrl = this.imgUrl
        this.validimgUrl = true
      } else {
        this.validimgUrl = false
        this.$alert('Add Image Url!!!!!')
      }
      if (this.validtitle === true && this.validdescription === true && this.validimgUrl === true) {
        this.dataId.previewImage = this.previewImage
        this.postblog({
          data: this.dataId,
          success: this.chechking
        })
      }
    },
    chechking (status) {
      this.$alert('sucess')
      this.$router.push('/mobileAllUser')
    },
    uploadImage (e) {
      const image = e.target.files[0]
      localStorage.setItem('image', image)
      const reader = new FileReader()
      reader.readAsDataURL(image)
      reader.onload = e => {
        this.previewImage = e.target.result
        console.log(this.previewImage)
      }
    }

  }
}
</script>

<style scoped>
@media screen and (max-width: 400px){
.inner{
  display: flex;
  justify-content: space-between;
  height: 100%;
}
.column1{
float: left;
width:15%;
background-color: rgb(230, 250, 255);
}
.column2{
float: left;
width:70%;
justify-content: center;

}
.column3{
float: left;
width:15%;
background-color: rgb(230, 250, 255);
}
.title{
  width:15rem;
  height: 5vh;
  border:none;
  outline: none;
  font-size: 1.5em;
  font-weight: bold;
  font-family: serif;
  margin-top: 5vh;
  margin-bottom: 5vh;
  margin-left: 2vw;
  margin-right: 2vw;
  padding: 1vh;
  text-align: center;
  color:blue
}
.descprition{
  width:15rem;
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
width:15rem;
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
  height: 500px;
  width: 100%;
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
margin-top: 8vh;
}
.cancel{
  cursor: pointer;
border: 2px solid #aaa;
background-color: transparent;
height: 3rem;
width: 5rem;
color:#aaa;
font-size:1em;
box-shadow: 0 6px 6px rgba(0, 0, 0, 0.6);
margin-top: 8vh;
}
.img{
  /* height: auto; */
  margin: auto;
  width: 100%;
  height:330px;
  /* display: flex;
  justify-content: center; */

}
}
</style>
