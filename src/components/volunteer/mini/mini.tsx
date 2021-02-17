import { Component, h, Prop }   from    '@stencil/core';
import { Event, EventEmitter}   from    '@stencil/core';
import { Volunteer          }   from    'volunteer/volunteer.model';

@Component({
    tag: 'volunteer-mini',
    styleUrl: 'mini.css',
})
export class VolunteerMini {

    @Prop() volunteer           :   Volunteer;
    @Event() logoutTapped       :   EventEmitter;

    async showOptions() {
        const actionSheet       =   document.createElement('ion-action-sheet');

        actionSheet.header      =   "Profile";
        actionSheet.buttons     =   [{
            text                :   'Share',
            icon                :   'share',
            handler             :   () => {
                console.log('Share clicked');
            }
        }, {
            text                :   'Logout',
            icon                :   'log-out-outline',
            handler             :   () => {
                this.logoutTapped.emit('lg');
            }
        }, {
            text                :   'Cancel',
            icon                :   'close',
            role                :   'cancel',
            handler             :   () => {
                console.log('Cancel clicked');
            }
        }];
        document.body.appendChild(actionSheet);
        return actionSheet.present();
    }

    render() {
        return (
            <span class='mr-8' onClick={ () => this.showOptions() } >
                <ion-img class='mini' src={ this.volunteer.photo.url }></ion-img>
                <p class='inline ion-hide-md-down'> &nbsp; { this.volunteer.name } &nbsp; </p>
            </span>
        );
    }

}
