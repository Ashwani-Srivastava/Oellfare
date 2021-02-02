
import { Doc                }   from    'common/common.model';

export class FundraiserUpdate extends Doc {

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


