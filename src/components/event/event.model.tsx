import { Doc, DocRef, Media }   from    "common/common.model";
import { Coordinator        }   from    "ngo/coordinator/coordinator.model";
import { Block, District    }   from    "location/location.model";
import { State              }   from    "location/location.model";
import { CauseRef           }   from    "cause/cause.model";
import { NgoRef             }   from    "ngo/ngo.model";

declare var firebase:any;

export interface EventFlag {
    allowVolunteersToUpload  :    boolean;
    hideVolunteers           :    boolean;
    limitVolunteers          :    boolean;
}

export class EventRef extends DocRef {
    constructor(obj: any = {}) {
        super(obj);
    }

    toJson() {
        return {
            ...super.toJson(),
        }
    }

}

export class Event extends Doc {
    public ngo                :    NgoRef;
    public state              :    State;
    public district           :    District;
    public block              :    Block;
    public cause              :    CauseRef;
    public eventType          :    DocRef;
    public flag               :    EventFlag;

    public isBroadcasted      :    boolean;
    public isWriteupMade      :    boolean;

    public address            :    string;
    public coordinators       :    Coordinator[];
    public coverPhoto         :    Media[];
    public coverPhotoName     :    string[];
    public coverURL           :    string;
    public description        :    string;
    public donationCollected  :    number;
    public donationRequired   :    number;
    public formId             :    string;
    public fullVenue          :    string;
    public googleMapSearchKey :    string;
    public latitude           :    number;
    public longitude          :    number;
    public mapSearch          :    string;
    public maplocation        :    any; //firebase.firestore.GeoPoint;
    public shortAddress       :    string;
    public shortCode          :    string;
    public shortVenue         :    string;
    public shortURL           :    string;
    public volunteerJoined    :    number;
    public volunteerRequired  :    number;

    public endDate: Date;
    public startDate: Date;

    constructor(obj: any      =    {} , baseNGOStorageURL: string = "") {
        super(obj);

        if (!obj) {
            obj               =    {};
        }

        this.ngo              =    new NgoRef(obj.ngo);
        this.state            =    new State(obj.state);
        this.district         =    new District(obj.district);
        this.block            =    new Block(obj.block);
        this.cause            =    new CauseRef(obj.cause);
        this.eventType        =    new DocRef(obj.eventType);
        this.flag             =    obj.flag
                                    ? obj.flag
                                    : {
                                        allowVolunteersToUpload: false,
                                        hideVolunteers: false,
                                        limitVolunteers: false,
                                    };
        this.isBroadcasted   =    obj.isBroadcasted || false;
        this.isWriteupMade   =    obj.isWriteupMade || false;

        this.address         =    obj.address || "";
        this.coverPhoto      =    Doc.parseArray(obj.coverPhoto, Media);
        this.coverPhotoName  =    obj.coverPhotoName || [];
        this.description     =    obj.description || "";
        this.formId          =    obj.formId || "";
        this.fullVenue       =    obj.fullVenue || "";
        this.googleMapSearchKey = obj.googleMapSearchKey || "";
        this.latitude        =    obj.latitude || 0;
        this.longitude       =    obj.longitude || 0;
        this.mapSearch       =    obj.mapSearch || "";
        //this.maplocation        =   doc.parseLocation(obj.maplocation);
        this.shortAddress    =    obj.shortAddress || "";
        this.shortCode       =    obj.shortCode || "";
        this.shortVenue      =    obj.shortVenue || "";
        this.shortURL        =    obj.shortURL || "";
        this.volunteerJoined =    obj.volunteerJoined || 0;
        this.volunteerRequired =  obj.volunteerRequired || 0;

        //this.endDate         =    Doc.parseDate(obj.endDateLong);
        //this.startDate       =    Doc.parseDate(obj.startDateLong);
        this.endDate         =    Doc.parseDate(obj.endDate);
        this.startDate       =    Doc.parseDate(obj.startDate);

        if (obj.coordinators && Array.isArray(obj.coordinators)) {
            this.coordinators=    obj.coordinators.map(
                (coord) => new Coordinator(coord, obj.ngo.logo.url)
            );
        } else {
            this.coordinators=    [];
        }

        this.coverURL =
            baseNGOStorageURL +
            "%2F" +
            this.ngo.id +
            "%2F400_" +
            this.coverPhotoName;
    }
}
