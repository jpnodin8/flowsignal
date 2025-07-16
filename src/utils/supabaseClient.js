import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zdtepctylfxqmuiuanmh.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpkdGVwY3R5bGZ4cW11aXVhbm1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI2MTk3MDYsImV4cCI6MjA2ODE5NTcwNn0.NRzT7_G8L5XZLROkk1Kuf-NW1sYd3yiXBBXgNNI9btE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);