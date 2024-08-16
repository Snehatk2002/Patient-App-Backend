const mongoose=require("mongoose")
const patientSchema=mongoose.Schema(
    {
        patient_id:{type:String,required:true},
        name:{type:String,required:true},
        address:{type:String,required:true},
        contact:{type:String,required:true},
        email:{type:String,required:true},
        password:{type:String,required:true}

    }
)
const patientModel =mongoose.model("patients",patientSchema)
module.exports=patientModel