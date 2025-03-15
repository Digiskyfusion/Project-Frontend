import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://mwjexidlverimqrovedx.supabase.co"; // Replace with your Supabase URL
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13amV4aWRsdmVyaW1xcm92ZWR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE4MDM4ODMsImV4cCI6MjA1NzM3OTg4M30.Vm4PwArtCqg9oKSr0EW0VdR8X49EZs9xodkYreBohaA"; // Replace with your Supabase API key

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
