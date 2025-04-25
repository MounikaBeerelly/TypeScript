"use strict";
// const greet = (name: string): string => {
//     return `My name is ${name}!`;
// };
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// console.log(greet("Mounika"));
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const PORT = 6000;
app.use(express_1.default.json());
app.use('/api/users', userRoutes_1.default);
mongoose_1.default.connect('mongodb+srv://DevTinder:DevTinder@devtinder.8oxmp.mongodb.net/express-ts-app')
    .then(() => {
    console.log('✅ MongoDB Connected');
    app.listen(PORT, () => {
        console.log(`🚀 Server is running at http://localhost:${PORT}`);
    });
})
    .catch(err => console.error('❌ MongoDB connection error..', err));
