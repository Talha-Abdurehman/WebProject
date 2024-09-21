// main.js



const supabaseClient = supabase.createClient(
  NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_KEY


)

// Function to add a user from the form
// Attach event listener to the form for adding a user
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior
  
    // Get values from the form inputs
    const username = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('user_message').value;
  
    // Call function to send the data to Supabase
    addUser(username, email, phone, message);

    console.log("Is it working correctly")

     // Clear the input fields
     document.getElementById('name').value = '';
     document.getElementById('email').value = '';
     document.getElementById('phone').value = '';
     document.getElementById('user_message').value = '';

  });
  
  // Function to add user to Supabase
  async function addUser(username, email, phone, message) {
    try {
      const { data, error } = await supabaseClient
        .from('users') // Ensure this is your correct Supabase table
        .insert([
          { 
            name: username, 
            email: email, 
            phone: phone, 
            message: message 
          }
        ]);
  
      if (error) {
        console.error('Error adding user:', error);
      } else {
        console.log('User added:', data);
        displayUsers();  // Refresh the user list after adding
      }
    } catch (err) {
      console.error('Error adding user:', err);
    }
  }
  
  // Function to display users
  async function displayUsers() {
    try {
      const { data: users, error } = await supabaseClient
        .from('users') // Ensure this is your correct Supabase table
        .select('*');
  
      if (error) {
        console.error('Error fetching users:', error);
      } else {
        const userList = document.getElementById('userList');
         // Clear previous user list
        users.forEach(user => {
            console.log(`${user.name} (${user.email}) - ${user.phone} - ${user.message}`)
        });
      }
    } catch (err) {
      console.error('Error fetching users:', err);
    }
  }
  
  async function checkConnection() {
    const { data, error } = await supabaseClient
      .from('users') // Replace 'users' with any table in your Supabase project
      .select('*');
  
    if (error) {
      console.error('Connection error:', error.message);
    } else {
      console.log('Connection successful:', data);
    }
  }


  checkConnection();
  