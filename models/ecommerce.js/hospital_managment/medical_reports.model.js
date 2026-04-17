import mongoose from "mongoose"

const medicalRecordSchema = new mongoose.Schema({} , {timestamps: true}) 

export const MediaRecord = mongoose.model("MediaRecord" , medicalRecordSchema) 