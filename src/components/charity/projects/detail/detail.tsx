import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'charity-projects-detail',
  styleUrl: 'detail.css'
})
export class CharityProjectsDetail {

    @Prop() projectSlug: string;

  render() {
    return (
        <div> { this.projectSlug } </div>
    );
  }

}
