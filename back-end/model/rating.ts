// import { Rating as RatingPrisma } from '@prisma/client';
import { Movie } from './movie';

export class Rating {
    private id?: number;
    private rating: number;
    private movie: Movie;

    constructor(rating: number, movie: Movie) {
        this.rating = rating;
        this.movie = movie;
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

    
    public setRating(rating: number): void {
        try {
            if (rating < 1 || rating > 10) {
                throw new Error('Rating must be between 1 and 10.');
            }
            this.rating = rating;
        } catch (error) {
            console.error(error);
            throw new Error('Rating must be between 1 and 10.');
        }
    }

    equals(rating: Rating): boolean {
        return this.rating === rating.getRating();
    }

    static from({id, rating, movie}: RatingPrisma){
        return new Rating({
            id,
            rating,
            movie: Movie.from(movie),
        });
    }
}