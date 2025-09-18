import React from 'react';

export default function Block({ children }: { children: React.ReactNode }) {
  return (
    <div className="shadow-md bg-white border border-gray-100 rounded-md p-4">
      {children}
    </div>
  );
}
