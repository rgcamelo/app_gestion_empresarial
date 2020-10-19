import {Column, Entity, ObjectID, ObjectIdColumn} from "typeorm";

@Entity({
    name: 'BRANDS'
})
export class BrandOrm{
    @ObjectIdColumn()
    _id: ObjectID;
    @Column()
    reference: string;
    @Column()
    name: string;
}