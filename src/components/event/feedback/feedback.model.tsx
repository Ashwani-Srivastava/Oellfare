import dayjs                    from    'dayjs';
import relativeTime             from    'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

import { Doc                }   from    "common/common.model";
import { Event, EventRef    }   from    'event/event.model';
import { Volunteer,
         VolunteerRef       }   from    'volunteer/volunteer.model';
import { Ngo,
         NgoRef             }   from    'ngo/ngo.model';

export class Feedback extends Doc {

    public attended             :   boolean;
    public feedback             :   string;
    public rating               :   number;
    public event                :   EventRef;
    public volunteer            :   VolunteerRef;
    public ngo                  :   NgoRef;

    public fromTime             :   string;

    constructor(obj: any = {}) {
        super(obj);

        this.attended           =   obj.attended ? obj.attended : false;
        this.feedback           =   obj.feedback ? obj.feedback : '';
        this.rating             =   obj.rating ? obj.rating : 0;
        this.event              =   new EventRef(obj.event);
        this.volunteer          =   new VolunteerRef(obj.volunteer);
        this.ngo                =   new NgoRef(obj.ngo);

        this.fromTime           =   dayjs(this.createdAt).fromNow();
    }

    public static constructFrom(attended: boolean, feedback: string, rating: number, event: Event, volunteer: Volunteer, ngo: Ngo): Feedback {

        return new Feedback({
            attended            :   attended,
            feedback            :   feedback,
            rating              :   rating,
            event               :   new EventRef(event),
            volunteer           :   new VolunteerRef(volunteer),
            ngo                 :   new NgoRef(ngo),
        });
    }

    public toJson() {
        return {
            ...this,
            event               :   this.event.toJson(),
            volunteer           :   this.volunteer.toJson(),
            ngo                 :   this.ngo.toJson()
        }
    }

}
