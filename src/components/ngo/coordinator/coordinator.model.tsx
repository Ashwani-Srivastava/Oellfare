import { DocRef             }   from    'common/common.model';

export class Coordinator extends DocRef {

    public logoURL              :   string;
    public email                :   string;
    public phone                :   string;

    constructor(obj: any = {}) {
        
        super(obj);

        if (!obj) {
            obj = {};
        }

        this.logoURL            =   obj.logoURL         ?   obj.logoURL         :   '';
        this.email              =   obj.email           ?   obj.email           :   '';
        this.phone              =   obj.phone           ?   obj.phone           :   '';

    }
}
