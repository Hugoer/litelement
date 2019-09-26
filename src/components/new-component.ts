import { css, customElement, html, LitElement, property } from 'lit-element';

@customElement('hello-view')
export class HelloView extends LitElement {
  static get styles() {
    return css`
      #root {
        text-align: center;
      }
    `;
  }

  @property({ type: String })
  private value = '';

  public render() {
    return html`
      <h1>Hola Mundo!</h1>
      <div id="root">
        <span>${this.value}</span>
        <button @click="${this.handleClick}">Increment</button>
      </div>
    `;
  }

  private handleClick() {
    this.dispatchEvent(new CustomEvent('increment'));
  }
}
