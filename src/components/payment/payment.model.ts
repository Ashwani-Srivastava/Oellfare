import { Doc, DocRef, 
         Gateway            }   from    'common/common.model';
import { BlockRef,
         DistrictRef,
         StateRef           }    from   'location/location.model';
import { CauseRef           }    from   'cause/cause.model';
import { SdgRef             }    from   'sdg/sdg.model';
import { Ngo, NgoRef        }   from    'ngo/ngo.model';
import { Fundraiser, FundraiserRef      }   from    'fundraiser/fundraiser.model';
import { RecurringFundRef   }   from    'recurring-fund/recurring-fund.model';
import { Volunteer, VolunteerRef }   from    'volunteer/volunteer.model';

export enum PaymentProcessState {
    YetToProcess                =   0,
    ReceiptIDAssigned           =   10,
    MasterSheetUpdated          =   20,
    NgoSheetUpdated             =   30,
    SMSSent                     =   40,
    MailSent                    =   50,
    ErrorOut                    =   90,
    Processed                   =   100
}

export enum PaymentState {
    Created,
    Completed,
    Pending,
    Cancelled,
    Expired,
    Failed,
    RzPending,
}

export enum PaymentType {
    Grassroots,
        Cash,
        Cheque,
        Gpay,
        Neft,
        Imps,
        Rtgs,
        Other,
        ECS,
        PayUMoney,
        UPI,
        Razorpay
}

export const PaymentTypeString  :   Record<number, string> = {
    0                           :   'Grassroots',
    1                           :   'Cash',
    2                           :   'Cheque',
    3                           :   'Gpay',
    4                           :   'Neft',
    5                           :   'Imps',
    6                           :   'Rtgs',
    7                           :   'Other',
    8                           :   'ECS',
    9                           :   'PayUMoney',
    10                          :   'UPI',
}

class LotusPaymentGateway {
    public paymentId            :   string;
    public payload              :   any;

    constructor(obj             :   any                 =   {}) {
        this.paymentId          =   obj.paymentId       ||  '';
        this.payload            =   obj.payload         ||  '';
    }

    toJson() {
        return {
            ...this
        };
    }

}

class RazorPaymentGateway {
    public orderId              :   string;
    public paymentId            :   string;
    public payload              :   any;

    constructor(obj: any = {}) {
        this.orderId            =   obj.orderId         ||  '';
        this.paymentId          =   obj.paymentId       ||  '';
        this.payload            =   obj.payload         ||  '';
    }

    toJson() {
        return {
            ...this
        };
    }

}

class PaymentGateway {
    public name                 :   Gateway;
    public payUrl               :   string;
    public lotuspay             :   LotusPaymentGateway;
    public razorpay             :   RazorPaymentGateway;
    public failureReason        :   string;
    public transactionId        :   string;

    constructor(obj             :   any                 =   {}) {
        this.name               =   obj.name            ||  Gateway.Lotuspay;
        this.payUrl             =   obj.payUrl          ||  '';
        this.lotuspay           =   new LotusPaymentGateway(obj.lotuspay || {});
        this.razorpay           =   new RazorPaymentGateway(obj.razorpay || {});
        this.failureReason      =   obj.failureReason   ||  '';
        this.transactionId      =   obj.transactionId   ||  '';
    }

    toJson() {
        return {
            ...this,
            lotuspay            :   this.lotuspay.toJson(),
            razorpay            :   this.razorpay.toJson(),
        };
    }

}

export class Payment extends Doc{

    public block                :   BlockRef;
    public cause                :   CauseRef;
    public district             :   DistrictRef;
    public ngo                  :   NgoRef;
    public sdg                  :   SdgRef;
    public state                :   StateRef;

    public donor                :   VolunteerRef;
    public event                :   DocRef;
    public fundraiser           :   FundraiserRef;
    public recurringFund        :   RecurringFundRef;
    public subscriptionId       :   string;
    public settlementId         :   string;

    public processState         :   PaymentProcessState;
    public amount               :   number;
    public chargeDate           :   Date;
    public donorComments        :   string;
    public gateway              :   PaymentGateway;
    public isAnonymous          :   boolean;
    public receiptId            :   string;
    public referrer             :   string;
    public status               :   PaymentState;
    public thankNote            :   string;
    public towards              :   string;
    public type                 :   PaymentType;

    constructor(obj             :   any                 =   {}) {

        super(obj);

        this.block              =   new BlockRef(obj.block);
        this.cause              =   new CauseRef(obj.cause);
        this.district           =   new DistrictRef(obj.district);
        this.ngo                =   new NgoRef(obj.ngo);
        this.sdg                =   new SdgRef(obj.sdg);
        this.state              =   new StateRef(obj.state);

        this.donor              =   new VolunteerRef(obj.donor);
        this.event              =   new DocRef(obj.event);
        this.fundraiser         =   new FundraiserRef(obj.fundraiser);
        this.recurringFund      =   new RecurringFundRef(obj.recurringFund);
        this.subscriptionId     =   obj.subscriptionId  ||  '';
        this.settlementId       =   obj.settlementId    ||  '';

        this.processState       =   obj.processState    ||  PaymentProcessState.YetToProcess;
        this.amount             =   obj.amount          ||  0;
        this.chargeDate         =   Doc.parseDate(obj.chargeDate);
        this.donorComments      =   obj.donorComments   ||  '';
        this.gateway            =   new PaymentGateway(obj.gateway);
        this.isAnonymous        =   obj.isAnonymous     ||  false;
        this.receiptId          =   obj.receiptId       ||  '';
        this.referrer           =   obj.referrer        ||  '';
        this.status             =   obj.status          ||  PaymentState.Completed;
        this.thankNote          =   obj.thankNote       ||  '';
        this.towards            =   obj.towards         ||  '';
        this.type               =   obj.type            ||  PaymentType.Grassroots;
    }

    toJson() {
        return {
            ...this,
            block               :   this.block.toJson(),
            cause               :   this.cause.toJson(),
            district            :   this.district.toJson(),
            sdg                 :   this.sdg.toJson(),
            state               :   this.state.toJson(),
            ngo                 :   this.ngo.toJson(),

            donor               :   this.donor.toJson(),
            event               :   this.event.toJson(),
            fundraiser          :   this.fundraiser.toJson(),
            recurringFund       :   this.recurringFund.toJson(),

            gateway             :   this.gateway.toJson(),
        };
    }

    public static constructForFundraiser(fund: Fundraiser, ngo: Ngo, vol: Volunteer, amount: number, referrer: string, isAnonymous: boolean, comments: string): Payment {

        return new Payment({
            cause               :   ngo.causes[0],
            district            :   ngo.district,
            sdg                 :   ngo.sdg,
            state               :   ngo.state,
            ngo                 :   ngo,

            donor               :   vol,
            fundraiser          :   fund,
            amount              :   amount,
            donorComments       :   comments,
            gateway             :   {
                name            :   'Razorpay'
            },
            isAnonymous         :   isAnonymous,
            referrer            :   referrer,
            status              :   PaymentState.Created,
            towards             :   fund.name,
            type                :   PaymentType.Razorpay,

        });
    }

}

export class PaymentMeta extends DocRef {

    public amount               :   number;
    public status               :   string;

    constructor(obj             :   any                 =   {}) {
        super(obj);
        this.amount             =   obj.amount          ||  0;
        this.status             =   obj.status          ||  PaymentState.Created;
    }

    toJson() {
        return {
            ...this
        };
    }

}
