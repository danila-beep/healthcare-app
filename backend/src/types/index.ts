import { Document } from 'mongoose';

export interface IUser extends Document {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: 'patient' | 'doctor' | 'admin';
    createdAt: Date;
    updatedAt: Date;
    comparePassword(candidatePassword: string): Promise<boolean>;
}

export interface IAppointment extends Document {
    patient: IUser['_id'];
    doctor: IUser['_id'];
    date: Date;
    time: string;
    status: 'scheduled' | 'completed' | 'cancelled';
    type: string;
    description?: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface IMedicalRecord extends Document {
    patient: IUser['_id'];
    doctor: IUser['_id'];
    date: Date;
    diagnosis: string;
    prescription: string[];
    notes: string;
    attachments?: string[];
    createdAt: Date;
    updatedAt: Date;
}

export interface IUserEvent extends Document {
    user: IUser['_id'];
    title: string;
    description?: string;
    date: Date;
    time?: string;
    type: 'appointment' | 'reminder' | 'task';
    status: 'pending' | 'completed' | 'cancelled';
    createdAt: Date;
    updatedAt: Date;
} 