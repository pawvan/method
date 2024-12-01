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
 const User = require('../models/User');
 const bcrypt = require('bcryptjs');
 const generateToken = require('../config/auth');
 
 // Register new user
 exports.registerUser = async (req, res) => {
   const { username, email, password } = req.body;
 
   try {
     const existingUser = await User.findOne({ email });
     if (existingUser) {
       return res.status(400).json({ message: 'User already exists' });
     }
 
     const user = new User({ username, email, password });
 
     // Hash password before saving
     const salt = await bcrypt.genSalt(10);
     user.password = await bcrypt.hash(password, salt);
 
     await user.save();
 
     // Generate JWT Token
     const token = generateToken(user._id);
 
     res.status(201).json({ token });
   } catch (error) {
     console.error(error);
     res.status(500).json({ message: 'Server error' });
   }
 };
 

 exports.loginUser = async (req, res) => {
   const { email, password } = req.body;
 
   try {
     const user = await User.findOne({ email });
     if (!user) return res.status(400).json({ message: 'User not found' });
 
     // Compare password
     const isMatch = await bcrypt.compare(password, user.password);
     if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
 
     const token = generateToken(user._id);
 
     res.json({ token });
   } catch (error) {
     console.error(error);
     res.status(500).json({ message: 'Server error' });
   }
 };
 