import { Request, Response } from 'express';
import { UserEvent } from '../models/UserEvent';

export const userEventController = {
    // Создание нового события
    async create(req: Request, res: Response) {
        try {
            const { title, description, date, time, type } = req.body;
            const { userId } = req.user!;

            const event = new UserEvent({
                user: userId,
                title,
                description,
                date,
                time,
                type
            });

            await event.save();
            res.status(201).json(event);
        } catch (error) {
            res.status(500).json({ message: 'Error creating event', error });
        }
    },

    // Получение всех событий пользователя
    async getAll(req: Request, res: Response) {
        try {
            const { userId } = req.user!;
            const { startDate, endDate, type } = req.query;

            let query: any = { user: userId };

            if (startDate && endDate) {
                query.date = {
                    $gte: new Date(startDate as string),
                    $lte: new Date(endDate as string)
                };
            }

            if (type) {
                query.type = type;
            }

            const events = await UserEvent.find(query)
                .sort({ date: 1, time: 1 });

            res.json(events);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching events', error });
        }
    },

    // Обновление события
    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { userId } = req.user!;
            const updateData = req.body;

            const event = await UserEvent.findOne({ _id: id, user: userId });

            if (!event) {
                return res.status(404).json({ message: 'Event not found' });
            }

            Object.assign(event, updateData);
            await event.save();

            res.json(event);
        } catch (error) {
            res.status(500).json({ message: 'Error updating event', error });
        }
    },

    // Удаление события
    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { userId } = req.user!;

            const event = await UserEvent.findOneAndDelete({ _id: id, user: userId });

            if (!event) {
                return res.status(404).json({ message: 'Event not found' });
            }

            res.json({ message: 'Event deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error deleting event', error });
        }
    },

    // Получение событий по дате
    async getByDate(req: Request, res: Response) {
        try {
            const { userId } = req.user!;
            const { date } = req.params;

            const startOfDay = new Date(date);
            const endOfDay = new Date(date);
            endOfDay.setHours(23, 59, 59, 999);

            const events = await UserEvent.find({
                user: userId,
                date: {
                    $gte: startOfDay,
                    $lte: endOfDay
                }
            }).sort({ time: 1 });

            res.json(events);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching events by date', error });
        }
    }
}; 