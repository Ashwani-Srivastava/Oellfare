import { Observable         }   from    'rxjs';

import { FirestoreService   }   from    'common/firestore.service';
import { Fundraiser         }   from    'fundraiser/fundraiser.model';

export class FundsaiserServiceController {

    constructor() {
    }

    public fetchFundraiser(ngoId: string, fundId: string): Observable<Fundraiser> {
        return FirestoreService.fetchSingleSubDocument('Ngo', ngoId, 'Fundraiser', fundId, Fundraiser);
    }

}

export const FundraiserService = new FundsaiserServiceController();
