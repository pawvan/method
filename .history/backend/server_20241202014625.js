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
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB=require('./config/db')
const teamRoutes = require('.routes/teamRoutes')
const taskRoutes = require('./routes/taskRoutes')
const messageRoutes = require('./routes/messageRoutes')
const userRoutes  = require('./routes/UserRoutes')
dotenv.config();
connectDB();
//api routes
const app =express();
app.use(cors());
app.use(express.json());
app.use('/api/users',userRoutes);
app.use('/')
const port = process.env.PORT ||3000;
app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})