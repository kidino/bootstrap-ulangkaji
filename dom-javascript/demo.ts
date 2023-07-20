console.log("Hello")

class Student {
    constructor( 
        public nama : string, 
        public umur : number 
    ) {}

    public getNama() {
        return this.nama
    }

    public getUmur() {
        return this.umur
    }
}

class OCBStudent extends Student {

    constructor( 
        public nama : string, 
        public umur : number,
        public batch : string
    ) {
        super(nama, umur)
    }

    public getBatch() {
        return this.batch;
    }
}

let Ali = new OCBStudent("Ali", 23, "JUN 2023");

console.log( Ali.getBatch() )
