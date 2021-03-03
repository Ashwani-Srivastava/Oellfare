import { Doc, DocRef, 
         DocIntRef, Media,
         StatDonation,
         StatSubscription,
         StatVolunteer      }   from    'common/common.model';
import { Feedback           }   from    'event/feedback/feedback.model';
import { SdgRef             }   from    'sdg/sdg.model';
import { VolunteerRef       }   from    'volunteer/volunteer.model';

export enum NgoState {
    Draft,
    GrassrootsPublished,
    SiteOnlyPublished,
    BothPublished,
    NotActive,
    Terminated,
}

export class NgoAdmin extends VolunteerRef {
    public email                :   string;
    public phone                :   string;
    public ngo                  :   NgoRef;

    constructor(obj             :   any = {}) {

        super(obj);

        this.email              =   obj.email           ||  '';
        this.phone              =   obj.phone           ||  '';
        this.ngo                =   new NgoRef(obj.ngo);

    }

}

export class NgoLegal {
    public _12ANo               :   string;
    public _80GNo               :   string;
    public fcraNo               :   string;
    public panNo                :   string;
    public regNo                :   string;

    constructor(obj: any) {

        if (!obj) {
            obj                 =   {};
        }

        this._12ANo             =   obj._12ANo          ||  '';
        this._80GNo             =   obj._80GNo          ||  '';
        this.fcraNo             =   obj.fcraNo          ||  '';
        this.panNo              =   obj.panNo           ||  '';
        this.regNo              =   obj.regNo           ||  '';
    }

    toJson() {
        return {
            ...this
        };
    }

}


export class Member extends DocRef {
    public reachOut             :   ReachOut;
    public photo                :   Media;
    public role                 :   string;
    public since                :   Date;
    public to                   :   Date;
    public hobbies              :   string;

    constructor(obj             :   any = {}) {

        super(obj);

        this.id                 =   obj.id              ||  '';
        this.reachOut           =   new ReachOut(obj.reachOut);;
        this.photo              =   new Media(obj.photo, '../../assets/images/ninja-dp.png');
        this.role               =   obj.role            ||  '';
        this.since              =   Doc.parseDate(obj.since);
        this.to                 =   Doc.parseDate(obj.to);
        this.hobbies            =   obj.hobbies         ||  '';

    }

    toJson() {
        return {
            ...this,
            photo               :   this.photo.toJson(),
            reachOut            :   this.reachOut.toJson()
        }
    }

}

export class NgoRef extends DocRef {
    public logo                 :   Media;
    public slug                 :   string;

    constructor(obj             :   any = {} ) {
        super(obj);

        this.logo               =   new Media(obj.logo);
        this.slug               =   obj.slug ? obj.slug: this.name.replace(/\s/g, '-').toLowerCase();
    }

    toJson() {
        return {
            ...this,
            logo                :   this.logo.toJson()
        }
    }

}

export class ActiveIn extends DocRef {
    constructor(obj             :   any = {}) {
        super(obj);
    }
}

export class MediaRecognition extends Doc {
    date                        :   Date;
    description                 :   string;
    link                        :   string;
    photo                       :   Media;
    publicationName             :   string;
    reporterName                :   string;
    video                       :   Media;

    constructor(data            :   any) {
        super(data);
        this.date               =   Doc.parseDate(data.date);
        this.description        =   data.description      ?  data.description        :  '';
        this.link               =   data.link             ?  data.link               :  '';
        this.photo              =   data.photo            ?  new Media(data.photo)   :  new Media({});
        this.publicationName    =   data.publicationName  ?  data.publicationName    :  '';
        this.reporterName       =   data.reporterName     ?  data.reporterName       :  '';
        this.video              =   data.video            ?  new Media(data.video)   :  new Media({});
    }

    public toJson()             :   any {
        return {
            ...this,
            photo: this.photo.toJson(),
            video: this.video.toJson()
        };
    }

}

export class Award extends Doc {
    awardedBy                   :   string;
    date                        :   Date;
    description                 :   string;
    link                        :   string;
    photo                       :   Media;
    video                       :   Media;

    constructor(data            :   any) {
        super(data);
        this.awardedBy          =   data.awardedBy ? data.awardedBy : '';
        this.date               =   data.date ? data.date : new Date();
        this.description        =   data.description ? data.description : '';
        this.link               =   data.link ? data.link : '';
        this.photo              =   data.photo ? new Media(data.photo) : new Media({});
        this.video              =   data.video ? new Media(data.video) : new Media({});
    }

    public toJson()             :    any {
        return {
            ...this,
            photo               :   this.photo.toJson(),
            video               :   this.video.toJson(),
        };
    }
}

export class Testimonial extends Doc {
    authorPhoto                 :   Media;
    date                        :   Date;
    testimonial                 :   string;
    photo                       :   Media;
    link                        :   string;

    constructor(data            :   any) {
        super(data);
        this.authorPhoto        =  data.authorPhoto ?  new Media(data.authorPhoto)  :  new Media({});
        this.date               =  data.date        ?  data.date                    :  '';
        this.testimonial        =  data.testimonial ?  data.testimonial             :  '';
        this.photo              =  data.photo       ?  new Media(data.photo)        :  new Media({});
        this.link               =  data.link        ?  data.link                    :  '';
    }

    public toJson()             :  any {
        return {
            ...this,
            authorPhoto         :  this.authorPhoto.toJson(),
            photo               :  this.photo.toJson()
        };
    }
}

export class Aggregate {
    public follower             :   number;
    public event                :   number;
    public fundraiser           :   number;
    public upcomingEvent        :   number;
    public review               :   number;
    public avgRating            :   number;
    public admin                :   number;
    public award                :   number;
    public mediaRecognition     :   number;
    public photo                :   number;
    public project              :   number;
    public testimonial          :   number;
    public donation             :   StatDonation;
    public subscription         :   StatSubscription;
    public volunteer            :   StatVolunteer;

    constructor(obj: any = {}) {
        this.donation           =   new StatDonation(obj.donation);
        this.follower           =   obj.follower        ||  0;
        this.event              =   obj.event           ||  0;
        this.fundraiser         =   obj.fundraiser      ||  0;
        this.upcomingEvent      =   obj.upcomingEvent   ||  0;
        this.review             =   obj.review          ||  0;
        this.avgRating          =   obj.avgRating       ||  0;
        this.admin              =   obj.admin           ||  0;
        this.award              =   obj.award           ||  0;
        this.mediaRecognition   =   obj.mediaRecognitions|| 0;
        this.photo              =   obj.photo           ||  0;
        this.project            =   obj.project         ||  0;
        this.testimonial        =   obj.testimonial     ||  0;
        this.subscription       =   new StatSubscription(obj.subscription);
        this.volunteer          =   new StatVolunteer(obj.volunteer);
    }


    toJson() {
        return {
            ...this,
            donation            :   this.donation.toJson(),
            subscription        :   this.subscription.toJson(),
            volunteer           :   this.volunteer.toJson()
        }
    }
}

export class LegalSub {
    public date                 :   Date;
    public photos               :   Media[];
    public regNo                :   string;

    constructor(obj: any = {}) {
        this.date               =   Doc.parseDate(obj.date);
        this.photos             =   Doc.parseArray(obj.photos, Media);
        this.regNo              =   obj.regNo           ||  '';
    }

    toJson() {
        return {
            ...this,
            photos              :   this.photos.map(p => p.toJson())
        }
    }
}

export class LegalBank {
    public accountNo            :   string;
    public ifscCode             :   string;
    public bankName             :   string;
    public accountName          :   string;

    constructor(obj: any = {}) {
        this.accountNo          =   obj.accountNo       ||  '';
        this.ifscCode           =   obj.ifscCode        ||  '';
        this.bankName           =   obj.bankName        ||  '';
        this.accountName        =   obj.accountName     ||  '';
    }

    toJson() {
        return {
            ...this,
        }
    }
}

export class Legal {
    public _12a                 :   LegalSub;
    public _80g                 :   LegalSub;
    public bank                 :   LegalBank;

    constructor(obj: any = {}) {
        this._12a               =   new LegalSub(obj._12a);
        this._80g               =   new LegalSub(obj._80g);
        this.bank               =   new LegalBank(obj.bank);
    }

    toJson() {
        return {
            _12a                :   this._12a.toJson(),
            _80g                :   this._80g.toJson(),
            bank                :   this.bank.toJson()
        }
    }

}

export class ReachOut {
    public email                :   string;
    public facebook             :   string;
    public instagram            :   string;
    public linkedin             :   string;
    public phone1               :   string;
    public phone2               :   string;
    public twitter              :   string;
    public website              :   string;
    public youtube              :   string;

    constructor(obj: any = {}) {
        this.email              =   obj.email           ||  '';
        this.facebook           =   obj.facebook        ||  '';
        this.instagram          =   obj.instagram       ||  '';
        this.linkedin           =   obj.linkedin        ||  '';
        this.phone1             =   obj.phone1          ||  '';
        this.phone2             =   obj.phone2          ||  '';
        this.twitter            =   obj.twitter         ||  '';
        this.website            =   obj.website         ||  '';
        this.youtube            =   obj.youtube         ||  '';
    }

    toJson() {
        return {
            ...this
        }
    }

}

export class Project extends Doc {
    description                 :   string;
    link                        :   string;
    photo                       :   Media;
    parent                      :   string;
    slug                        :   string;
    date                        :   Date;

    constructor(data            :   any) {
        super(data);
        this.description        =   data.description ? data.description : '';
        this.link               =   data.link ? data.link : '';
        this.photo              =   data.photo ? data.photo : '';
        this.parent             =   data.parent ? data.parent : null;
        this.slug               =   data.slug ? data.slug : '';
        this.date               =   data.date ? data.date : '';
    }

    public toJson()             :   any {
        return {
            ...this
        };
    }

}

export class ProjectRef extends DocRef {
    constructor(data            :   any) {
        super(data);
    }

    public toJson() {
        return {
            ...this
        };
    }
}

export class NgoMeta extends DocRef {
    public causes               :   string[];
    public logo                 :   Media;
    public slug                 :   string;
    public priority             :   number;
    public sdg                  :   SdgRef[];

    public state                :   DocIntRef;
    public district             :   DocIntRef;
    public oid                  :   string;

    public aggregate            :   Aggregate;
    public status               :   NgoState;

    constructor(obj             :   any = {}) {
        super(obj);

        this.causes             =   obj.causes          ||  [];
        this.logo               =   new Media(obj.logo);
        this.slug               =   obj.slug            ||  '';
        this.priority           =   obj.priority        ||  0;
        this.sdg                =   Doc.parseArray(obj.sdg, SdgRef);

        this.state              =   obj.state ? new DocIntRef(obj.state) : new DocIntRef({id: 31, name: 'Tamil Nadu'});
        this.district           =   obj.district ? new DocIntRef(obj.district) : new DocIntRef({id: 3100, name: 'Chennai'});

        this.oid                =   obj.oid             ||  '';

        this.causes             =   this.causes.map(c => c.trim());


        this.aggregate          =   new Aggregate(obj.aggregate);
        this.status             =   obj.status          ||  NgoState.Draft;
    }

    public toJson() {
        return {
            ...super.toJson(),
            causes              :   this.causes,
            logo                :   this.logo.toJson(),
            sdg                 :   this.sdg.map((sd: SdgRef) => sd.toJson()),
            slug                :   this.slug,
            priority            :   this.priority,
            state               :   this.state.toJson(),
            district            :   this.district.toJson(),

            oid                 :   this.oid,
            aggregate           :   this.aggregate.toJson(),

        };
    }

}

export class NgoMetaAggregate {
    public avgRating            :   number;
    public volunteer            :   StatVolunteer;

    constructor(obj             :   any = {}) {
        this.avgRating          =   obj.avgRating       ||  0;
        this.volunteer          =   obj.volunteer ? new StatVolunteer(obj.volunteer) : new StatVolunteer({});
    }

    public toJson() {
        return {
            ...this,
            volunteer           :   this.volunteer.toJson(),
        };
    }
}

export class Ngo extends Doc {

    public activeIn             :   ActiveIn[];
    public activities           :   string[];
    public address              :   string;
    public admin                :   NgoAdmin[];
    public aggregate            :   Aggregate;
    public awards               :   Array<any>;
    public causes               :   string[];
    public description          :   string;
    public fullUrl              :   string;
    //public reviews              :   Array<any>;
    public legal                :   NgoLegal;
    public logo                 :   Media;
    public media                :   MediaRecognition[];
    public mission              :   string[];
    public photos               :   string[];
    public priority             :   number;
    public projects             :   Project[];
    public reachOut             :   ReachOut;
    public review               :   Feedback[];
    public sdg                  :   SdgRef[];
    public shortUrl             :   string;
    public slug                 :   string;
    public team                 :   Member[];
    public video                :   Media;
    public vision               :   string;
    public workingHours         :   string;
    public oid                  :   string;

    public state                :   DocIntRef;
    public district             :   DocIntRef;

    public testimonial          :   Array<any>;

    public whyVolunteerHere     :   Array<{ [key:string]: string }>;
    public whyHelpMatters       :   Array<{ [key:string]: string }>;

    public impactPrimitive      :   {[key: string]: string};

    public status               :   NgoState;

    constructor(obj             :   any = {}) {

        super(obj);

        this.activeIn           =   Doc.parseArray(obj.activeIn, ActiveIn);
        this.activities         =   obj.activities      ||  [];
        this.address            =   obj.address         ||  '';
        this.admin              =   Doc.parseArray(obj.admin, NgoAdmin);
        this.aggregate          =   new Aggregate(obj.aggregate);
        this.awards             =   Doc.parseArray(obj.awards, Award);
        this.causes             =   obj.causes          ||  []
        this.description        =   obj.description     ||  '';
        this.fullUrl            =   obj.fullUrl         ||  '';
        //TODO:
        this.legal              =   new NgoLegal(obj.legal);
        this.logo               =   new Media(obj.logo);
        this.media              =   Doc.parseArray(obj.media, MediaRecognition);
        this.mission            =   obj.mission         ||  [];
        this.photos             =   obj.photos          ||  [];
        this.priority           =   obj.priority        ||  100;;
        // TODO: Data Fix: Rename to project
        //this.project            =   obj.projects && obj.projects.length > 0 ? Doc.parseArray(obj.projects[0].list, Project) : [];
        this.projects           =   Doc.parseArray(obj.projects, Project);
        this.reachOut           =   new ReachOut(obj.reachOut);
        this.review             =   Doc.parseArray(obj.review, Feedback);
        this.sdg                =   Doc.parseArray(obj.sdg, SdgRef);
        this.shortUrl           =   obj.shortUrl        ||  '';
        this.slug               =   obj.slug            ||  '';
        this.team               =   Doc.parseArray(obj.team, Member);
        this.testimonial        =   Doc.parseArray(obj.testimonial, Testimonial);
        this.video              =   new Media(obj.video);
        this.vision             =   obj.vision          ||  '';
        this.workingHours       =   obj.workingTime     ||  '';

        this.state              =   obj.state ? new DocIntRef(obj.state) : new DocIntRef({id: 31, name: 'Tamil Nadu'});
        this.district           =   obj.district ? new DocIntRef(obj.district) : new DocIntRef({id: 3100, name: 'Chennai'});

        this.whyVolunteerHere   =   obj.whyVolunteerHere||  [{
            icon: 'heart-circle-outline',
            text: 'This is the best NGO',
        }, {
            icon: 'heart-circle-outline',
            text: 'You can get certifications and lot of recognitions',
        }, {
            icon: 'heart-circle-outline',
            text: 'Really great volunteers who can help in getting your career ahead of everything',
        }];

        this.whyHelpMatters     =   obj.whyHelpMatters||  [{
            icon: 'heart-circle-outline',
            text: 'Your help means a lot',
        }, {
            icon: 'heart-circle-outline',
            text: 'You are indirectly saving lives of many',
        }, {
            icon: 'heart-circle-outline',
            text: 'Awareness is the most important thing and you are being a part of more than revolution',
        }];

        this.status             =   obj.status          ||  NgoState.Draft;
        this.oid                =   obj.oid             ||  '';

        this.impactPrimitive    =   obj.impactPrimitive ||  {};
    }

    public toJson() {
        return {
            ...this,
            activeIn            :   this.activeIn.map((acIn: ActiveIn) => acIn.toJson()),
            aggregate           :   this.aggregate.toJson(),
            awards              :   this.awards.map((award: Award) => award.toJson()),
            logo                :   this.logo.toJson(),
            media               :   this.media.map((medium: MediaRecognition) => medium.toJson()),
            projects            :   this.projects.map((project: Project) => project.toJson()),
            reachOut            :   this.reachOut.toJson(),
            review              :   this.review.map(r => r.toJson()),
            sdg                 :   this.sdg.map((sd: SdgRef) => sd.toJson()),
            team                :   this.team.map((member: Member) => member.toJson()),
            testimonials        :   this.testimonial.map((testimonial: Testimonial) => testimonial.toJson()),
            state               :   this.state.toJson(),
            district            :   this.district.toJson()
        };
    }

}


export enum NGOReportStatus {
    Reported,
    Resolved
}

export class NgoReport extends Doc{
    public volunteer            :   VolunteerRef;
    public ngo                  :   NgoRef;
    public comment              :   string;
    public status               :   NGOReportStatus;
    public selected             :   string;

    constructor(data) {
        super(data)
        this.volunteer          =   data.volunteer  ? new VolunteerRef(data.volunteer)  : new VolunteerRef({});
        this.ngo                =   data.ngo        ? new NgoRef(data.ngo)              : new NgoRef({});
        this.comment            =   data.comment    ? data.comment                      : '';
        this.status             =   data.status     ? data.status                       : NGOReportStatus.Reported;
        this.selected           =   data.selected   ? data.selected                     : '';
    }

    public toJson() {
        return {
            ...this,
            volunteer: this.volunteer.toJson(),
            ngo:    this.ngo.toJson()
        };
    }
}
