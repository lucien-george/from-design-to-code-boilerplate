import { Controller } from 'stimulus';

export default class extends Controller {
  static targets = [ 'button' ];
  connect() {
  }

  updateText(event) {
    this.buttonTarget.innerText = 'Clicked!';
  }
}
