// import React, { createContext, useContext, useState, useEffect } from "react";

// type AdminType = { id: string; email: string } | null;

// const AdminContext = createContext<{
//   admin: AdminType;
//   setAdmin: React.Dispatch<React.SetStateAction<AdminType>>;
//   logout: () => void;
// }>({
//   admin: null,
//   setAdmin: () => {},
//   logout: () => {},
// });

// export const AdminProvider = ({ children }: { children: React.ReactNode }) => {
//   const [admin, setAdmin] = useState<AdminType>(null);

//   useEffect(() => {
//     const token = localStorage.getItem("mj-admin-auth");
//     if (token) {
//       const payload = JSON.parse(atob(token.split(".")[1]));
//       setAdmin({ id: payload.id, email: payload.email });
//     }
//   }, []);

//   const logout = () => {
//     localStorage.removeItem("mj-admin-auth");
//     setAdmin(null);
//   };

//   return (
//     <AdminContext.Provider value={{ admin, setAdmin, logout }}>
//       {children}
//     </AdminContext.Provider>
//   );
// };

// export const useAdmin = () => useContext(AdminContext);
import React, { createContext, useContext, useState, useEffect } from "react";

type AdminType = { id: string; email: string } | null;

const AdminContext = createContext<{
  admin: AdminType;
  setAdmin: React.Dispatch<React.SetStateAction<AdminType>>;
  logout: () => void;
}>({
  admin: null,
  setAdmin: () => {},
  logout: () => {},
});

export const AdminProvider = ({ children }: { children: React.ReactNode }) => {
  const [admin, setAdmin] = useState<AdminType>(null);

  useEffect(() => {
    const token = localStorage.getItem("mj-admin-auth");
    if (token) {
      // TEMP FIX: no JWT decoding
      setAdmin({ id: "admin", email: "admin@example.com" });
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("mj-admin-auth");
    setAdmin(null);
  };

  return (
    <AdminContext.Provider value={{ admin, setAdmin, logout }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => useContext(AdminContext);


