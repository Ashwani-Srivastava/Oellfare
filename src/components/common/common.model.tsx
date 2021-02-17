import dayjs                    from    'dayjs';
//import * as firebase            from    'firebase/app';
declare var firebase:any;

export class Doc {
    public id                   :   string;
    public name                 :   string;
    public updatedBy            :   string;
    public updatedAt            :   any;
    public createdBy            :   string;
    public createdAt            :   any;
    public isActive             :   boolean;
    public static modelCollection:  any;

    constructor(obj             :   any = {}) {
        if(!obj) {
            obj                 =   {};
        }

        this.createdAt          =   Doc.parseDate(obj.createdAt);
        this.createdBy          =   obj.createdBy       ||  '';
        this.updatedAt          =   Doc.parseDate(obj.updatedAt);
        this.updatedBy          =   obj.updatedBy       ||  '';
        this.id                 =   obj.id              ||  '';
        this.name               =   obj.name            ||  '';
        this.isActive           =   typeof obj.isActive === "boolean" ? obj.isActive : true;

    }

    public toJson() {
        return {
            createdAt           :   this.createdAt,
            createdBy           :   this.createdBy,
            id                  :   this.id,
            isActive            :   this.isActive,
            name                :   this.name,
            updatedAt           :   this.updatedAt,
            updatedBy           :   this.updatedBy,
        }
    }

    public static parseDate(dateObject: any): Date {
        if (dateObject) {
            if (dayjs.isDayjs(dateObject)) {
                return dateObject.toDate();
            } else if (dateObject.seconds) {
                return new Date(dateObject.seconds * 1000);
            } else if (dateObject._seconds) {
                return new Date(dateObject._seconds * 1000);
            } else if (dateObject instanceof Date) {
                return dateObject;
            } else if (Number.isInteger(dateObject)) {
                return new Date(dateObject);
            } else {
                return new Date();
            }
        } else {
            return new Date();
        }
    }

    public static parseLocation(locationObject: any) {

        if (locationObject.latitude && locationObject.longitude) {
            return new firebase.firestore.GeoPoint(locationObject.latitude, locationObject.longitude);
        } else if (locationObject.maplocation) {
            return locationObject.maplocation;
        } else {
            return new firebase.firestore.GeoPoint(0, 0);
        }
    }

    public static parseArray(arrayObject: any, ModelClass: any): Array<any> {
        if (arrayObject && Array.isArray(arrayObject)) {
            return arrayObject.map(o => new ModelClass(o));
        } else {
            return [];
        }
    }
}

export class DocRef {

    public id                   :   string;
    public name                 :   string;

    constructor(res:any = {}) {
        this.id                 =   res.id              ||  ''; 
        this.name               =   res.name            ||  ''; 
    }

    public toJson() {
        return {
            id                  :   this.id,
            name                :   this.name,
        }
    }


}

export class DocIntRef {

    public id                   :   number;
    public name                 :   string;

    constructor(res:any = {}) {
        this.id                 =   res.id              ||  0 
        this.name               =   res.name            ||  ''; 
    }

    public toJson() {
        return {
            id                  :   this.id,
            name                :   this.name,
        }
    }


}

export class Media {

    public caption              :   string;
    public url                  :   string;

    constructor(obj:any = {}, defaultUrl: string = '') {
        this.caption            =   obj.caption         ||  ''; 
        this.url                =   obj.url             ||  defaultUrl 
    }

    public toJson() {
        return {
            ...this
        }
    }

}

export class StatDonation {
    public collected            :   number;
    public count                :   number;
    public required             :   number;

    constructor(obj:any = {}) {
        this.collected          =   obj.collected       ||  0;
        this.count              =   obj.count           ||  0;
        this.required           =   obj.required        ||  0;
    }

    toJson() {
        return {
            ...this
        }
    }

}

export class StatSubscription {
    public currentCount         :   number;
    public currentCollected     :   number;
    public required             :   number;
    public months               :   number;
    public totalCount           :   number;
    public totalCollected       :   number;

    constructor(obj:any = {}) {
        this.currentCount       =   obj.currentCount    ||  0;
        this.currentCollected   =   obj.currentCollected||  0;
        this.required           =   obj.required        ||  0;
        this.months             =   obj.months          ||  0;
        this.totalCount         =   obj.totalCount      ||  0;
        this.totalCollected     =   obj.totalCollected  ||  0;
    }

    toJson() {
        return {
            ...this
        }
    }


}

export class StatVolunteer {
    public attendedSelf         :   number;
    public unattendedSelf       :   number;
    public attendedVerified     :   number;
    public unattendedVerified   :   number;
    public hoursSelf            :   number;
    public hoursVerified        :   number;
    public joined               :   number;
    public required             :   number;
    public registered           :   number;

    constructor(obj:any = {}) {
        this.attendedSelf       =   obj.attendedSelf    ||  0;
        this.unattendedSelf     =   obj.unattendedSelf  ||  0;
        this.attendedVerified   =   obj.attendedVerified||  0;
        this.unattendedVerified =   obj.unattendedVerified||  0;
        this.hoursSelf          =   obj.hoursSelf       ||  0;
        this.hoursVerified      =   obj.hoursVerified   ||  0;
        this.joined             =   obj.joined          ||  0;
        this.required           =   obj.required        ||  0;
        this.registered         =   obj.registered      ||  0;
    }

    toJson() {
        return {
            ...this
        }
    }

}

export class StatDoc extends DocIntRef {

    public donation             :   StatDonation;
    public event                :   number;
    public follower             :   number;
    public fundraiser           :   number;
    public livesImpacted        :   number;
    public ngo                  :   number;
    public subscription         :   StatSubscription;
    public volunteer            :   StatVolunteer;

    constructor(obj:any = {}) {

        super(obj);

        this.donation           =   new StatDonation(obj.donation);
        this.event              =   obj.event           ||  0;
        this.follower           =   obj.follower        ||  0;
        this.fundraiser         =   obj.fundraiser      ||  0;
        this.livesImpacted      =   obj.livesImpacted   ||  0;
        this.ngo                =   obj.ngo             ||  0;
        this.subscription       =   new StatSubscription(obj.subscription);
        this.volunteer          =   new StatVolunteer(obj.volunteer);
    }

    public toJson() {
        return {
            ...this,
            donation            :   this.donation.toJson(),
            subscription        :   this.subscription.toJson(),
            volunteer           :   this.volunteer.toJson()
        }
    }

}

export class RazorpayResponse {
    public orderId              :   string;
    public paymentId            :   string;
    public signature            :   string;

    constructor(obj: any = {}) {
        this.orderId            =   obj.orderId         ||  '';
        this.paymentId          =   obj.paymentId       ||  '';
        this.signature          =   obj.signature       ||  '';
    }

    public toJson() {
        return {
            ...this
        };
    }
}

export class RazorpaySubscriptionResponse extends RazorpayResponse {
    public shortURL             :   string;

    constructor(obj: any = {}) {
        super(obj);

        this.shortURL           =   obj.shortURL        ||  '';
        this.signature          =   obj.signature       ||  '';
    }

    public toJson() {
        return {
            ...this
        };
    }
}

export enum Gateway {
    Lotuspay                    =   "Lotuspay",
    Razorpay                    =   "Razorpay",
    UPI                         =   "UPI"
}

export class Upi {
    public pa                   :   string;
    public pn                   :   string;

    constructor(obj:any = {}) {
        this.pa                 =   obj.pa              ||  '';
        this.pn                 =   obj.pn              ||  '';
    }

    toJson() {
        return {
            ...this
        }
    }

}


