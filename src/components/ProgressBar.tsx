import React from "react";

type Props = {
  total?: number;
  current?: number;
};

const ProgressBar: React.FC<Props> = ({ total = 100, current = 0 }) => {
  const width = (current / total) * 100;
  return (
    <div className="h-2.5 w-full bg-gray overflow-hidden">
      <div className="h-2.5 bg-darkGreen" style={{ width: `${width}%` }}></div>
    </div>
  );
};

export default ProgressBar;
