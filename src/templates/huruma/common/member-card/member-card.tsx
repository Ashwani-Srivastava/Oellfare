import { Component, h, Prop }   from    '@stencil/core';
import { Member             }   from    'ngo/ngo.model';

@Component({
    tag                         :   'huruma-member-card',
    styleUrl                    :   'member-card.css',
})
export class HurumaMemberCard {

    @Prop() member               :   Member;

    render() {
        return (
            <div class="team-item">
                <div class="image">
                    <img src={this.member.photo.url} class="member-image" alt={this.member.name} style={{ 'height': '350px' }}/>

                    <ul class="social">
                        {this.member.reachOut.facebook.length > 0 ? 
                            <li>
                                <a href={this.member.reachOut.facebook} target="_blank">
                                    <i class="bx bxl-facebook"></i>
                                </a>
                            </li>
                        : null }
                        {this.member.reachOut.twitter.length > 0 ? 
                            <li>
                                <a href={this.member.reachOut.twitter} target="_blank">
                                    <i class="bx bxl-twitter"></i>
                                </a>
                            </li>
                        : null }
                        {this.member.reachOut.linkedin.length > 0 ? 
                            <li>
                                <a href={this.member.reachOut.linkedin} target="_blank">
                                    <i class="bx bxl-twitter"></i>
                                </a>
                            </li>
                        : null }
                        {this.member.reachOut.instagram.length > 0 ? 
                            <li>
                                <a href={this.member.reachOut.instagram} target="_blank">
                                    <i class="bx bxl-instagram"></i>
                                </a>
                            </li>
                        : null }
                    </ul>
                </div>

                <div class="content">
                    <h3>{this.member.name}</h3>
                    <span>{this.member.role}</span>
                </div>
            </div>
        );
    }

}
