import mongoose, { Document, Schema } from "mongoose";

// Interface for Assistant document
export interface IAssistant extends Document {
  assistantId: string;
  name: string;
  description?: string;
  instructions?: string;
  modelName: string;
  tools: Array<{
    type: string;
    settings?: Record<string, any>;
  }>;
  metadata?: Record<string, any>;
  fileIds?: string[];
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
}

// Create the Assistant schema
const AssistantSchema = new Schema<IAssistant>(
  {
    assistantId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    instructions: {
      type: String,
      default: "",
    },
    modelName: {
      type: String,
      required: true,
      default: "gpt-4-1106-preview",
    },
    tools: [
      {
        type: {
          type: String,
          required: true,
          enum: ["code_interpreter", "retrieval", "function"],
        },
        settings: {
          type: Map,
          of: Schema.Types.Mixed,
          default: {},
        },
      },
    ],
    metadata: {
      type: Map,
      of: Schema.Types.Mixed,
      default: {},
    },
    fileIds: [
      {
        type: String,
      },
    ],
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create indexes
AssistantSchema.index({ name: 1 });
AssistantSchema.index({ createdAt: -1 });

// Create and export the model
const Assistant = mongoose.model<IAssistant>("Assistant", AssistantSchema);
export default Assistant;
