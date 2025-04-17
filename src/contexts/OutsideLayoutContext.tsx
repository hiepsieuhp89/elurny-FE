import React, { createContext, ReactNode, useMemo,useState } from "react";

interface OutsideLayoutContextType {
  title: string | ReactNode;
  setTitle: React.Dispatch<React.SetStateAction<string | ReactNode>>;
}

export const OutsideLayoutContext = createContext<OutsideLayoutContextType>({
  title: "",
  setTitle: () => {},
});

export function OutsideLayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [title, setTitle] = useState<string | ReactNode>("");

  const contextValue = useMemo(() => ({ title, setTitle }), [title]);

  return (
    <OutsideLayoutContext.Provider value={contextValue}>
      {children}
    </OutsideLayoutContext.Provider>
  );
}
