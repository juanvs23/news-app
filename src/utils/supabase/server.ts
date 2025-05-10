import { createClient } from '@supabase/supabase-js'



const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
    {
        db: {
            schema: 'public',
          },
          auth: {
            persistSession: false,
            autoRefreshToken: false,
          },
    }
);

export default supabase;
