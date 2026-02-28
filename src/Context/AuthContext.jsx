import { useState, useEffect, createContext, useContext } from "react";
// import { supabase } from "@/Supabase-client/SupabaseClient";
import { supabase } from "@/Supabase-client/SupabaseClient";

const AuthContext = createContext();

export const useAuth = () => {
  if (!AuthContext) {
    throw new Error("No such context exist");
  }

  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [username, setUserName] = useState(null);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    // Check session on load;
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUserName(session?.user ?? null);
      setIsloading(false);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setUserName(session?.user ?? null);
      setIsloading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const value = {
    username,
    isLoading,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
