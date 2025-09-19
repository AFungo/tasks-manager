import mongoose from "mongoose";


export interface ITask extends Document {
    title: string;
    description?: string;
    completed: boolean;
    createdAt: Date;
}

const TaskSchema = new mongoose.Schema<ITask>({
    title: { type: String, required: true },
    description: { type: String },
    completed: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<ITask>('Taks', TaskSchema);