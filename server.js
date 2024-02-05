const express = require('express');
const sql = require('mssql');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Configure database connection
const config = {
    user: 'Swaroop76',
    password: 'C@nfidential',
    server: 'azure-cloud.database.windows.net',
    database: 'LOAS_data',
    options: {
        encrypt: true, // For Azure SQL
        enableArithAbort: true // For Azure SQL
    }
};

// Connect to MSSQL database
sql.connect(config)
    .then(() => console.log('Connected to MSSQL database'))
    .catch(err => console.error('Database connection error:', err));

// Middleware to parse URL-encoded request body
app.use(bodyParser.urlencoded({ extended: true }));


// Function to generate user ID
async function generateUserID(userType) {
    const idFile = path.join(__dirname, `${userType}IDs.txt`);
    let lastID;

    // Read the last ID from the file
    if (fs.existsSync(idFile)) {
        lastID = parseInt(fs.readFileSync(idFile, 'utf-8'));
    } else {
        lastID = 0;
    }

    // Generate the new ID
    const newID = `${userType}${String(lastID + 1).padStart(3, '0')}`;

    // Write the new ID to the file
    fs.writeFileSync(idFile, (lastID + 1).toString());

    return newID;
}

// Route to handle user registration
app.post('/register', async (req, res) => {
    const { fullName, username, email, password, userType } = req.body;

    try {
        // Generate unique user ID based on user type
        const userID = await generateUserID(userType);

        // Insert user data into the 'users' table
        const pool = await sql.connect(config);
        const result = await pool.request()
            .input('userID', sql.NVarChar, userID)
            .input('fullName', sql.NVarChar, fullName)
            .input('username', sql.NVarChar, username)
            .input('email', sql.NVarChar, email)
            .input('password', sql.NVarChar, password)
            .query('INSERT INTO users (userID, fullName, username, email, password) VALUES (@userID, @fullName, @username, @email, @password)');
        
        console.log('User registered successfully');
        res.status(200).json({ message: 'User registered successfully' });
    } catch (err) {
        console.error('Error registering user:', err);
        res.status(500).json({ error: 'An error occurred while registering user' });
    }
});

// Function to get user by username
async function getUserByUsername(username) {
    try {
        const pool = await sql.connect(config);
        console.log('Connected to database');

        const result = await pool.request()
            .input('username', sql.NVarChar, username)
            .query('SELECT * FROM users WHERE username = @username');

        console.log('Executed SQL query');

        if (result.recordset.length > 0) {
            // User found
            return result.recordset[0];
        } else {
            // User not found
            return null;
        }
    } catch (err) {
        console.error('Error getting user by username:', err);
        throw err;
    }
}

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await getUserByUsername(username);
        console.log(user);

        if (user && user.password === password) {
            // Login successful
            res.status(200).send('Login successful');
        } else {
            // Invalid credentials
            res.status(401).send('<script>alert("Invalid credentials"); window.location.href = "/login";</script>');
        }
    } catch (err) {
        console.error('Error logging in:', err);
        res.status(500).send('An error occurred while logging in');
    }
});


// Route to serve register.html file
// Middleware to serve static files
app.use('/', express.static(path.join(__dirname, 'LOAS')));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});