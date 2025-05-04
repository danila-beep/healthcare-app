import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import { authRouter } from './routes/auth.routes';
import { appointmentRouter } from './routes/appointment.routes';
import { userEventRouter } from './routes/userEvent.routes';

// Загрузка переменных окружения
dotenv.config();

// Создание экземпляра приложения
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Маршруты
app.use('/api/auth', authRouter);
app.use('/api/appointments', appointmentRouter);
app.use('/api/events', userEventRouter);

// Подключение к базе данных
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/healthcare')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('MongoDB connection error:', error);
    });

// Базовый маршрут
app.get('/', (req, res) => {
    res.json({ message: 'Healthcare API is running' });
});

// Обработка ошибок
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

// Запуск сервера
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 