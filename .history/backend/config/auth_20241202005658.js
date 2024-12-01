/config
    - db.js                    # Database configuration (MongoDB)
    - auth.js                  # Authentication (JWT, OAuth, etc.)
  /models
    - User.js                  # User model schema
    - Team.js                  # Team model schema
    - Task.js                  # Task model schema
    - Message.js               # Message model schema
  /routes
    - userRoutes.js            # User routes (login, registration)
    - teamRoutes.js            # Team management routes
    - taskRoutes.js            # Task management routes
    - messageRoutes.js         # Messaging routes
  /controllers
    - userController.js        # Business logic for user management
    - teamController.js        # Business logic for team management
    - taskController.js        # Business logic for tasks
    - messageController.js     # Business logic for messages
  /middleware
    - authMiddleware.js        # JWT authentication middleware
  /utils
    - errorHandler.js          # Utility for error handling
  - server.js                 # Express server entry point
  - .env                      # Environment variables (JWT secret, DB URI)
  - package.json    