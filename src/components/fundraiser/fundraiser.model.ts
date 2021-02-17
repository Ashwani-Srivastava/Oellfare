
import { Doc, Media, DocRef, 
         StatDonation, Upi  }   from    'common/common.model';
import { NgoAdmin, NgoRef,
         ProjectRef         }   from    'ngo/ngo.model';
import { StateRef, DistrictRef,
         BlockRef           }   from    'location/location.model';
import { CauseRef           }   from    'cause/cause.model';
import { SdgRef             }   from    'sdg/sdg.model';
import { FundraiserUpdate   }   from    'fundraiser/fundraiser-update.model';

export class DonationSlot {
    public amount               :   number;
    public default              :   boolean;
    public description          :   string;
    public media                :   Media;

    constructor(obj: any) {
        if (!obj) obj           =   {};
        this.amount             =   obj.amount          ||  0;
        this.default            =   obj.default         ||  false;
        this.description        =   obj.description     ||  '';
        this.media              =   new Media(obj.media);
    }

    public toJson() {
        return {
            ...this,
            media               :   this.media.toJson()
        };
    }
}


export enum FundraiserStatus {
    Draft,
    Published,
    Completed
}

export class FundraiserAggregate {
    public update               :   number;
    public fork                 :   number;

    constructor(obj: any) {
        if (!obj) obj           =   {};
        this.update             =   obj.update          ||  0;
        this.fork               =   obj.fork            ||  0;
    }

    public toJson() {
        return {
            ...this
        };
    }
}


export class Fundraiser extends Doc {
    public state                :   StateRef;
    public district             :   DistrictRef;
    public block                :   BlockRef;
    public cause                :   CauseRef;
    public sdg                  :   SdgRef;
    public ngo                  :   NgoRef;

    public aboutNgo             :   string;
    public aboutProject         :   string;
    public aggregate            :   FundraiserAggregate;
    public commission           :   number;
    public coordinators         :   NgoAdmin[];
    public coverPhoto           :   Media[];
    public donationMax          :   number;
    public donationMin          :   number;
    public donation             :   StatDonation;
    public donationSlot         :   DonationSlot[];
    public donationBtnText      :   string;
    public endDate              :   Date;
    public fullUrl              :   string;
    public project              :   ProjectRef;
    public recentUpdate         :   FundraiserUpdate[];
    public recipient            :   Upi;
    public shortUrl             :   string;
    public slug                 :   string;
    public startDate            :   Date;
    public status               :   FundraiserStatus;
    public video                :   Media;
    public isBroadcasted        :   boolean;


    constructor(data) {
        super(data);
        this.state              =   new StateRef(data.state);
        this.district           =   new DistrictRef(data.district);
        this.block              =   new BlockRef(data.block);
        this.cause              =   new CauseRef(data.cause);
        this.sdg                =   new SdgRef(data.sdg);
        this.ngo                =   new NgoRef(data.ngo);

        this.aboutNgo           =   data.aboutNgo       ||  '';
        this.aboutProject       =   data.aboutProject   ||  '';
        this.aggregate          =   new FundraiserAggregate(data.aggregate);
        this.commission         =   data.commission     ||  5;
        this.coordinators       =   Doc.parseArray(data.coordinators, NgoAdmin);
        this.coverPhoto         =   Doc.parseArray(data.coverPhoto, Media);
        this.donationMin        =   data.donationMin    ||  100;
        this.donationMax        =   data.donationMax    ||  10000;
        this.donation           =   new StatDonation(data.donation);
        this.donationSlot       =   Doc.parseArray(data.donationSlot, DonationSlot);
        this.donationBtnText    =   data.donationBtnText||  'Donate';
        this.endDate            =   Doc.parseDate(data.endDate);
        this.fullUrl            =   data.fullUrl        ||  '';
        this.project            =   new ProjectRef(data.project);
        this.recentUpdate       =   Doc.parseArray(data.recentUpdate, FundraiserUpdate);
        this.recipient          =   new Upi(data.recipient);
        this.shortUrl           =   data.shortUrl       ||  '';
        this.slug               =   data.slug           ||  (data.name          ?   data.name.replace(/\s/g, '-').toLowerCase()     :   '');
        this.startDate          =   Doc.parseDate(data.startDate);
        this.status             =   data.status         ||  FundraiserStatus.Draft;
        this.video              =   new Media(data.video);
        this.isBroadcasted      =   data.isBroadcasted  ||  false;
    }

    public toJson() {
        return {
            ...this,
            state               :   this.state.toJson(),
            district            :   this.district.toJson(),
            block               :   this.block.toJson(),
            cause               :   this.cause.toJson(),
            sdg                 :   this.sdg.toJson(),
            ngo                 :   this.ngo.toJson(),

            aggregate           :   this.aggregate.toJson(),
            coordinators        :   this.coordinators.map(o => o.toJson()),
            coverPhoto          :   this.coverPhoto.map(o => o.toJson()),
            donation            :   this.donation.toJson(),
            donationSlot        :   this.donationSlot.map(o => o.toJson()),
            project             :   this.project.toJson(),
            recentUpdate        :   this.recentUpdate.map(o => o.toJson()),
            recipient           :   this.recipient.toJson(),
            video               :   this.video.toJson(),
        };
    }
}

export class FundraiserMeta extends Doc {

    public state                :    StateRef;
    public district             :    DistrictRef;
    public block                :    BlockRef;
    public cause                :    CauseRef;
    public sdg                  :   SdgRef;
    public ngo                  :    NgoRef;

    public aggregate            :   FundraiserAggregate;
    public coverPhoto           :   Media[];
    public donation             :   StatDonation;
    public donationBtnText      :   string;
    public endDate              :   Date;
    public fullUrl              :   string;
    public slug                 :   string;
    public startDate            :   Date;
    public status               :   FundraiserStatus;
    public video                :   Media;

    constructor(data) {
        super(data);
        this.state              =   new StateRef(data.state);
        this.district           =   new DistrictRef(data.district);
        this.block              =   new BlockRef(data.block);
        this.cause              =   new CauseRef(data.cause);
        this.sdg                =   new SdgRef(data.sdg);
        this.ngo                =   new NgoRef(data.ngo);

        this.aggregate          =   new FundraiserAggregate(data.aggregate);
        this.coverPhoto         =   Doc.parseArray(data.coverPhoto, Media);
        this.donation           =   new StatDonation(data.donation);
        this.donationBtnText    =   data.donationBtnText||  'Donate';
        this.endDate            =   Doc.parseDate(data.endDate);
        this.fullUrl            =   data.fullUrl        ||  '';
        this.slug               =   data.slug           ||  (data.name          ?   data.name.replace(/\s/g, '-').toLowerCase()     :   '');
        this.startDate          =   Doc.parseDate(data.startDate);
        this.status             =   data.status         ||  FundraiserStatus.Draft;
        this.video              =   new Media(data.video);
    }

    public toJson() {
        return {
            ...this,
            state               :   this.state.toJson(),
            district            :   this.district.toJson(),
            block               :   this.block.toJson(),
            cause               :   this.cause.toJson(),
            sdg                 :   this.sdg.toJson(),
            ngo                 :   this.ngo.toJson(),

            aggregate           :   this.aggregate.toJson(),
            coverPhoto          :   this.coverPhoto.map(o => o.toJson()),
            donation            :   this.donation.toJson(),
            video               :   this.video.toJson(),
        };
    }

}

export class FundraiserRef extends DocRef {
    public slug                 :    string;

    constructor(data) {
        super(data);
        this.slug               =    data.slug          ||  '';
    }

    public toJson() {
        return {
            ...this
        };
    }
}

