// const greet = (name: string): string => {
//     return `My name is ${name}!`;
// };

// console.log(greet("Mounika"));

import express, { Application } from 'express';
import userRoutes from './routes/userRoutes';
import mongoose from 'mongoose';

const app: Application = express();
const PORT = 5000;

app.use(express.json());
app.use('/api/users', userRoutes);

mongoose.connect('mongodb+srv://DevTinder:DevTinder@devtinder.8oxmp.mongodb.net/express-ts-app')
    .then(() => {
        console.log('✅ MongoDB Connected');
        app.listen(PORT, () => {
            console.log(`🚀 Server is running at http://localhost:${PORT}`);
        });
    })
    .catch(err => console.error('❌ MongoDB connection error..', err));

