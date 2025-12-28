
/**
 * FreeVoice Pro | Neural Licensing Gateway
 * Backend Authority: Hugging Face (subhan-75/freevoice)
 */

const HF_SPACE_URL = "https://subhan-75-freevoice.hf.space"; 
const HF_TOKEN = "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"; 
const MASTER_EMAIL = 'subhanfreefire76@gmail.com';

export interface UserStatus {
  isPro: boolean;
  proExpiry: number | null;
  userId: string;
  serverTime: number; 
  email: string;
}

/**
 * Synchronizes local Firebase user with Hugging Face Database with timeout protection.
 */
export const syncUserWithHF = async (userId: string, email: string): Promise<UserStatus> => {
  if (email.toLowerCase() === MASTER_EMAIL.toLowerCase()) {
    return {
      isPro: true,
      proExpiry: 253370764800000, 
      userId: userId,
      serverTime: Date.now(),
      email: email
    };
  }

  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), 8000); // 8 second timeout max

  try {
    const response = await fetch(`${HF_SPACE_URL}/sync-identity`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${HF_TOKEN}`
      },
      body: JSON.stringify({ userId, email }),
      signal: controller.signal
    });

    clearTimeout(id);

    if (!response.ok) throw new Error(`Neural Link Error: ${response.status}`);
    
    const data = await response.json() as any;
    const serverTime = data?.server_time || Date.now();
    const expiry = data?.expiry_timestamp || 0;
    const isActuallyPro = (data?.is_pro === true) && (expiry > serverTime);

    return {
      isPro: isActuallyPro,
      proExpiry: expiry || null,
      userId: userId,
      serverTime: serverTime,
      email: email
    };
  } catch (error) {
    console.error("Hugging Face Sync Failure (Fast Fallback):", error);
    return { isPro: false, proExpiry: null, userId, serverTime: Date.now(), email };
  }
};

export const keepWarmPulse = async (): Promise<void> => {
  try {
    await fetch(`${HF_SPACE_URL}/ping`, {
      headers: { 'Authorization': `Bearer ${HF_TOKEN}` }
    });
  } catch (e) {}
};

export const logPurchaseToHF = async (userId: string, plan: string): Promise<boolean> => {
  try {
    const response = await fetch(`${HF_SPACE_URL}/record-purchase`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${HF_TOKEN}`
      },
      body: JSON.stringify({ userId, plan }),
    });
    return response.ok;
  } catch (error) {
    console.error("Purchase logging failed:", error);
    return false;
  }
};
