import { DocRef, DocIntRef  }   from    'common/common.model';

export class Block extends DocIntRef {

    public districtID           :   number;
    public photoURL             :   string;
    public village              :   string[];

    constructor(obj:any = {}) {

        super(obj);

        if (!obj) {
            obj                 =   {};
        }
            
        this.districtID         =   obj.districtID      ?   obj.districtID      :   0; 
        this.photoURL           =   obj.photoURL        ?   obj.photoURL        :   '';
        this.village            =   obj.village         ?   obj.village         :   [];
    }

    toJson() {
        return {
            ...this,
        }
    }

}

export class BlockRef extends DocIntRef {
    constructor(obj:any = {}) {
        super(obj);
    }

    toJson() {
        return {
            ...this,
        }
    }
}

export class District extends DocRef {

    public nearby               :   number[];

    constructor(obj:any = {}) {

        super(obj);

        if (!obj) {
            obj                 =   {};
        }
            
        this.nearby             =   obj.nearby          ?   obj.nearby          :   []; 
    }

    toJson() {
        return {
            ...this,
        }
    }

}

export class DistrictRef extends DocIntRef {

    constructor(obj:any = {}) {
        super(obj);
    }

    toJson() {
        return {
            ...this,
        }
    }

}

export class State extends DocIntRef {

    constructor(obj:any = {}) {
        super(obj);

        this.id                 =   obj.id              ||  31;
        this.name               =   obj.name            ||  'Tamil Nadu';
    }

    toJson() {
        return {
            ...this,
        }
    }

}

export class StateRef extends DocIntRef {
    constructor(obj:any) {
        if (!obj) {
            obj = {
                id: 31,
                name: 'Tamil Nadu'
            }
        }
        super(obj);
    }
}
