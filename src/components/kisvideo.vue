<template>
  <div class="align-items-center">

      <b-row>
        <b-col  cols="4">
          <div>
            <video class="embed-responsive" controls>
              <source :src="videosrc"
                      type="video/webm" source>
            </video>
        </div>
        </b-col>
        <b-col cols="2">
        <span  v-html="textml"></span>
        </b-col>
        <b-col  cols="4">
          <div>
            <video class="embed-responsive" controls>
              <source :src="videosrc"
                      type="video/webm" source>
            </video>
          </div>
        </b-col>
        <b-col cols="2">
          <span  v-html="textml"></span>
        </b-col>


      </b-row>
    </div>


</template>

<script>
export default {
name: "kisvideo",

  props : {
    videosrc: String,
    textml: String,
  } ,
  data(){
    return{


    }
  },
}
</script>

<style scoped>

</style>