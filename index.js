class  App{
    constructor(){
     this.handlerEventsListeners()
     this.$form = document.getElementById('form')
    }
    handlerEventsListeners(){
          document.body.addEventListener('click',e =>{
                 this.handlerForm(e)
          })
    }
    handlerForm(e){
        const theFormWasClicked = this.$form.contains(e.target)
        if(theFormWasClicked){
            console.log(`this was clicked`)
        }
    }
}
new App()