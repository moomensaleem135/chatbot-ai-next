export interface ChatRequest {
  prompt: string;
  model?: string;
  temperature?: number;
  stream?: boolean;
}
