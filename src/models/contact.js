import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        prod: {
            type: String,
            required: true,
        },
        suggestion: {
            type: String,
            required: true,
        },
        
    },
    {
        timestamp: true,
    })

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema)

export default  Contact;