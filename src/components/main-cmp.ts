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
      <h1>Hello world!</h1>
    `;
  }

  firstUpdated() {

  }

  stateChanged(_state: RootState) {
  }

}

