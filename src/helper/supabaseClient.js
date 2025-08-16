import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vlcgryfpibqsfdypoxno.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZsY2dyeWZwaWJxc2ZkeXBveG5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUxNTEyMjUsImV4cCI6MjA3MDcyNzIyNX0.o9MHkp_9eNSPGemg-_tgFuY6zZjLIKlKP7G4_YHjrLA";

const supabase = createClient(supabaseUrl, supabaseAnonKey);


export default supabase;