const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port =  process.env.PORT || 3000;

let id=1;

let users = [
  { email: 'trail1@xyz.ca', firstName: 'trail1', id: '4abd2345' },
  { email: 'trail2@xyz.ca', firstName: 'trail2', id: '1wed2345' },
];

app.use(bodyParser.json());

app.use((err, req, res, next) => {
    if (err.status === 400) {
      res.status(400).json({
        message: 'Invalid JSON input',
        success: false
      });
    } else {
      next();
    }
  });

app.get('/users', (req, res) => {
  res.status(200).json({
    message: 'Users retrieved',
    success: true,
    users: users
  });
});

app.put('/update/:id', (req, res) => {
  const userId = req.params.id;
  const updateUser = req.body;
  const userIndex = users.findIndex(user => user.id === userId);
  
  if (userIndex !== -1) {
    const user = users[userIndex];
    if (updateUser.email) user.email = updateUser.email;
    if (updateUser.firstName) user.firstName = updateUser.firstName;
    res.status(200).json({
      message: 'User updated',
      success: true
    });
  } else {
    res.status(404).json({
      message: 'User not found',
      success: false
    });
  }
});

app.post('/add', (req, res) => {
  const newUser = req.body;
  newUser.id = `abcd${id}`;
  id=id+1;
  users.push(newUser);
  res.status(200).json({
    message: 'User added',
    success: true,
    user: newUser
  });
});

app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  const user = users.find(user => user.id === userId);
  if (user) {
    res.status(200).json({
      success: true,
      user: user
    });
  } else {
    res.status(404).json({
      message: 'User not found',
      success: false
    });
  }
});

app.use((req, res) => {
  res.status(404).json({
    message: 'URL Not Found',
    success: false
    });
});

app.listen(port,() => {
  console.log(`Server is running`);
});
