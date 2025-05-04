import mongoose from 'mongoose';
import { IMedicalRecord } from '../types';

const medicalRecordSchema = new mongoose.Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    diagnosis: {
        type: String,
        required: true
    },
    prescription: [{
        type: String,
        required: true
    }],
    notes: {
        type: String,
        required: true
    },
    attachments: [{
        type: String
    }]
}, {
    timestamps: true
});

// Индексы для оптимизации запросов
medicalRecordSchema.index({ patient: 1, date: -1 });
medicalRecordSchema.index({ doctor: 1, date: -1 });

export const MedicalRecord = mongoose.model<IMedicalRecord>('MedicalRecord', medicalRecordSchema); 