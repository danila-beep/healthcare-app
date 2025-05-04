import { Router } from 'express';
import { authController } from '../controllers/auth.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();

// Регистрация нового пользователя
router.post('/register', authController.register);

// Вход пользователя
router.post('/login', authController.login);

// Получение данных текущего пользователя
router.get('/me', authMiddleware, authController.getCurrentUser);

export const authRouter = router; 