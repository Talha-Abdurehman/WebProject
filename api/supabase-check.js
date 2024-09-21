// api/supabase.js

export const config = {
    runtime: 'edge',
  };
  
  console.log(process.env)
  export default async function handler(req) {
    const SUPABASE_URL = process.env.SUPABASE_URL;
    const SUPABASE_KEY = process.env.SUPABASE_KEY;
  
    if (!SUPABASE_URL || !SUPABASE_KEY) {
      return new Response('Environment variables not set', { status: 500 });
    }
  
    // Example request to Supabase (adjust based on your actual use case)
    const response = await fetch(`${SUPABASE_URL}/rest/v1/users`, {
      headers: {
        apiKey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
      },
    });
  
    if (!response.ok) {
      return new Response('Error fetching data from Supabase', { status: 500 });
    }
  
    const data = await response.json();
  
    return new Response(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }