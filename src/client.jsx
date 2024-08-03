import { createClient } from '@supabase/supabase-js';
const URL = 'https://fmdmbzjndaoowdujfkwr.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtZG1iempuZGFvb3dkdWpma3dyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE5Mjc3MTQsImV4cCI6MjAzNzUwMzcxNH0.KOkOO_pms7DaMCjerMH-T6NlKsMXysm7AI0W7pMnWZo';

const supabase = createClient(URL, API_KEY);

export default supabase; // Export the client as default
