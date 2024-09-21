// main.js

// Function to add a user from the form
document.getElementById('userForm').addEventListener('submit', async function(event) {
  event.preventDefault(); // Prevent default form submission behavior

  // Get values from the form inputs
  const username = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('user_message').value;

  // Call the edge function to send the data to Supabase
  await addUser(username, email, phone, message);

  console.log("Is it working correctly");

  // Clear the input fields
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('user_message').value = '';
});

// Function to call the edge function and add user to Supabase
async function addUser(username, email, phone, message) {
  try {
    const response = await fetch('/api/supabase-insert', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: username,
        email: email,
        phone: phone,
        message: message
      }),
    });

    const result = await response.json();

    if (response.ok) {
      console.log('User added successfully:', result);
      displayUsers();  // Refresh the user list after adding
    } else {
      console.error('Error adding user:', result);
    }
  } catch (err) {
    console.error('Error:', err);
  }
}

// Function to display users
async function displayUsers() {
  try {
    const response = await fetch('/api/supabase-display');
    const users = await response.json();

    if (response.ok) {
      const userList = document.getElementById('userList');
      // Clear previous user list
      userList.innerHTML = ''; 
      users.forEach(user => {
        console.log(`${user.name} (${user.email}) - ${user.phone} - ${user.message}`);
      });
    } else {
      console.error('Error fetching users:', users);
    }
  } catch (err) {
    console.error('Error fetching users:', err);
  }
}

// Check the connection (optional)
async function checkConnection() {
  try {
    const response = await fetch('/api/supabase-check');
    const result = await response.json();

    if (response.ok) {
      console.log('Connection successful:', result);
    } else {
      console.error('Connection error:', result);
    }
  } catch (err) {
    console.error('Error:', err);
  }
}

checkConnection();
