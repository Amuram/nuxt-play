<template>
  <div>
    
  </div>
</template>

<script>
export default {
    data(){
    return {
          
            'normal_text': {
              'bold': true,
              'italic': true,
              'underline': true,

            },
            'main_heading': {
              'bold': false,
              'italic': true,
              'underline': true,

            },
            'sub_heading': {
              'bold': false,
              'italic': true,
              'underline': true,

            },
            'quote': {
              'bold': false,
              'italic': true,
              'underline': true,

            },

            'bold': 'flok-nl-bold',
            'underline': 'flok-nl-underline',
            'italics': 'flok-nl-italics',
            'quote': 'flok-nl-quote',
            'main_heading': 'flok-nl-main-heading',
            'sub_heading': 'flok-nl-sub-heading',

         paragraphs: [   
                    {
                        'type': 'normal-text',
                        'content': 'Hello world',
                        'classes': ['flok-nl-bold', 'flok-nl-underline'],
                        'generated_html': '<div class="flok-nl-bold flok-nl-underline">Hello World</div>'
                    },
                    {
                        'type': 'normal-text',
                        'content': 'Hello world',
                        'classes': ['flok-nl-italic', 'flok-nl-underline'],
                        'generated_html': '<div class="flok-nl-italic flok-nl-underline">Hello World</div>'
                    },
                    {
                        'type': 'quote',
                        'content': 'Hello world',
                        'classes': ['flok-nl-quote'],
                        'generated_html': '<div class="flok-nl-quote">Hello World</div>'
                    },
]

          
    }
  },
  
    
}
</script>

<style>

</style>

