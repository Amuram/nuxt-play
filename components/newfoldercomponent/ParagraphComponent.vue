<template>
  <div>
    <div class="text-div " contenteditable="true" ref="editable-div" @keyup.enter="$emit('enterKeyPressed', paragraph.content)" > </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            text: '',
        }
    },

    props: {
        paragraph: {
            type: Object,
            required: true,
        },
        index:{
            type: Number,
            required:   true,
        }
        
    },
    emits:['enterKeyPressed'],
    watch: {
        paragraph: {
            handler(newValue){
                this.text = this.paragraph.content
            },
            immediate: true,
            deep: true,
        }
    },
    methods:{
        totalCharacterCount(){
            charCount = this.$refs.editable-div.value.length,
            console.log(charCount)
        },
        cursor_position() {
            var sel = document.getSelection();
            sel.modify("extend", "backward", "paragraphboundary");
            var pos = sel.toString().length;
            if(sel.anchorNode != undefined) sel.collapseToEnd();

            return pos;
        },
        generateHtml(htmlString){
            let div = document.createElement('div');
            div.innerHTML = this.text;
            return div.childNodes;
        },
        enterKeyPressed(){
            if ( this.paragraph.content = img){
                this.text = src
            }
        }

    }
}
</script>

<style>

</style>