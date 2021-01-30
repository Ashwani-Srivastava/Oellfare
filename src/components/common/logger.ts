import { ConfigService      }   from    'common/config.service';
import UAParser                 from    'ua-parser-js';

declare var window: any;
declare var LE: any;
declare var firebase: any;

export class LogServiceController {

    public deviceName           :   string;
    public LE                   :   any                 =   null;

    constructor() {

        if (['prod', 'live'].includes(ConfigService.build)) {
            const token         =   ConfigService.logEntriesToken[ConfigService.build];
            this.loadLogEntries(token);
        }

        const parser            =   UAParser();
        const browserObject     =   parser.browser;
        const osObject          =   parser.os;
        this.deviceName         =   browserObject.name + " " + 
            browserObject.version + " :: " + 
            osObject.name + "-" + 
            osObject.version;
        console.log(this.deviceName);


    }

    private loadLogEntries(token: string): void {
        const script = document.createElement('script');
        script.src = '/assets/lib/le.min.js';
        script.onload = () => {
            Logger.log('loaded LE.js');
            LE.init(token);
            this.LE             =   LE;
        };
        document.head.appendChild(script);
    }

    public info(logMessage:string, logObject?): void {
        this.handleLog(this.LE ? this.LE.info : null, logMessage, null, logObject);
    }

    public log(logMessage:string, logObject?): void {
        this.handleLog(this.LE ? this.LE.log : null, logMessage, null, logObject);
    }

    public error(logMessage:string, errorObject, dataObject?): void {
        this.handleLog(this.LE ? this.LE.error : null, logMessage, errorObject, dataObject);
    }
	
    private handleLog(logFunc, logMessage:string, errorObject?, logObject?) {

        let userName            =   localStorage.getItem('username');
        let userId              =   localStorage.getItem('userid');

        let errMessage;
        if (errorObject && errorObject.message) {
            errMessage          =   errorObject.message;
        } else if (errorObject) {
            errMessage          =   JSON.stringify(errorObject);
        } else {
            errMessage          =   '';
        } 


        if (['dev-local', 'dev', 'staging', 'prod', 'live'].includes(ConfigService.build) && userName && userName.length > 0 && logFunc) {

            logObject           =   logObject || {};
            logFunc({ 
                "appVersion"    :   ConfigService.appVersion,
                "dataObject"    :   JSON.stringify(logObject),
                "deviceName"    :   this.deviceName,
                "errorObject"   :   errMessage,
                "message"       :   logMessage,
                "userId"        :   userId,
                "userName"      :   userName
            });

        }

        if (errorObject) {
            console.error(logMessage + " :: ", logObject, errorObject);
        } else {
            if (logObject) {
                console.log('%c%s', 'color: #52884F', logMessage + " :: ", logObject);
            } else {
                console.log('%c%s', 'color: #52884F', logMessage);
            }
        }
    }

}

export const Logger             =   new LogServiceController();
