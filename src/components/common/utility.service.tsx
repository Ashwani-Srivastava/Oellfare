
class UtilityServiceController {
    constructor() {}

        /*
    public showSplitPane()    : void {
        const splitPane       = document.querySelector("ion-split-pane");
        splitPane.disabled    = false;
    }

    public hideSplitPane()    : void {
        const splitPane       = document.querySelector("ion-split-pane");
        splitPane.disabled    = true;
    }
         */

    public formatDate(date) {
        var d                 = new Date(date),
            month             = "" + (d.getMonth() + 1),
            day               = "" + d.getDate(),
            year              = d.getFullYear();

        if (month.length < 2) month = "0" + month;
        if (day.length < 2) day = "0" + day;

        return [day, month, year].join("-");
    }

    //private commonMetaPrefix    :   string              =   " - Grassroots - Chennai's Volunteering app";
    private commonMetaPrefix    :   string              =   "";

    public getMetaTitle(title: string): string {
        return `${title}${this.commonMetaPrefix}`;
    }

    public getMetaDescription(desc: string): string {
        return `${desc}${this.commonMetaPrefix}`;
    }

    public getLogoUrl(): string {
        return 'https://thegrassroots.app/assets/icons/icon-512x512.png';
    }

    public getAbsoluteUrl(fragment: string): string {
        return `https://thegrassroots.app/${fragment}`;
    }

    public showPage(): void {
        setTimeout(() => ( document.body.style.opacity='1' ), 500);
    }

    public loadScript(path: string): Promise<any> {
        return new Promise((resolve, reject) => {

            const script        =   document.createElement('script');
            script.src          =   path;

            script.onload       =   () => {
                resolve(1);
            };
            script.onerror      =   (err) => {
                reject(err);
            }

            document.head.appendChild(script);
        });
    }
}

export const UtilityService = new UtilityServiceController();
