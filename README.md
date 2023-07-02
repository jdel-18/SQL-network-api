# SQL-network-api
 
This is a RESTful API for a social network application. It allows users to create accounts, make posts (thoughts), add friends, and interact with other users.

# Features
User registration: Users can create new accounts by providing a username and email address.
User authentication: Secure user authentication is implemented using JSON Web Tokens (JWT).
User profiles: Users can view their own profile and profiles of other users, including their thoughts and friends.
Post thoughts: Users can create new thoughts (posts) and share them with their friends.
Add/remove friends: Users can add or remove other users as friends.
Delete user account: Users can delete their own account, which also deletes their associated thoughts and removes them from the friend lists of other users.

# Technologies Used
Node.js
Express.js
MongoDB
Mongoose
Installation

Configure the environment variables:

Rename the .env.example file to .env.
Modify the .env file and provide your MongoDB connection URI.
Start the server:

bash
Copy code
npm start
The API server will start running on http://localhost:3001.

API Endpoints
User Routes:

GET /api/users: Get all users
GET /api/users/:userId: Get a single user by ID
POST /api/users: Create a new user
PUT /api/users/:userId: Update a user by ID
DELETE /api/users/:userId: Delete a user by ID
POST /api/users/:userId/friends/:friendId: Add a friend to a user
DELETE /api/users/:userId/friends/:friendId: Remove a friend from a user
POST /api/users/:userId/thoughts: Create a new thought for a user
DELETE /api/users/:userId/thoughts/:thoughtId: Delete a thought from a user
Thought Routes:

GET /api/thoughts: Get all thoughts
GET /api/thoughts/:thoughtId: Get a single thought by ID
PUT /api/thoughts/:thoughtId: Update a thought by ID
DELETE /api/thoughts/:thoughtId: Delete a thought by ID
POST /api/thoughts/:thoughtId/reactions: Add a reaction to a thought
DELETE /api/thoughts/:thoughtId/reactions/:reactionId: Remove a reaction from a thought
License
This project is licensed under the MIT License.

Contributions
Contributions are welcome! If you find any issues or would like to suggest enhancements, please open an issue or submit a pull request.

Contact
For any inquiries or questions, feel free to contact me at your-email@example.com.