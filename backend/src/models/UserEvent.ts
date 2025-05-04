import mongoose from 'mongoose';
import { IUserEvent } from '../types';

const userEventSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String
    },
    type: {
        type: String,
        enum: ['appointment', 'reminder', 'task'],
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'cancelled'],
        default: 'pending'
    }
}, {
    timestamps: true
});

// Индексы для оптимизации запросов
userEventSchema.index({ user: 1, date: 1 });
userEventSchema.index({ type: 1 });
userEventSchema.index({ status: 1 });

export const UserEvent = mongoose.model<IUserEvent>('UserEvent', userEventSchema); 