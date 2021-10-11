<template>
<div class="navbar">
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar{
  position: sticky;
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
.home{
    display: flex;
    justify-content: left;
    color:white;
    margin-left: 40vw;
}
.about{
    display: flex;
    justify-content: left;
    color:white;
}
.contact{
    display: flex;
    justify-content: left;
    color:white;
}
</style>
