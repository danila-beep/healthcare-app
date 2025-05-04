import { Router } from 'express';
import { appointmentController } from '../controllers/appointment.controller';
import { authMiddleware, roleMiddleware } from '../middleware/auth.middleware';

const router = Router();

// Все маршруты защищены аутентификацией
router.use(authMiddleware);

// Создание новой записи
router.post('/', roleMiddleware('patient', 'doctor', 'admin'), appointmentController.create);

// Получение всех записей пользователя
router.get('/', appointmentController.getAll);

// Обновление статуса записи
router.patch('/:id/status', roleMiddleware('doctor', 'admin'), appointmentController.updateStatus);

// Отмена записи
router.post('/:id/cancel', appointmentController.cancel);

export const appointmentRouter = router; 