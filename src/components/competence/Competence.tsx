import React from "react";
import { CompetenceCard } from "@/components/competenceCard/CompetenceCard";

export const Competence = () => {
  return (
    <div className={"span-w-10 m-auto mt-[124px]"}>
      <h2 className={"uppercase text-SemiDarkBlue font-Neutro text-36"}>
        Mes Competences
      </h2>
      <div
        className={
          "flex flex-wrap justify-between gap-72  mt-72 span-w-10 m-auto"
        }
      >
        <CompetenceCard />
      </div>
    </div>
  );
};
