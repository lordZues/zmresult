// Secure form submission using Supabase Edge Function
interface LeadData {
  name: string;
  email: string;
  phone: string;
  business: string;
  challenges: string;
  service?: string;
  source?: string;
}

export async function submitToGoogleSheets(leadData: LeadData): Promise<boolean> {
  try {
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      throw new Error('Supabase configuration is missing');
    }

    const functionUrl = `${supabaseUrl}/functions/v1/submit-lead`;

    const response = await fetch(functionUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${supabaseAnonKey}`,
        'apikey': supabaseAnonKey,
      },
      body: JSON.stringify(leadData)
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return false;
    }

    return true;
  } catch (error) {
    return false;
  }
}

// Fallback method kept for backward compatibility but now uses Supabase
export async function submitViaAppsScript(leadData: LeadData): Promise<boolean> {
  return submitToGoogleSheets(leadData);
}

// Fallback method kept for backward compatibility but now uses Supabase
export async function submitViaFormSubmit(leadData: LeadData): Promise<boolean> {
  return submitToGoogleSheets(leadData);
}