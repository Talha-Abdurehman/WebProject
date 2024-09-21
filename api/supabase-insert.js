export const config = {
    runtime: 'edge',
  };
  
  export default async function handler(req) {
    const SUPABASE_URL = process.env.SUPABASE_URL;
    const SUPABASE_KEY = process.env.SUPABASE_KEY;
  
    if (!SUPABASE_URL || !SUPABASE_KEY) {
      return new Response('Environment variables not set', { status: 500 });
    }
  
    if (req.method === 'POST') {
      try {
        const { name, email, phone, message } = await req.json(); // Parse request body
  
        if (!name || !email || !phone || !message) {
          return new Response('Invalid input', { status: 400 });
        }
  
        // Insert data into Supabase table
        const response = await fetch(`${SUPABASE_URL}/rest/v1/users`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            apiKey: SUPABASE_KEY,
            Authorization: `Bearer ${SUPABASE_KEY}`,
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            message,
          }),
        });
  
        if (!response.ok) {
          return new Response('Error inserting data into Supabase', { status: 500 });
        }
  
        const data = await response.json();
        return new Response(JSON.stringify({ message: 'User added successfully', data }), {
          headers: { 'Content-Type': 'application/json' },
        });
      } catch (error) {
        return new Response('Error processing request', { status: 500 });
      }
    }
  
    return new Response('Method not allowed', { status: 405 });
  }
  