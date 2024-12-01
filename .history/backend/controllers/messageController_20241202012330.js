/*!
 * This code is belongs to Pawvan
 * 
 * 
 * Rules:
 * 1. You can use, modify, and distribute this code freely for non-commercial purposes.
 * 2. Attribution must be provided in any derived works.
 * 3. You may not use this code in any project that violates any laws.
 * 4. No warranty is provided. Use this code at your own risk.
 * 5. If you make any changes, you must document them.
 * 6. Commercial use requires explicit permission from the author.
 * 7. Redistribution of the code must include authors notice.
 * 8. You cannot sublicense or sell this code.
 * 9. You may not use this code in any harmful or malicious way.
 *10. For more details, please contact: [pawanpediredla@gmail.com]
 */
 const Message = require('../models/Message');
 const Team = require('../models/Team');
 
 // Send a message to a team
 exports.sendMessage = async (req, res) => {
   const { content, teamId } = req.body;
   const senderId = req.user.userId; // From JWT middleware
 
   try {
     const team = await Team.findById(teamId);
     if (!team) return res.status(404).json({ message: 'Team not found' });
 
     const message = new Message({
       sender: senderId,
       content,
       team: teamId,
     });
 
     await message.save();
     res.status(201).json(message);
   } catch (error) {
     console.error(error);
     res.status(500).json({ message: 'Server error' });
   }
 };