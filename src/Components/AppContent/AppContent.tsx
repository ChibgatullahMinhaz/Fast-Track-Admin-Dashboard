import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import Loader from "../UI/Loader/Loader";

export const AppContent = ({ children }: { children: React.ReactNode }) => {
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setLoading(true);
        const timeout = setTimeout(() => setLoading(false), 300);
        return () => clearTimeout(timeout);
    }, [location]);

    if (loading) return <Loader />;

    return <>{children}</>;
};
