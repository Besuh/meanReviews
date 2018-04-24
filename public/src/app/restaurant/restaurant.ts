export class Restaurant {
    constructor(
        public _id: string = "",
        public name: string = "",
        public cuisine: string = "",
        public reviews: any = [],
        public created_at = Date(),
        public out: boolean = true,
        public editable: boolean = false
    ){}
}

