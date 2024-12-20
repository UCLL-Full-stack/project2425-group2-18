// Execute: npx ts-node util/seed.ts

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
const prisma = new PrismaClient();

const main = async () => {
    await prisma.movie.deleteMany();
    await prisma.user.deleteMany();

    const admin = await prisma.user.create({
        data: {
            username: 'admin',
            password: await bcrypt.hash('admin1234', 12),
            firstName: 'admin',
            lastName: 'admin',
            email: 'admin@admin.be',
            role: 'admin',
        },
    });

    const user = await prisma.user.create({
        data: {
            username: 'user',
            password: await bcrypt.hash('user1234', 12),
            firstName: 'user',
            lastName: 'user',
            email: 'user@user.be',
            role: 'user',
        },
    });

    const karateKid = await prisma.movie.create({
        data: {
            name: 'Karate Kid',
            director: 'John G. Avildsen',
            releaseYear: 1984,
            genre: 'Martial Arts',
            userId: admin.id
        }
    });

    const Kong = await prisma.movie.create({
        data: {
            name: 'Kong',
            director: 'Jordan Vogt-Roberts',
            releaseYear: 2017,
            genre: 'Monster',
            userId: user.id
        }
    })
};

(async () => {
    try {
        await main();
        await prisma.$disconnect();
    } catch (error) {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    }
})();
