import { Doc, DocRef, Media,
         StatSubscription   }   from    'common/common.model';
import { DistrictRef,
         State              }   from    'location/location.model';

export enum LpAuthMode {
    netbanking                  =   'netbanking',
    debitcard                   =   'debitcard'
}

export enum LpAccountType {
    savings                     =   'savings',
    current                     =   'current'
}

export class VolunteerAggregate {
    public hoursPerWeek         :   number;
    public review               :   number;
    public subscription         :   StatSubscription;

    constructor(obj: any = {}) {

        if (!obj) {
            obj                 =   {};
        }

        this.hoursPerWeek       =   obj.hoursPerWeek    ||  '';
        this.review             =   obj.review          ||  '';
        this.subscription       =   new StatSubscription(obj.subscription);
    }

    toJson() {
        return {
            ...this,
            subscription        :   this.subscription.toJson()
        }
    }


}

export class VolunteerResidence {

    public address              :   string;
    public town                 :   string;
    public district             :   string;
    public state                :   string;
    public country              :   string;
    public pinCode              :   string;

    constructor(obj: any = {}) {

        if (!obj) {
            obj                 =   {};
        }

        this.address            =   obj.address         ||  '';
        this.town               =   obj.town            ||  '';
        this.district           =   obj.district        ||  '';
        this.state              =   obj.state           ||  '';
        this.country            =   obj.country         ||  '';
        this.pinCode            =   obj.pinCode         ||  '';
    }

    toJson() {
        return {
            ...this,
        }
    }

}


export class VolunteerBank {

    public bankName             :   string;
    public lpAccountNo          :   string;
    public lpAccountType        :   LpAccountType;
    public lpAuthMode           :   LpAuthMode;
    public lpBankCode           :   string;
    public name                 :   string;

    constructor(obj: any = {}) {

        if (!obj) {
            obj                 =   {};
        }

        this.bankName           =   obj.bankName        ||  '';
        this.lpAccountNo        =   obj.lpAccountNo     ||  '';
        this.lpAccountType      =   obj.lpAccountType   ||  LpAccountType.savings;
        this.lpAuthMode         =   obj.lpAuthMode      ||  LpAuthMode.netbanking
        this.lpBankCode         =   obj.lpBankCode      ||  '';
        this.name               =   obj.name            ||  '';
    }

    toJson() {
        return {
            ...this,
        }
    }

}

export class VolunteerRef extends DocRef {
    public photo                :   Media;

    constructor(obj: any = {}) {
        super(obj);

        if (!obj) {
            obj                 =   {};
        }

        this.photo              =   new Media(obj.photo);
    }

    toJson() {
        return {
            ...this,
            photo               :   this.photo.toJson()
        }
    }

}

export class VolunteerNgo extends VolunteerRef {

    public email                :   string;
    public phone                :   string;

    constructor(obj: any = {}) {
        super(obj);

        this.email              =   obj.email           ||  '';
        this.phone              =   obj.phone           ||  '';
    }

    toJson() {
        return {
            ...this,
            ...super.toJson(),
        }
    }

}

export class Volunteer extends Doc {

    public address              :   string;
    public aggregate            :   VolunteerAggregate;
    public dob                  :   Date;
    public district             :   DistrictRef;
    public photo                :   Media;
    public email                :   string;
    public phone                :   string;
    public provider             :   string;
    public bank                 :   VolunteerBank[];
    public residence            :   VolunteerResidence;
    public state                :   State;

    constructor(obj: any = {}) {

        if (!obj) { obj = {}; }
        super(obj);

        this.address            =   obj.address         ||  '';
        this.aggregate          =   new VolunteerAggregate(obj.aggregate || {});
        this.bank               =   Doc.parseArray(obj.bank, VolunteerBank);
        this.dob                =   Doc.parseDate(obj.dob || new Date('1900'));
        this.district           =   new DistrictRef(obj.district);
        this.photo              =   new Media(obj.photo);
        this.email              =   obj.email           ||  '';
        this.phone              =   obj.phone           ||  '';
        this.provider           =   obj.provider        ||  '';
        this.residence          =   new VolunteerResidence(obj.residence || {});
        this.state              =   new State(obj.state);

        if (this.bank.length === 0) {
            this.bank.push(new VolunteerBank({}));
        }

    }

    toJson() {
        return {
            ...this,
            aggregate           :   this.aggregate.toJson(),
            bank                :   this.bank.map(b => b.toJson()),
            district            :   this.district.toJson(),
            photo               :   this.photo.toJson(),
            residence           :   this.residence.toJson(),
            state               :   this.state.toJson()
        }
    }

}

