import { DocRef, Media      }   from    'common/common.model';

export class Coordinator extends DocRef {

    public logoURL              :   string;
    public email                :   string;
    public phone                :   string;
    public photo                :   Media;

    constructor(obj: any = {}, defaultImageUrl: string = '') {
        
        super(obj);

        if (!obj) {
            obj = {};
        }

        this.logoURL            =   obj.logoURL         ?   obj.logoURL         :   '';
        this.email              =   obj.email           ?   obj.email           :   '';
        this.phone              =   obj.phone           ?   obj.phone           :   '';
        this.photo              =   new Media(obj.photo, defaultImageUrl);

    }
}
