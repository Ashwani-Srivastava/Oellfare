//import { Build              }   from    '@stencil/core';

import { Observable         }   from    'rxjs';
import { map                }   from    'rxjs/operators';

import { Event              }   from    'event/event.model';
import { Ngo                }   from    'ngo/ngo.model';
import { FirestoreService   }   from    'common/firestore.service';
import { Feedback           }   from    'event/feedback/feedback.model';
//import { Volunteer          }   from    'volunteer/volunteer.model';

export class FeedbackServiceController {

    private feedbackListP       :   Feedback[]          =   [];

    constructor() {
    }

    /*----------------------------------------------------------*/
    /*------------------------ Listing -------------------------*/
    /*----------------------------------------------------------*/

    public fetchFeedbackForNgo(ngo: Ngo, pageSize: number = 30): Observable<Feedback[]> {
        return FirestoreService.queryCollection('Feedback', 'ngo.id', ngo.id, Feedback, pageSize);
    }

    public fetchReviewsForNgo(ngo: Ngo, pageSize: number = 90): Observable<Feedback[]> {
        return FirestoreService.queryCollection('Feedback', 'ngo.id', ngo.id, Feedback, pageSize)
        .pipe(map((feeds: any) => feeds.filter(fe => {
            return fe.attended === true && fe.feedback.length > 0;
        })));
    }

    public async fetchFeedbackForNgoP(ngo: Ngo): Promise<Feedback[]> {
        if (this.feedbackListP.length === 0) {
            const resp          =   await fetch('/assets/data/feedback.json');
            const feedbacks     =   await resp.json();
            this.feedbackListP  =   feedbacks.map(f => new Feedback(f));
        }

        return this.feedbackListP.filter(f => {
            return f.ngo.id === ngo.id && f.attended === true && f.feedback.length > 0;
        });
    }

    public fetchFeedbackForEvent(event: Event, pageSize: number = 50): Observable<Feedback[]> {
        return FirestoreService.queryCollection('Feedback', 'event.id', event.id, Feedback, pageSize);
    }

    /*----------------------------------------------------------*/
    /*-------------------- Give Feedback -----------------------*/
    /*----------------------------------------------------------*/

    //TODO:
        /*
    public giveFeedback(event: Event, volunteer: Volunteer, feedback: string, rating: number): Promise<any> {
        const feed: Feedback    =   Feedback.constructFrom(event, volunteer, feedback, rating);
        return this.firebase.default.firestore()
            .collection('Feedback')
            .doc(`${event.id}---${volunteer.id}`).set(feed.toJson());
    }

    public deletedFeedback(event: Event, volunteer: Volunteer): Promise<any> {
        return this.firebase.default.firestore()
            .collection('Joinees')
            .doc(`${event.id}---${volunteer.id}`).delete();
    }
         */


}

export const FeedbackService = new FeedbackServiceController();

