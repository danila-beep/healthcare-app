import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models/User';

export const authController = {
    // Регистрация нового пользователя
    async register(req: Request, res: Response) {
        try {
            const { email, password, firstName, lastName, role } = req.body;

            // Проверка существования пользователя
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: 'User already exists' });
            }

            // Создание нового пользователя
            const user = new User({
                email,
                password,
                firstName,
                lastName,
                role
            });

            await user.save();

            // Генерация JWT токена
            const token = jwt.sign(
                { userId: user._id, role: user.role },
                process.env.JWT_SECRET || 'default_secret',
                { expiresIn: '24h' }
            );

            res.status(201).json({
                token,
                user: {
                    id: user._id,
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    role: user.role
                }
            });
        } catch (error) {
            res.status(500).json({ message: 'Error creating user', error });
        }
    },

    // Вход пользователя
    async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body;

            // Поиск пользователя
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }

            // Проверка пароля
            const isValidPassword = await user.comparePassword(password);
            if (!isValidPassword) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }

            // Генерация JWT токена
            const token = jwt.sign(
                { userId: user._id, role: user.role },
                process.env.JWT_SECRET || 'default_secret',
                { expiresIn: '24h' }
            );

            res.json({
                token,
                user: {
                    id: user._id,
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    role: user.role
                }
            });
        } catch (error) {
            res.status(500).json({ message: 'Error during login', error });
        }
    },

    // Получение данных текущего пользователя
    async getCurrentUser(req: Request, res: Response) {
        try {
            const userId = req.user?.userId;
            const user = await User.findById(userId).select('-password');
            
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            res.json(user);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching user data', error });
        }
    }
}; 