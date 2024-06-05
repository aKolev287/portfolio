import React from "react";

type TechSquareProps = {
  icon: React.ReactElement;
};

const TechSquare = ({ icon }: TechSquareProps) => {
  return (
    <div className="border-[2px] p-1 rounded-md dark:border-gray-600">
      {icon}
    </div>
  );
};

export default TechSquare;
