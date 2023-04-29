const express=require("express")
const { NoteModel } = require("../Model/notes.model")
const notes=express.Router()


notes.post("/create", async (req, res) => {
  try {
    const { title, author } = req.body;
    const note = new NoteModel(req.body);
    await note.save();
    res.json({ message: "notes added" }); // Return a JSON object
  } catch (error) {
    res.send(error);
  }
});


notes.get("/notes",async(req,res)=>{
    try {
        const note=await NoteModel.find({authorId:req.body.authorId})
        res.send(note)
    } catch (error) {
        res.send(error)
    }
})


notes.delete("/notes/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { authorId } = req.body;
  
      // Check if the authorId matches the one in the note
      //because in our model the id is present with key _id and author is present with the same key authorId
      const note = await NoteModel.findOne({ _id: id, authorId });
  
      if (!note) {
        // If the note doesn't exist or the authorId is incorrect, send a 404 status
        return res.status(404).send({ error: "Note not found" });
      }
  
      // Delete the note and send a success response
      await NoteModel.findByIdAndDelete(id);
      res.send({ message: "Note deleted successfully" });
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  });

notes.patch("/notes/:id",async(req,res)=>{
      try {
        const{id}=req.params
        const{authorId}=req.body
        const note=await NoteModel.findOne({_id:id,authorId})
     if(!note){
        res.send("Note not found")
     }
     else{
        await NoteModel.findByIdAndUpdate(id,req.body)
        res.send("Notes Updated")
     }
    } catch (error) {
        res.send(error)
    }
})

module.exports={
    notes
}