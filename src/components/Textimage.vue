<template>
<div>
  <div class="container">
  <b-row>
    <b-col  cols="7">
      <b-img class="img-fluid" md="*" :src="imgsrc"></b-img>
    </b-col>
    <b-col >
      <span cols="6" v-html="textml"></span>
    </b-col>
  </b-row>
  </div>

</div>
</template>

<script>
export default {
  props : {
    imgsrc: String,
    textml: String,
  } ,
  name: "Textimage"
}
</script>

<style scoped>

</style>