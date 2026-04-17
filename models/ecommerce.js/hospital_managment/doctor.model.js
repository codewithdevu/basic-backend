import mongoose from "mongoose"

const workingHoursSchema = new mongoose.Schema({
    hospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
        required: true,
    },

    workingHours: {
        type: Number,
        required: true,
        min: 0
    },
    
})

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    },
    qualifications: {
        type: String,
        required: true,
    },
    experienceOfYear: {
        type: Number,
        default: 0
    },
    workInHospitals: [workingHoursSchema],

}, { timestamps: true })

export const Doctor = mongoose.model("Doctor", doctorSchema) 