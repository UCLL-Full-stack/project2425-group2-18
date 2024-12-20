import { Movie as MoviePrisma } from '@prisma/client';

export class Movie {
    private id?: number;
    private name: string;
    private director: string;
    private releaseYear: number;
    private genre: string;
    private userId: number;

    constructor(movie: {
        id?: number;
        name: string;
        director: string;
        releaseYear: number;
        genre: string;
        userId: number;
    }) {
        this.validate(movie);

        this.id = movie.id;
        this.name = movie.name;
        this.director = movie.director;
        this.releaseYear = movie.releaseYear;
        this.genre = movie.genre;
        this.userId = movie.userId;
    }

    getId(): number | undefined {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getDirector(): string {
        return this.director;
    }

    getReleaseYear(): number {
        return this.releaseYear;
    }

    getGenre(): string {
        return this.genre;
    }

    getUserId(): number {
        return this.userId;
    }

    validate(movie: {
        name: string;
        director: string;
        releaseYear: number;
        genre: string;
        userId: number;
    }) {
        if (!movie.name?.trim()) {
            throw new Error('Name is required');
        }
        if (!movie.director?.trim()) {
            throw new Error('Director is required');
        }
        if (!movie.releaseYear) {
            throw new Error('Release year is required');
        }
        if (!movie.genre?.trim()) {
            throw new Error('Genre is required');
        }
        if (!movie.userId) {
            throw new Error('User ID is required');
        }
    }

    equals(movie: Movie): boolean {
        return (
            this.name === movie.getName() &&
            this.director === movie.getDirector() &&
            this.releaseYear === movie.getReleaseYear() &&
            this.genre === movie.getGenre() &&
            this.userId === movie.getUserId()
        );
    }

    static from({ id, name, director, releaseYear, genre, userId }: MoviePrisma) {
        return new Movie({
            id,
            name,
            director,
            releaseYear,
            genre,
            userId,
        });
    }
}