import mongoose from 'mongoose';

export async function connectDB(uri?: string) {
    const mongoUri = uri || process.env.MONGO_URI;
    if (!mongoUri) throw new Error('Mongo_uri is not set');
    try {
        await mongoose.connect(mongoUri);
        console.log('Connected to MongoDB')
    } catch (error){
        console.log('Failed to connect to MongoDB', error);
        throw error;
    }
}