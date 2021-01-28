import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'charity-press-coverage',
  styleUrl: 'press-coverage.css',
})
export class PressCoverage {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
