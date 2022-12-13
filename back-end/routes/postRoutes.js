const postSchema = require('../models/postSchema')

const saveDetails = (app) => {
  
    app.post('/save_details' , async (req, res) => {
        let {partyname , startdate , leader , members} = req.body

    try{
        let post = new postSchema ({
            partyname , startdate , leader , members
        })
        const postSaved = await post.save()
         
        res.send({massage:"Succesfully saved", postSaved})
    }catch (error) {
        console.error("post error", error)
        res.send({massage:"post error"}).status(404)
    }

    })

    app.get('/get_details' , async (req, res) => {
        try {
            const findDetails = await postSchema.find()
            res.send(findDetails)
        }catch(error) {
            console.log('error', error)
        }
    })

    app.delete('/delete_party/:id' , async (req , res)  =>  {
        try{
            const {id} = req.params  
            const partyToDelete = await postSchema.deleteOne({_id : id})
            res.send({message: "Successfully deleted", partyToDelete})
        }catch(err){
            console.log(err);
            res.sendStatus(501)
        }
    })
app.put('/increment/:id', async (req, res) =>{

    try {
        await postSchema.findByIdAndUpdate({_id : req.params.id},{ members: req.body.members});
        res.status(200).send({message: `Members successfully increased`})   
    } catch (error) {
        res.status(400).send(error)
    }

})

app.put('/decrement/:id', async (req, res) =>{

    try {
        await postSchema.findByIdAndUpdate({_id : req.params.id},{ members: req.body.members});
        res.status(200).send({message: `Members successfully decreased`})   
    } catch (error) {
        res.status(400).send(error)
    }

})


}



module.exports = {saveDetails}