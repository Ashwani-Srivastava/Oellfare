import { Component, Prop, h }   from    '@stencil/core';

import { Ngo                }   from    'ngo/ngo.model';

import * as ngo                 from    'assets/ngo.json';

@Component({
    tag                         :   'huruma-insta-slider',
    styleUrl                    :   'insta-slider.css',
})
export class HurumaInstaSlider {
    
    @Prop() ngo                 :   Ngo                 =   new Ngo(ngo);

    render() {
        return (
            <div class="instagram-area">
                <div class="instagram-slides owl-carousel owl-theme">
                    { this.ngo.photos.map(p => (
                    <div class="instagram-box">
                        <img src={p} alt="image" />

                        <div class="icon">
                            <i class="flaticon-instagram"></i>
                        </div>

                        <a href="https://www.instagram.com/" target="_blank"></a>
                    </div>
                    )) }
                </div>
            </div>
        );
    }

}
