import mongoose from 'mongoose';

const sectionSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now }
});

const Section = mongoose.model('Section', sectionSchema);

export default Section;