import React from "react";
import { ServiceCard } from "../serviceCard/ServiceCard";

export const Service = () => {
  return (
    <div className={"span-w-10 m-auto mt-[148px]"}>
      <h2 className={"uppercase text-SemiDarkBlue font-Neutro text-36"}>
        Mon service de qualite
      </h2>
      <div className={"flex flex-col gap-72 mt-72"}>
        <ServiceCard
          title="UX Design"
          text="Lorem ipsum dolor sit amet consectetur. Sem eleifend urna at posuere libero purus. Risus sit erat purus lacus suspendisse eleifend aliquam commodo placerat. Fermentum habitant nulla turpis bibendum. Quis mollis auctor venenatis habitant elementum."
        />
        <ServiceCard
          title="Web Design"
          text="Lorem ipsum dolor sit amet consectetur. Sem eleifend urna at posuere libero purus. Risus sit erat purus lacus suspendisse eleifend aliquam commodo placerat. Fermentum habitant nulla turpis bibendum. Quis mollis auctor venenatis habitant elementum."
        />
        <ServiceCard
          title="Developpement Web"
          text="Lorem ipsum dolor sit amet consectetur. Sem eleifend urna at posuere libero purus. Risus sit erat purus lacus suspendisse eleifend aliquam commodo placerat. Fermentum habitant nulla turpis bibendum. Quis mollis auctor venenatis habitant elementum."
        />
      </div>
    </div>
  );
};
