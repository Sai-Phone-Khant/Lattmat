import { createClient } from '@supabase/supabase-js';
import { projectId, publicAnonKey } from './info';

// Create a singleton Supabase client instance
let supabaseClient: ReturnType<typeof createClient> | null = null;

export function getSupabaseClient() {
  if (!supabaseClient) {
    console.log('Creating new Supabase client instance');
    supabaseClient = createClient(
      `https://${projectId}.supabase.co`,
      publicAnonKey
    );
  } else {
    console.log('Reusing existing Supabase client instance');
  }
  return supabaseClient;
}

// Export the client for direct use
export const supabase = getSupabaseClient();