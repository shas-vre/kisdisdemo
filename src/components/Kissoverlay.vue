<template>
  <div >
    <div v-if="overkis" @onclick="changehide">
        <b-overlay :show="show" rounded="sm" @shown="onShown" @hidden="onHidden" spinner-type="false">

    <b-img class="img-fluid" md="*" :src="imgsrc" v-text="'something'" onclick="">
      something
      <b-text> weird</b-text>
    </b-img>
          <template v-slot:overlay>
            <div class="text-center">

              <p size="lg" id="cancel-label">Contact</p>
</div>
          </template>
        </b-overlay>
    <b-button
        ref="cancel"
        size="sm"
        aria-describedby="cancel-label"
        @click="changehide">
      Cancel
    </b-button>
    </div>

    <textimage v-if="textimage"  :textml="textml" :imgsrc="imgsrc"></textimage>
  </div>
</template>

<script>
import Textimage from "@/components/Textimage";

export default {

  props : {
    imgsrc: String,
    textml: String,
  } ,

  name: "Kissoverlay",

  data(){
    return {
      show : true,

      textimage :false,
      overkis :true,

    }
  },

  methods: {

    changehide(){
      this.textimage= true;
      this.overkis = false;

    },
    onShown() {
      // Focus the cancel button when the overlay is showing
      this.$refs.cancel.focus()

    },
    onHidden() {
      // Focus the show button when the overlay is removed
      this.$refs.show.focus()

    }
  },
  components:{

  Textimage,
  },


}
</script>

<style scoped>

</style>