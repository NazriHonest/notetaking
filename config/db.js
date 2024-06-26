import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://naazir21:naazir21@cluster0.c6aczf3.mongodb.net/notetaking?retryWrites=true&w=majority&appName=Cluster0');
    console.log('Database connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;