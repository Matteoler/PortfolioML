import React from "react";

type ServiceCardProps = {
  title: string;
  text: string;
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, text }) => {
  return (
    <div
      className={
        "flex p-32 justify-between items-center hover:bg-SemiDarkBlue hover:text-white shadow-[4px_4px_4px_2px_rgba(0,0,0,0.25)]"
      }
    >
      <h3 className={"font-Neutro text-24 w-fit"}>{title}</h3>
      <span className={"font-SongMyung span-w-6"}>{text}</span>
    </div>
  );
};
