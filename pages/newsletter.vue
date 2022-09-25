<template>
  <div>
    <paragraphComponent v-for="(paragraph, index) in paragraphs" :key="index"  
    :index="index" :paragraph="paragraph"
    @enterKeyPressed="generateContent"
    />
  </div>
</template>

<script>
import paragraphComponent from '~/components/newfoldercomponent/ParagraphComponent.vue';


export default {
    components:{
        paragraphComponent
    },
    data(){
    return {
          types :{

            normal_text: {
              'bold': true,
              'italic': true,
              'underline': true,

            },
            main_heading: {
              'bold': false,
              'italic': true,
              'underline': true,

            },
            sub_heading: {
              'bold': false,
              'italic': true,
              'underline': true,

            },
            quote: {
              'bold': false,
              'italic': true,
              'underline': true,

            },

          },
        actions:{
            bold: 'flok-nl-bold',
            underline: 'flok-nl-underline',
            italics: 'flok-nl-italics',
            quote: 'flok-nl-quote',
            main_heading: 'flok-nl-main-heading',
            sub_heading: 'flok-nl-sub-heading',

        },

         paragraphs: [   
                    {
                        type: 'normal-text',
                        content: '',
                        classes: [],
                        generated_html: null,
                    },
                  ]          
                }
  },
  
  methods:{
    generateContent(){

    }
  }
}
</script>

<style>

</style>

