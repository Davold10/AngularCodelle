export interface Thing{
    ok:string,
    Things:Array<contentThing>
}

export interface contentThing{
    complete:boolean,
    created_date:string,
    thing:string,
    _id:string
}

