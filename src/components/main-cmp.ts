import {
  LitElement,
  html,
  customElement
} from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store, RootState } from '../store';

@customElement('main-cmp')
export class Main extends connect(store)(LitElement) {

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <h1 class="u-hidden-tablet">Hello world!</h1>
      <h2>h1 is hidden in tablet</h2>
    `;
  }

  firstUpdated() {

  }

  stateChanged(_state: RootState) {
  }

}

