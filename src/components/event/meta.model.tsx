import { Doc, DocRef        }   from    "common/common.model";
import { BlockRef, District }   from    "location/location.model";
import { State              }   from    "location/location.model";
import { CauseRef           }   from    "cause/cause.model";
import { NgoRef             }   from    "ngo/ngo.model";

export class EventMeta extends DocRef {
    public ngo                  :   NgoRef;
    public state                :   State;
    public district             :   District;
    public block                :   BlockRef;
    public cause                :   CauseRef;
    public eventType            :   DocRef;
   
    public coverPhotoName       :   string;
    public coverURL             :   string;
    public donationCollected    :   number;
    public donationRequired     :   number;
    public isWriteupMade        :   boolean;
    public shortAddress         :   number;
    public shortURL             :   string;
    public shortVenue           :   string;
    public volunteerJoined      :   number;
    public volunteerRequired    :   number;

    public createdAt            :   Date;
    public startDate            :   Date;
    public endDate              :   Date;

    constructor(obj: any = {}, baseNGOStorageURL: string = '') {

        super (obj);

        if (!obj) {
            obj                 =    {};
        }

        this.ngo                =   new NgoRef(obj.ngo);
        this.state              =   new State(obj.state);
        this.district           =   new District(obj.district);
        this.block              =   new BlockRef(obj.block);
        this.cause              =   new CauseRef(obj.cause);
        this.eventType          =   new DocRef(obj.eventType);

        this.coverPhotoName     =   obj.coverPhotoName || [];
        this.donationCollected  =   obj.donationCollected || 0;
        this.donationRequired   =   obj.donationRequired || 0;
        this.isWriteupMade      =   obj.isWriteupMade || false;
        this.shortAddress       =   obj.shortAddress || "";
        this.shortURL           =   obj.shortURL || "";
        this.shortVenue         =   obj.shortVenue || "";
        this.volunteerJoined    =   obj.volunteerJoined || 0;
        this.volunteerRequired  =   obj.volunteerRequired || 0;

        this.createdAt          =   Doc.parseDate(obj.createdAt);
        this.endDate            =   Doc.parseDate(obj.endDateLong);
        this.startDate          =   Doc.parseDate(obj.startDateLong);

        this.coverURL           =
                                    baseNGOStorageURL +
                                    "%2F" +
                                    this.ngo.id +
                                    "%2F400_" +
                                    this.coverPhotoName;
    }
}
