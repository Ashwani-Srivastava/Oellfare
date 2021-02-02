//import { Observable,
//         throwError         }   from    'rxjs';

//import { catchError, first,
//         map                }   from    'rxjs/operators';

import { AuthService        }   from    'auth/auth.service';
//import { ConfigService      }   from    'common/config.service';
import { EnvironmentService }   from    'common/environment.service';
import { FirestoreService   }   from    'common/firestore.service';
import { Gateway            }   from    'common/common.model';
import { Fundraiser,
         FundraiserRef      }   from    'fundraiser/fundraiser.model';
//import { RecurringFund, 
//RecurringFundRef   }   from    'recurring-fund/recurring-fund.model';
import { Payment,
         PaymentState,
         PaymentType        }   from    'payment/payment.model';
//import { Logger             }   from    'common/logger';
import { Ngo                }   from    'ngo/ngo.model';
//import { Subscription,
//SubscriptionState  }   from    'recurring-fund/subscription/subscription.model';
import { Volunteer, 
         VolunteerRef       }   from    'volunteer/volunteer.model';

declare var Razorpay:any;

export class PaymentServiceController {

    constructor() {
    }

    /*----------------------------------------------------------*/
    /*------------------------ Listing -------------------------*/
    /*----------------------------------------------------------*/

    /*----------------------------------------------------------*/
    /*---------------------- UPI Payment -----------------------*/
    /*----------------------------------------------------------*/

    public async createUPIPayment(fund: Fundraiser, volunteer: Volunteer, amount: number, referrer: string, isAnonymous: boolean, donorComment: string): Promise<Payment> {
        const pid               =   FirestoreService.generateId('Payment');
        const payment: Payment = new Payment({
            id                  :   pid,
            block               :   fund.block,
            cause               :   fund.block,
            district            :   fund.district,
            ngo                 :   fund.ngo,
            sdg                 :   fund.sdg,
            state               :   fund.state,

            donor               :   new VolunteerRef(volunteer),
            fundraiser          :   new FundraiserRef(fund),

            amount              :   amount,
            chargeDate          :   new Date(),
            donorComments       :   donorComment,
            gateway             :   {
                name            :   Gateway.UPI
            },
            isAnonymous         :   isAnonymous,
            referrer            :   referrer,
            status              :   PaymentState.Pending,
            towards             :   fund.name,
            type                :   PaymentType.UPI
        });
        return FirestoreService.addDocument('Payment', pid, payment.toJson());
    }

        /*
    public async initiateRpSubscription(fund: RecurringFund, volunteer: Volunteer, amount: number, isAnonymous: boolean, donorComment: string): Promise<Subscription> {
        let planId              =   'monthly' + amount.toString();
        planId                  =   ConfigService.razorpayPlanId[planId];
        const subId             =   FirestoreService.getRandomIDInCollection('Subscription');

        const sub: Subscription =   new Subscription({
            amount              :   amount,
            comment             :   donorComment,
            donor               :   new VolunteerRef(volunteer),
            fund                :   new RecurringFundRef(fund),
            isAnonymous         :   isAnonymous,
            ngo                 :   fund.ngo,
            createdBy           :   AuthService.me.id,
            updatedBy           :   AuthService.me.id,
            id                  :   subId,
            gateway             :   {
                name            :   Gateway.Razorpay,
                razorpay        :   {
                    planId      :   planId
                }
            }
        });

        await FirestoreService.addDocument('Subscription', subId, sub.toJson());

        await new Promise(resolve => setTimeout(resolve, 10000));

        const fullURL           =   this.getRpSubscriptionURL(sub);
        const subResponse: any  =   await fetch(fullURL);
        const subObject         =   await subResponse.json();
        console.log('cf response: ', subObject);
        // TODO:
        await new Promise(resolve => setTimeout(resolve, 1000));

        const finalSub: Subscription=   await FirestoreService.fetchSingleDocument('Subscription', sub.id, Subscription).pipe(first()).toPromise();
        return finalSub;

    }

    public async showRazorpayForSubscription(_subscription: Subscription): Promise<Subscription> {
        console.log('SUB: ', subscription);
        return new Promise((resolve, reject) => {
            const options       =   {
                "key"           :   ConfigService.razorpayKey[ConfigService.build], // Enter the Key ID generated from the Dashboard
                "subscription_id":  subscription.razorpay.paymentId,
                "name"          :   subscription.ngo.name,
                "description"   :   subscription.fund.name,
                "handler"       :   async (response) => {
                    console.log('razor response: ', response);
                    subscription.razorpay.paymentId     =   response.razorpay_payment_id;
                    subscription.razorpay.signature     =   response.razorpay_signature;
                    subscription.setAuthenticated();

                    await FirestoreService.updateDocument('Subscription', subscription.id, subscription.toJson());
                    resolve(subscription);
                },
                "modal": {
                    "ondismiss": async () => {
                        subscription.setCancelled();
                        const payload = {
                            status  : subscription.status
                        };
                        await FirestoreService.updateDocument('Subscription', subscription.id, payload);
                        reject('Checkout form closed');
                    }
                },
                "prefill": {
                    "name"      :   subscription.donor.name,
                    "email"     :   AuthService.me.email,
                    "contact"   :   AuthService.me.phone
                },
                "theme": {
                    "color"     :   "#F37254"
                }
            };
            var rzp1            =   new Razorpay(options);
            rzp1.open();
        });
        return new Subscription();
    }

    private getRpSubscriptionURL(subscription: Subscription): string {
        const baseURL           =   ConfigService.baseCFURL[ConfigService.build];
        return `${baseURL}/createRPSource?amount=${subscription.amount}&volunteerId=${subscription.donor.id}&recurringFundId=${subscription.fund.id}&subscriptionId=${subscription.id}&planId=${subscription.gateway.razorpay.planId}`;
    }
    
    public saveSubscription(subscription: any) {
        return FirestoreService.pushDocument('Subscription', subscription);
    }
    
    public updateSubscription(id: string, payload: any) {
        return FirestoreService.updateDocument('Subscription', id, payload);
    }
         */

    public async initiateDonation(fund: Fundraiser, ngo: Ngo, volunteer: Volunteer, amount: number, referrer: string, isAnonymous: boolean, comments: string): Promise<Payment> {
        let payment: Payment    =   Payment.constructForFundraiser(fund, ngo, volunteer, amount, referrer, isAnonymous, comments);

        debugger;
        payment.id              =   FirestoreService.generateId('Payment');
        await FirestoreService.addDocument('Payment', payment.id, payment.toJson());

        const fullURL           =   this.getDonationURL(payment);
        const orderResponse:any =   await fetch(fullURL);
        const orderObject       =   await orderResponse.json();
        console.log('Server response: ', orderObject);

        //payment                 =   await FirestoreService.fetchSingleDocument('Payment', payment.id, 'Payment').pipe(first()).toPromise();

        if (!orderResponse.ok) {
            console.log("Razorpay API Error: ", orderResponse);
            return null;
        } else {
            return orderObject;
        }

    }

    public async showRazorpay(pay: Payment): Promise<Payment> {
        return new Promise((resolve, reject) => {
            const options       =   {
                "key"           :   EnvironmentService.config.razorpay.key, // Enter the Key ID generated from the Dashboard
                "amount"        :   pay.amount * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                "currency"      :   "INR",
                "name"          :   pay.ngo.name,
                "description"   :   'via Grassroots',
                "image"         :   pay.ngo.logo.url,
                "order_id"      :   pay.gateway.razorpay.orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                "handler"       :   async (response) => {
                    console.log('razor response: ', response);
                    pay.gateway.razorpay.paymentId         =   response.razorpay_payment_id;
                    //TODO:
                    //pay.gateway.razorpay.signature         =   response.razorpay_signature;
                    pay.status  =   PaymentState.Pending;

                    const fullURL           =   this.getPaidURL(pay);
                    const orderResponse:any =   await fetch(fullURL);
                    const orderObject       =   await orderResponse.json();

                    if (!orderResponse.ok) {
                        console.log("Razorpay API Error: ", orderResponse);
                        reject(orderObject);
                    } else {
                        resolve(orderObject);
                    }

                },
                "prefill": {
                    "name"      :   AuthService.me.name,
                    "email"     :   AuthService.me.email,
                    "contact"   :   AuthService.me.phone
                },
                "notes": {
                    "paymentId" :   pay.id
                },
                "theme": {
                    "color"     :   "#68BC36"
                }
            };
            var rzp1            =   new Razorpay(options);
            rzp1.open();
        });
    }

    private getDonationURL(pay: Payment): string {
        debugger
        const baseURL           =   EnvironmentService.config.baseCFUrl;
        return `${baseURL}/createRPOrder?amount=${pay.amount}&paymentId=${pay.id}`
    }

    private getPaidURL(pay: Payment): string {
        const baseURL           =   EnvironmentService.config.baseCFUrl;
        return `${baseURL}/paidRPOrder?paymentId=${pay.id}&rzPaymentId=${pay.gateway.razorpay.paymentId}`
    }

}

export const PaymentService = new PaymentServiceController();
