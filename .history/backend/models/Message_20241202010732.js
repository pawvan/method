const mongoose = require('mongoose');
const messageSchema= new mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      content: { type: String, required: true },
      team: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
        required: true,
      },
      createdAt: { type: Date, default: Date.now }
})
module.exports=mongoose.model('Mesa')