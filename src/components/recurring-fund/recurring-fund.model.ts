import { Doc, Media, DocRef, 
         StatSubscription   }   from    'common/common.model';
import { NgoAdmin, NgoRef   }   from    'ngo/ngo.model';
import { State, DistrictRef,
         BlockRef           }   from    'location/location.model';
import { CauseRef           }   from    'cause/cause.model';
import { ProjectRef         }   from    'ngo/ngo.model';


export enum RecurringFundTerm {
    Monthly,
    Quarterly,
    HalfYearly,
    Yearly,
}

export enum RecurringFundStatus {
    Draft,
    Published,
    Completed
}

export class RecurringFundAggregate {
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

export class SubscriptionSlot {
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

export class RecurringFund extends Doc {
    public state                :   State;
    public district             :   DistrictRef;
    public block                :   BlockRef;
    public cause                :   CauseRef;
    public ngo                  :   NgoRef;

    public aboutNgo             :   string;
    public aboutProject         :   string;
    public aggregate            :   RecurringFundAggregate;
    public commission           :   number;
    public coordinators         :   NgoAdmin[];
    public coverPhoto           :   Media[];
    public customDonationAllowed:   boolean;
    public customDonationMax    :   number;
    public customDonationMin    :   number;
    public donationBtnText      :   string;
    public duration             :   number;
    public endDate              :   Date;
    public fullUrl              :   string;
    public project              :   ProjectRef;
    public recentUpdate         :   RecurringFundUpdate[];
    public shortCode            :   string;
    public shortUrl             :   string;
    public slug                 :   string;
    public startDate            :   Date;
    public status               :   RecurringFundStatus
    public subscription         :   StatSubscription;
    public subscriptionSlot     :   SubscriptionSlot[];
    public term                 :   RecurringFundTerm;
    public video                :   Media;


    constructor(data) {
        super(data);
        this.state              =   new State(data.state);
        this.district           =   new DistrictRef(data.district);
        this.block              =   new BlockRef(data.block);
        this.cause              =   new CauseRef(data.cause);
        this.ngo                =   new NgoRef(data.ngo);

        this.aboutNgo           =   data.aboutNgo       ?   data.aboutNgo       :   '';
        this.aboutProject       =   data.aboutProject   ?   data.aboutProject   :   '';
        this.aggregate          =   new RecurringFundAggregate(data.aggregate);
        this.commission         =   data.commission     ?   data.commission     :   5;
        this.coordinators       =   data.coordinators   ?   data.coordinators.map((coordinator: NgoAdmin) => new NgoAdmin(coordinator)) : [];
        this.coverPhoto         =   data.coverPhoto     ?   data.coverPhoto.map((photo: Media) => new Media(photo)) : [];
        this.customDonationAllowed= data.customDonationAllowed     ?   data.customDonationAllowed     :   false;
        this.customDonationMin  =   data.customDonationMin? data.customDonationMin: 200;
        this.customDonationMax  =   data.customDonationMax? data.customDonationMax: 10000;
        this.donationBtnText    =   data.donationBtnText? data.donationBtnText  :   'Donate here';
        this.duration           =   data.duration       ?   data.duration       :   5;
        this.endDate            =   Doc.parseDate(data.endDate);
        this.fullUrl            =   data.fullUrl        ?   data.fullUrl        :   '';
        this.project            =   data.project        ?   new ProjectRef(data.project)    :   null;
        this.recentUpdate       =   data.recentUpdate   ?   data.recentUpdate.map((ru: RecurringFundUpdate) => new RecurringFundUpdate(ru)) : [];
        this.shortCode          =   data.shortCode      ?   data.shortCode      :   '';
        this.shortUrl           =   data.shortUrl       ?   data.shortUrl       :   '';
        this.slug               =   data.slug           ?   data.slug           :   data.name ? data.name.replace(/\s/g, '-').toLowerCase() : '';
        this.startDate          =   Doc.parseDate(data.startDate);
        this.status             =   data.status         ?   data.status         :   RecurringFundStatus.Draft;
        this.subscription       =   new StatSubscription(data.subscription);
        this.subscriptionSlot   =   Doc.parseArray(data.subscriptionSlot, SubscriptionSlot);
        this.term               =   data.term           ?   data.term           :   RecurringFundTerm.Monthly;
        this.video              =   new Media(data.video);
    }

    public toJson() {
        return {
            ...this,
            state               :   this.state.toJson(),
            district            :   this.district.toJson(),
            block               :   this.block.toJson(),
            cause               :   this.cause.toJson(),
            ngo                 :   this.ngo.toJson(),

            aggregate           :   this.aggregate.toJson(),
            coordinators        :   this.coordinators.map(coordinator => coordinator.toJson()),
            coverPhoto          :   this.coverPhoto.map(cover => cover.toJson()),
            project             :   this.project.toJson(),
            recentUpdate        :   this.recentUpdate.map(ru => ru.toJson()),
            subscription        :   this.subscription.toJson(),
            subscriptionSlot    :   this.subscriptionSlot.map(s => s.toJson()),
            video               :   this.video.toJson(),
        };
    }
}

export class RecurringFundRef extends DocRef {
    public slug                 :    string;

    constructor(data: any = {}) {
        super(data);
        this.slug               =    data.slug ? data.slug  :    '';
    }

    public toJson() {
        return {
            ...this
        };
    }
}

export class RecurringFundUpdate extends Doc {

    public title               :    string;
    public date                :    Date;
    public shouldMail          :    boolean;

    constructor(data) {
        super(data);

        this.title              =   data.title          ||  '';
        this.date               =   Doc.parseDate(data.date);
        this.shouldMail         =   data.shouldMail     ||  false;
    }

    public toJson() {
        return {
            ...this
        };
    }
}

export class RecurringFundMeta extends Doc {
    public state                :    State;
    public district             :    DistrictRef;
    public block                :    BlockRef;
    public cause                :    CauseRef;
    public ngo                  :    NgoRef;

    public coverPhoto           :    Media[];
    public subscription         :    StatSubscription;
    public startDate            :    Date;
    public endDate              :    Date;

    constructor(data) {

        super(data);

        this.state              =    new State(data.state);
        this.district           =    new DistrictRef(data.district);
        this.block              =    new BlockRef(data.block);
        this.cause              =    new CauseRef(data.cause);
        this.ngo                =    new NgoRef(data.ngo);

        this.coverPhoto         =    data.coverPhoto    ?   data.coverPhoto.map((photo: Media) => new Media(photo)) : [];
        this.subscription       =    new StatSubscription(data.subscription);
        this.startDate          =    Doc.parseDate(data.startDate);
        this.endDate            =    Doc.parseDate(data.endDate);
    }

    public toJson() {
        return {
            ...this,
            state               :    this.state.toJson(),
            district            :    this.district.toJson(),
            block               :    this.block.toJson(),
            cause               :    this.cause.toJson(),
            ngo                 :    this.ngo.toJson(),
            coverPhoto          :    this.coverPhoto.map(cover => cover.toJson()),
            subscription        :    this.subscription.toJson(),
        };
    }
}

