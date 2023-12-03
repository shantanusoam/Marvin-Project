import React from "react";

const Link = ({ item }) => {
  return (
    <div className="block cursor-pointer">
      <a
        key={item.name}
        href={item.href}
        className="text-gray-500 hover:text-black"
        aria-current={item.current ? "page" : undefined}
      >
        {item.name}
      </a>
    </div>
  );
};

export default Link;
