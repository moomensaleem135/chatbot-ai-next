import mongoose, { Document, Schema } from 'mongoose';

// Interface for Thread document
export interface IThread extends Document {
    threadId: string;
    assistantId: string;
    userId: string;
    metadata?: Record<string, any>;
    status: 'active' | 'archived' | 'expired';
    lastMessageAt?: Date;
    createdAt: Date;
    updatedAt: Date;
}

// Create the Thread schema
const ThreadSchema = new Schema<IThread>(
    {
        threadId: {
            type: String,
            required: true,
            unique: true,
            index: true,
        },
        assistantId: {
            type: String,
            required: true,
            index: true,
        },
        userId: {
            type: String,
            required: true,
            index: true,
        },
        metadata: {
            type: Map,
            of: Schema.Types.Mixed,
            default: {},
        },
        status: {
            type: String,
            enum: ['active', 'archived', 'expired'],
            default: 'active',
        },
        lastMessageAt: {
            type: Date,
            default: Date.now,
        }
    },
    {
        timestamps: true,
    }
);

// Create indexes
ThreadSchema.index({ createdAt: -1 });
ThreadSchema.index({ lastMessageAt: -1 });
ThreadSchema.index({ userId: 1, createdAt: -1 });
ThreadSchema.index({ assistantId: 1, createdAt: -1 });

// Create and export the model
const Thread = mongoose.model<IThread>('Thread', ThreadSchema);
export default Thread;
