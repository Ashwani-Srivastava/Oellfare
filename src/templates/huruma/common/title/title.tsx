import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'huruma-title',
    styleUrl: 'title.css',
})
export class HurumaTitle {
    
    @Prop() level               :   number          =   1;
    @Prop() name                :   string          =   '';
    @Prop() parent              :   string          =   '';
    @Prop() bgImage             :   string          =   '/assets/huruma/img/page-title-bg.jpg';

    render() {
        return (
        <div class="page-title-area" style={{ 'background': `url(${this.bgImage})`, 'background-size': 'cover' }}>
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="container">
                        <div class="page-title-content">
                            <h2> { this.name } </h2>
                            <ul>
                                <li><a href="/">Home</a></li>
                                { this.parent.length > 0 ?
                                <li> { this.parent } </li>: null }
                                <li> { this.name } </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }

}
