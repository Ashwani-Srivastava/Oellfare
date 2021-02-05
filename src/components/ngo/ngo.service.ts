import { Observable         }   from    'rxjs';

import { FirestoreService   }   from    'common/firestore.service';
import { Ngo                }   from    'ngo/ngo.model';

export class NgoServiceController {

    constructor() {
    }

    public fetchNgo(ngoId: string): Observable<Ngo> {
        return FirestoreService.fetchSingleDocument('Ngo', ngoId, Ngo);
    }

}

export const NgoService = new NgoServiceController();
