import { DocRef, Media      }   from    "common/common.model";

export class CauseMeta extends DocRef {
    public photo                :   Media;
    public slug                 :   string;

    constructor(obj: any) {
        super(obj);

        if (!obj) {
            obj = {};
        }

        this.photo              =   new Media(obj.photo);
        this.slug               =   obj.slug            ||  '';
    }
}

export class CauseRef extends DocRef {
    public photo                :   Media;
    public slug                 :   string;

    constructor(obj: any) {
        super(obj);

        if (!obj) {
            obj = {};
        }

        this.photo              =   new Media(obj.photo);
        this.slug               =   obj.slug            ||  '';
    }
}

export class Cause extends DocRef {
    public description          :   string;
    public photo                :   Media;
    public slug                 :   string;

    constructor(obj: any) {
        super(obj);

        if (!obj) {
            obj = {};
        }

        this.description        =   obj.description     ||  '';
        this.photo              =   new Media(obj.photo);
        this.slug               =   obj.slug            ||  '';

    }
}

