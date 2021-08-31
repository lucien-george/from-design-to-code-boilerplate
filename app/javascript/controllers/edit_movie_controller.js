import { Controller } from 'stimulus';

export default class extends Controller {
  static targets = [ 'form', 'info', 'card' ];

  showForm(event) {
    this.infoTarget.classList.add('d-none');
    this.formTarget.classList.remove('d-none');
  }

  updateInfo(event) {
    event.preventDefault();
    fetch(this.formTarget.action, {
      method: 'PATCH',
      headers: { 'Accept': 'text/plain' },
      body: new FormData(this.formTarget)
    })
      .then(response => response.text())
      .then((data) => {
        // this.cardTarget.outerHTML = data;
        this.element.outerHTML = data;
      });
  }
}
