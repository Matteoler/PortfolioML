import Image from "next/image";
import AOT from "../../assets/images/AOT.png";

export const Presentation = () => {
  return (
    <div className="flex span-gap-1 items-center">
      <div className={"lg:span-w-5 md:span-w-3"}>
        <h1 className="font-Neutro font-bold text-40 text-DarkBlue">
          MATTEO LEROYER
        </h1>
        <p className="font-SongMyung text-28">Bienvenue sur mon Portfolio</p>
      </div>
      <Image
        src={AOT}
        alt="avatar"
        className="lg:span-w-wide-7 md:span-w-5 h-[85%] object-cover"
      />
    </div>
  );
};
