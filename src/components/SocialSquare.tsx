import React from "react";

type MediaProps = {
  icon: React.ReactElement;
  link: string;
};

const SocialSquare = ({ icon, link }: MediaProps) => {
  return (
    <a
      href={link}
      className="border-[1px] p-2 rounded-md dark:border-gray-600 dark:shadow-[#222222] hover:text-blue-300 cursor-pointer"
    >
      {icon}
    </a>
  );
};

export default SocialSquare;
