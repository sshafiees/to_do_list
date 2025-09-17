// src/components/overview/numberBlock.js

import { colorClasses } from '../../constants/colors';

export default function NumberBlock({ number, title, color }) {
  return (
    <div className="text-center">
      <h2
        className={`text-2xl font-bold ${
          colorClasses[color] || 'text-gray-500'
        }`}
      >
        {number}
      </h2>
      <div className="text-sm">{title}</div>
    </div>
  );
}
