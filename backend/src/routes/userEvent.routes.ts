import { Router } from 'express';
import { userEventController } from '../controllers/userEvent.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();

// Все маршруты защищены аутентификацией
router.use(authMiddleware);

// Создание нового события
router.post('/', userEventController.create);

// Получение всех событий пользователя
router.get('/', userEventController.getAll);

// Получение событий по дате
router.get('/date/:date', userEventController.getByDate);

// Обновление события
router.put('/:id', userEventController.update);

// Удаление события
router.delete('/:id', userEventController.delete);

export const userEventRouter = router; 