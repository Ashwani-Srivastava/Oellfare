import { DocIntRef, Media, StatDoc }   from    "../common/common.model";

export class SdgRef extends DocIntRef {
    public description          :   string;
    public link                 :   string;
    public slug                 :   string;
    public photo                :   Media;

    constructor(_obj: any) {
        super(_obj);

        const obj               =   _obj ? _obj : {};

        this.description        =   obj.description      ||  "";
        this.link               =   obj.link             ||  "";
        this.slug               =   obj.slug             ||  "";
        this.photo              =   new Media(obj.photo);
    }

    toJson() {
        return {
            ...this,
            ...super.toJson(),
            photo               :   this.photo.toJson()
        }
    }
}

export class Sdg extends StatDoc {
    public description          :   string;
    public link                 :   string;
    public slug                 :   string;
    public photo                :   Media;

    constructor(_obj: any) {
        super(_obj);

        const obj               =   _obj ? _obj : {};

        this.description        =   obj.description      ||  "";
        this.link               =   obj.link             ||  "";
        this.slug               =   obj.slug             ||  "";
        this.photo              =   new Media(obj.photo);
    }

    toJson() {
        return {
            ...this,
            ...super.toJson(),
            photo               :   this.photo.toJson()
        }
    }

}
