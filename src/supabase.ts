import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nmwtzremirolcntksqjw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5td3R6cmVtaXJvbGNudGtzcWp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ2MDc1MTQsImV4cCI6MTk5MDE4MzUxNH0.-y3PNIqqdbvRC1yeJuNrEziDBC21-NSD_WUMoWk13mc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
