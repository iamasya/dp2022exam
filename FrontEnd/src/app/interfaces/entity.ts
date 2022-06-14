export interface Entity {
        id:number;
        name10:string;
        length:number;
        _links:{
        
                self: {
                        href: string;
                },
                entity: {
                        href: string;
                }
        }
}

