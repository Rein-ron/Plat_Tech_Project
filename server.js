const supabaseUrl = 'https://giyguxvjrdntwnxtuqtp.supabase.co'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdpeWd1eHZqcmRudHdueHR1cXRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM5MzQxMzcsImV4cCI6MjA0OTUxMDEzN30.aPZrWx6wddWH0K8I-Vq95q67iG8LLBoWl2GmblZmN3w'; 
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

const form = document.getElementById('contact-form');
const responseDiv = document.getElementById('response');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const { data, error } = await supabase
        .from('messages')
        .insert([{ name, email, message }]);

    if (error) {
        responseDiv.innerHTML = 'Error: ' + error.message;
    } else {
        responseDiv.innerHTML = 'Message submitted successfully!';
        form.reset();
    }
});
