import { Request, Response } from 'express';
import { Appointment } from '../models/Appointment';
import { UserEvent } from '../models/UserEvent';

export const appointmentController = {
    // Создание новой записи на прием
    async create(req: Request, res: Response) {
        try {
            const { patient, doctor, date, time, type, description } = req.body;

            const appointment = new Appointment({
                patient,
                doctor,
                date,
                time,
                type,
                description
            });

            await appointment.save();

            // Создаем событие для пациента
            const patientEvent = new UserEvent({
                user: patient,
                title: `Appointment with Dr. ${doctor}`,
                description,
                date,
                time,
                type: 'appointment'
            });

            await patientEvent.save();

            // Создаем событие для врача
            const doctorEvent = new UserEvent({
                user: doctor,
                title: `Appointment with patient ${patient}`,
                description,
                date,
                time,
                type: 'appointment'
            });

            await doctorEvent.save();

            res.status(201).json(appointment);
        } catch (error) {
            res.status(500).json({ message: 'Error creating appointment', error });
        }
    },

    // Получение всех записей для пациента или врача
    async getAll(req: Request, res: Response) {
        try {
            const { userId, role } = req.user!;
            const query = role === 'doctor' ? { doctor: userId } : { patient: userId };

            const appointments = await Appointment.find(query)
                .populate('patient', 'firstName lastName')
                .populate('doctor', 'firstName lastName')
                .sort({ date: 1, time: 1 });

            res.json(appointments);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching appointments', error });
        }
    },

    // Обновление статуса записи
    async updateStatus(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { status } = req.body;

            const appointment = await Appointment.findByIdAndUpdate(
                id,
                { status },
                { new: true }
            );

            if (!appointment) {
                return res.status(404).json({ message: 'Appointment not found' });
            }

            // Обновляем статус связанных событий
            await UserEvent.updateMany(
                {
                    $or: [
                        { user: appointment.patient, date: appointment.date },
                        { user: appointment.doctor, date: appointment.date }
                    ]
                },
                { status }
            );

            res.json(appointment);
        } catch (error) {
            res.status(500).json({ message: 'Error updating appointment status', error });
        }
    },

    // Отмена записи
    async cancel(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { userId, role } = req.user!;

            const appointment = await Appointment.findById(id);

            if (!appointment) {
                return res.status(404).json({ message: 'Appointment not found' });
            }

            // Проверка прав на отмену
            if (role !== 'admin' && 
                appointment.patient.toString() !== userId &&
                appointment.doctor.toString() !== userId) {
                return res.status(403).json({ message: 'Not authorized to cancel this appointment' });
            }

            appointment.status = 'cancelled';
            await appointment.save();

            // Отмена связанных событий
            await UserEvent.updateMany(
                {
                    $or: [
                        { user: appointment.patient, date: appointment.date },
                        { user: appointment.doctor, date: appointment.date }
                    ]
                },
                { status: 'cancelled' }
            );

            res.json(appointment);
        } catch (error) {
            res.status(500).json({ message: 'Error cancelling appointment', error });
        }
    }
}; 