import React, { createContext, useState, ReactNode, useContext } from 'react';

// Context to manage Tooltip state
interface TooltipContextType {
  tooltipText: string | null;
  setTooltipText: (text: string | null) => void;
}

// Create a Context
const TooltipContext = createContext<TooltipContextType | undefined>(undefined);

// TooltipProvider component to provide Tooltip context to the app
export const TooltipProvider = ({ children }: { children: ReactNode }) => {
  const [tooltipText, setTooltipText] = useState<string | null>(null);

  return (
    <TooltipContext.Provider value={{ tooltipText, setTooltipText }}>
      {children}
    </TooltipContext.Provider>
  );
};

// Hook to use the Tooltip context
export const useTooltip = () => {
  const context = useContext(TooltipContext);
  if (!context) {
    throw new Error("useTooltip must be used within a TooltipProvider");
  }
  return context;
};

// Tooltip component for showing the text
export const Tooltip = ({ text, children }: { text: string; children: ReactNode }) => {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {children}
      <div
        style={{
          position: 'absolute',
          bottom: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
          padding: '5px 10px',
          backgroundColor: '#333',
          color: '#fff',
          borderRadius: '5px',
          whiteSpace: 'nowrap',
          fontSize: '12px',
          zIndex: 1000,
        }}
      >
        {text}
      </div>
    </div>
  );
};
