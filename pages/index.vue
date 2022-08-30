<template>

<div class="welcome-div">
    <h1><span>Nuxt</span>Play</h1>
    <nuxt-link class="btn" to="/VideoList">
      Start Watching...
    </nuxt-link>
</div>

</template>

<script>
import { mapState, mapActions } from "vuex";


export default {
  name: 'IndexPage',

  computed: mapState(["videos"]),

  methods:{
      ...mapActions([''])
    },
    
  
}
</script>
