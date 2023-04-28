const mongoose=require("mongoose")



const notesSchema=mongoose.Schema({
    "author":{type:String,required:true},
    "title":{type:String,required:true},
    "authorId":{type:String,required:true},
    "authorname":{type:String,required:true}
})

const NoteModel=mongoose.model("notes",notesSchema)



module.exports={
    NoteModel
}