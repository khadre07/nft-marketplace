import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isUserAuthenticated } from "@/lib/auth"; // Modifie selon ton projet

const withAuth = (WrappedComponent: React.FC) => {
  return (props: any) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      const checkAuth = async () => {
        const authStatus = await isUserAuthenticated();
        setIsAuthenticated(authStatus);

        if (!authStatus) {
          router.replace("/login"); // Redirection vers login si non connecté
        } else {
          setLoading(false);
        }
      };

      checkAuth();

      
    }, []);

    if (loading) {
      return <p>Chargement...</p>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
