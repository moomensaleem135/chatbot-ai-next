import mongoose, { Document, Schema } from "mongoose";

// Interface for Message document
export interface IMessage extends Document {
  messageId: string;
  threadId: string;
  role: "user" | "assistant" | "system";
  content: Array<{
    type: "text" | "image" | "file";
    text?: string;
    fileId?: string;
  }>;
  metadata?: Record<string, any>;
  runId?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Create the Message schema
const MessageSchema = new Schema<IMessage>(
  {
    messageId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    threadId: {
      type: String,
      required: true,
      index: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["user", "assistant", "system"],
    },
    content: [
      {
        type: {
          type: String,
          required: true,
          enum: ["text", "image", "file"],
        },
        text: String,
        fileId: String,
      },
    ],
    metadata: {
      type: Map,
      of: Schema.Types.Mixed,
      default: {},
    },
    runId: {
      type: String,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create indexes
MessageSchema.index({ threadId: 1, createdAt: 1 });
MessageSchema.index({ createdAt: -1 });

// Create and export the model
const Message = mongoose.model<IMessage>("Message", MessageSchema);
export default Message;
