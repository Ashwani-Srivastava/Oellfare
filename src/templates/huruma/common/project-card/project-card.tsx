import { Component, h, Prop }   from    '@stencil/core';
import { Project } from 'ngo/ngo.model';

@Component({
    tag                         :   'huruma-project-card',
    styleUrl                    :   'project-card.css',
})
export class HurumaProjectCard {

    @Prop() project               :   Project ;

    render() {
        return (
            <div class="col-lg-4 col-md-6">
                <div class="single-causes">
                    <img src={this.project.photo.url} class="project-image" alt={this.project.name}/>

                    <div class="causes-content">
                        <h3>{this.project.name}</h3>
                        <p class="ellipsis">{this.project.description}</p>
                        
                        <ion-router-link class="causes-btn-one" color='white' href={`/projects/${this.project.slug}`}> 
                            See More
                            <i class="flaticon-right"></i>
                        </ion-router-link>
                    </div>
                </div>
            </div>
        );
    }

}