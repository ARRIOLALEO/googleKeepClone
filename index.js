// first we define our class
class App {
  //  contructor is called when we call our class with the word bew
  //  the constructor inicilate our object
  constructor() {
    //  we set our form and we bind it with the this
    this.$form = document.getElementById("form");
    this.$addNote = document.getElementById("submit-button");
    //we set the elements of our form in order to show or hide them
    this.$noteTittle = document.getElementById("note-title");
    this.$noteText = document.getElementById("note-text");
    this.$formBtns = document.getElementById("form-buttons");

    // on creation we load ours listeners
    this.setAllLsitenerOnTheWebpage();
  }
  // we need to set all listeners in our website we create a method
  setAllLsitenerOnTheWebpage() {
    //   we add a click function to our body "e" is the element that was clicked
    document.body.addEventListener("click", (e) => {
      // we call and set the form handler
      this.formClickHandler(e);
      this.addNoteHandler(e);
    });
  }
  // we create th method that will handal the form we need to see if was cliked we add the event
  formClickHandler(e) {
    // we checked if the form was clicked
    const theFormWasClicked = this.$form.contains(e.target);
    // if the form was cliked we show the form in order to add our note to the syste
    if (theFormWasClicked) {
      this.openForm();
    } else {
      // if was clicked somewhere else and the form is open the form must be closed
      this.closeForm();
    }
  }
  // this method handle the add the note
  addNoteHandler(e) {
    const addTheNoteWasClicked = this.$addNote.contains(e.target);
    //  if it was cliked
    if (addTheNoteWasClicked) {
      alert(this.$noteTittle.value);
    }
  }
  // this function open the form in our system
  openForm() {
    this.$noteText.style.display = "block";
    this.$noteTittle.style.display = "block";
    this.$formBtns.style.display = "block";
  }
  // this function close our form it is just inverse to open
  closeForm() {
    this.$noteTittle.style.display = "none";
    this.$formBtns.style.display = "none";
  }
}
// we call our app to be active in our page we just have one page we just call our App
new App();
