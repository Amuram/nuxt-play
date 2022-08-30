<template>
  <div class="video-wrapper">
    <BackButton/>
    <div class="video-container">
      <div class="iframe-wrapper">
        <iframe :src="`https://www.youtube.com/embed/${this.$route.params.id}`" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
    </div>
  </div>  
</template>

<script>
import { mapState, mapActions } from "vuex";
import BackButton from "~/components/BackButton.vue";
export default {
    computed: {
        ...mapState(["videos"]),
    },
    methods: {
        ...mapActions(["SET_VIDEOS"]),
    },
    components: { BackButton }
}
</script>

<style>

</style>

