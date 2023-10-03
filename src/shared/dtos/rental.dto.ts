export class RentalEntity {
    constructor(partial: Partial<RentalEntity>) {
        Object.assign(this, partial);
    }
    rental_id!: string;
    name!: string;
    description!: string;
    latitude?: number;
    longitude?: number;
    price!: number;
    user_id!: string;
    images!: any[];
    Strictness_number!: number;
    user?: {
        name: string;
        lastName: string;
        email: string;
    };
    category?: any;
}

