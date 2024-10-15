export class Rating {
    private id?: number;
    private rating: number;

    constructor(rating: number) {
        this.rating = rating;
    }

    public getId(): number | undefined {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getRating(): number {
        return this.rating;
    }

    // TODO: rating must be between 1 and 10
    public setRating(rating: number): void {
        this.rating = rating;
    }
}