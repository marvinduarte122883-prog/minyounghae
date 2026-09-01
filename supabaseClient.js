// supabaseClient.js
const SUPABASE_URL = 'https://mrrothkiygcxspiwotjx.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_wYyisTscusEPgTmpbZGYmw_e_mTcAwW';

// Make sure window.supabase is assigned using supabase.createClient
window.supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);