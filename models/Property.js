import mongoose from 'mongoose'

const propertySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    rent: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    mediaUrl: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

export default mongoose.models.property || mongoose.model('property', propertySchema)