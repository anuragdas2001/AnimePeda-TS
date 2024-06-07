import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://mvoltmxzeywbmfdgasdu.supabase.co';
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im12b2x0bXh6ZXl3Ym1mZGdhc2R1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYyMjg5MDAsImV4cCI6MjAzMTgwNDkwMH0.rsvLTGJvoA4x7XHMiwaFq8jMZk0cJO9PIG5SWpTBnWQ';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
