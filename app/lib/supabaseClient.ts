// lib/supabaseClient.ts
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// ✅ Helper function to build image URLs
export const getImageUrl = (path: string) => {
  const { data } = supabase.storage.from("products").getPublicUrl(path);
  return data.publicUrl;
};
