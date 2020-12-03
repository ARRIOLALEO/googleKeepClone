class App {
  constructor() {
    this.eventListenerHandler();
    this.$form = document.getElementById("form");
    this.$noteTitle = document.getElementById("note-title");
    this.$noteText = document.getElementById("note-text");
    this.$formButtons = document.getElementById("form-buttons");
  }
  eventListenerHandler() {
    document.body.addEventListener("click", (e) => {
      this.formWasClickedHandler(e);
    });
  }
  formWasClickedHandler(e) {
    const theFormWasClicked = this.$form.contains(e.target);
    if (theFormWasClicked) {
      this.openForm();
    }
  }
  openForm() {
    console.log(`rhis is called`);
    this.$noteTitle.style.display = "block";
    this.$noteText.style.display = "block";
    this.$formButtons.style.display = "block";
  }
}
new App();
