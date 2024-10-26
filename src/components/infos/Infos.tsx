import Image from "next/image";
import Suzume from "../../assets/images/Suzume.png";

export const Infos = () => {
  return (
    <div className={"span-w-10 m-auto pt-[148px] span-gap-wide-1 flex"}>
      <Image
        className={"lg:span-w-wide-5 object-cover h-[550px]"}
        height={400}
        src={Suzume}
        alt={"Image du film Suzume"}
      />
      <div className={"span-w-4 flex flex-col gap-grid"}>
        <h2
          className={
            "font-SegoeUI span-w-2 font-bold text-26 text-SemiDarkBlue"
          }
        >
          Designer & Développeur
        </h2>
        <p className={"font-SongMyung"}>
          Passionné dans le monde du design et du développement web j’ai acquis
          de l’expérience dans ce domaine au fur des années. Depuis des années
          je souhaite en apprendre davantage dans le monde du développement Web.
        </p>
        <button
          className={
            "bg-black w-fit px-22 py-16 rounded-[6px] hover:bg-DarkBlue text-white"
          }
        >
          Decouvrir
        </button>
      </div>
    </div>
  );
};
