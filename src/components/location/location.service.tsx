//import { first              }   from    'rxjs/operators';

import { DistrictRef, State }   from    'location/location.model';
//import { FirestoreService   }   from    'common/firestore.service';
import { Logger             }   from    'common/logger';

class LocationServiceController {
    private stateList           :   State[];
    private districtList        :   Record<number, DistrictRef[]>   =   {};

    constructor() {
        Logger.info('LocationService :: Constructor');
        this.initialize();
    }

    async initialize() {
    }

    public async getAllStates(): Promise<State[]> {
        if (!this.stateList) {
            const resp          =   await fetch(`/assets/data/state-data.json`);
            const states        =   await resp.json();
            this.stateList      =   states.map(s => new State(s)).sort((a, b) => a.name.localeCompare(b.name));
        }
        return this.stateList;
    }

    public async getDistrictOfState(stateId: number): Promise<DistrictRef[]> {
        if (!this.districtList[stateId]) {
            let districts       =   [];    
            try {
                const resp      =   await fetch(`/assets/data/state/${stateId}.json`);
                districts       =   await resp.json();
            } catch (err) {
                console.log('LocationService :: Get Districts Of State error', err);
            }
            this.districtList[stateId]                  =   districts.map(s => new DistrictRef(s)).sort((a, b) => a.name.localeCompare(b.name));
        }
        return this.districtList[stateId];
    }
}

export const LocationService    =   new LocationServiceController();


