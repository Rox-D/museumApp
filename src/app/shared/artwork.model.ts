
export class Artwork {

    marked: boolean;

    constructor(public id: string, public title: string, public longTitle: string, public maker: string, public imgUrl: string, public objectNumber: string){

        this.marked = false;
    }
}

