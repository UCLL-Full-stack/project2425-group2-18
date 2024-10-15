import { Rating } from "./rating";

export class Movie {
    private id?: number;
    private title: string;
    private year: number;
    private director: string;
    private genre: string[];
    private rating: Rating;

    constructor(title: string, year: number, director: string, genre: string[] , rating: Rating) {
        this.title = title;
        this.year = year;
        this.director = director;
        this.genre = genre;
        this.rating = rating;
    }

    public getId(): number | undefined {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getTitle(): string {
        return this.title;
    }

    public setTitle(title: string): void {
        this.title = title;
    }

    public getYear(): number {
        return this.year;
    }

    public setYear(year: number): void {
        this.year = year;
    }

    public getDirector(): string {
        return this.director;
    }

    public setDirector(director: string): void {
        this.director = director;
    }

    public getGenre(): string[] {
        return this.genre;
    }

    public setGenre(genre: string[]): void {
        this.genre = genre;
    }

    public getRating(): Rating {
        return this.rating;
    }

    public setRating(rating: Rating): void {
        this.rating = rating;
    }
}