import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'huruma-title',
    styleUrl: 'title.css',
})
export class HurumaTitle {
    
    @Prop() level               :   number          =   1;
    @Prop() name                :   string          =   '';

    render() {
        return (
        <div class="page-title-area">
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="container">
                        <div class="page-title-content">
                            <h2> { this.name } </h2>
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li>About</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }

}
