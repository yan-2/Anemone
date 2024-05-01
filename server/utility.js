
import { createClient } from '@supabase/supabase-js'
const SUPABASE_URL="https://gukyiyhhbgrjludizend.supabase.co"
const SUPABASE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd1a3lpeWhoYmdyamx1ZGl6ZW5kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQzMDAwMDEsImV4cCI6MjAyOTg3NjAwMX0.-jwS6Ky2z0a24j-aF9rVejNFO2zqu6ApjPSs9mrvoEQ"
const DB = createClient(SUPABASE_URL, SUPABASE_KEY);
export {DB}
