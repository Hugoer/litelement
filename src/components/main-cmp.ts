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
      <h1 class="u-hidden-tablet">Hidden until tablet</h1>
      <h2 class="u-hidden-from-tablet">Hidden from tablet</h2>
      <div class="u-block-mobile">Display block until mobile</div>
      <div class="u-none-mobile">Display none until mobile</div>
    `;
  }

  firstUpdated() {

  }

  stateChanged(_state: RootState) {
  }

}

