/**
 * A Lit-element for rendering an icon from '/public/icons' folder.
 *
 * The icons are expexted to be 128 x 128, in SVG format and have a <g> or path element with the id 'icon'.
 */
import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("vt-icon")
export class VtIcon extends LitElement {
  @property({ type: String })
  icon = "vt";

  static styles = css`
    :host {
      display: block;
      position: relative;
    }
    :host svg {
      fill: currentColor;
      width: 100%;
      height: 100%;
    }
  `

  render() {
    return html`<svg width="128px" height="128px" viewBox="0 0 128 128">
      <g fill="currentColor">
        <use href="/icons/${this.icon}.svg#icon"></use>
      </g>
    </svg>`;
  }
}
