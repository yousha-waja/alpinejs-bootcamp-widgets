
   document.addEventListener("alpine:init", () => {
    Alpine.data('greet', ()=>({
      visibleG:false,
      inputG:true,
      messageG:false,
      name : '',
      hello(){
        let input = document.querySelector('input').value
        if(input != ''){
            this.inputG = false,
            this.messageG=true
       }
      },
    }));
  });