import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'charity-legal',
  styleUrl: 'legal-page.css'
})
export class LegalPage {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
