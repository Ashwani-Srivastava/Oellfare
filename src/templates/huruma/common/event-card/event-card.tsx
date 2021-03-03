import { Component, h, Prop }   from    '@stencil/core';

@Component({
    tag                         :   'huruma-event-card',
    styleUrl                    :   'event-card.css',
})
export class HurumaEventCard {

    @Prop() event               :   any ;

    render() {
        return (
            <div class="event-item">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="event-content">
                            <h4>{this.event?.name}</h4>

                            <ul class="event-meta">
                                <li>
                                    
                                </li>

                                <li>
                                    <i class="flaticon-pin"></i>
                                    {this.event?.address} 
                                </li>
                            </ul>
                            <p class="event-description">{this.event?.cause?.name}</p>
                            <a href="/volunteer" class="event-btn-one">Join Now +</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
