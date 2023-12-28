'use client';

import { PrinterIcon } from "lucide-react";
import React from 'react';
import { Button } from "./ui/button";

export const PrintButton: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };
  
  return (
    <Button
      className="h-8 w-8"
      variant="outline"
      size="icon"
      onClick={handlePrint}
    >
      <PrinterIcon className="h-4 w-4" />
    </Button>
  );
};
