


export class string2csv{
    constructor(){
        
    }

    static get() {
        
    }

    static processingData(str:string){
        const strArray = str.trim().split(/\n|,\n|,/g).map(e=>e.trim()).filter(e=>e)
        return strArray
    }


    static processingData2(str:string){
        const strArray = str.trim().split(/\t|\n|,\n|,/g).map(e=>e.trim()).filter(e=>e)
        return strArray
    }
}
