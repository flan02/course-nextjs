import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { RiCircleFill } from "react-icons/ri";
function TvshowCard({ item, index }) {
  console.log(item.title);
  return (
    <div className="w-max mx-auto md:mx-1 mb-4">
      <div className="w-max opacity-100 border border-slate-600 sm:opacity-60 hover:opacity-100 hover:border-blue-300">
        <Image
          className="w-72 h-auto"
          sizes="25vw"
          src={item.url_image}
          alt={item.title}
          priority={true}
          width="0"
          height="0"
        />
      </div>
      <figure className="flex flex-col px-2 py-2 bg-black opacity-75 text-blue-100 w-72 border border-slate-800">
        <figcaption className="flex justify-between items-center w-full mb-1 pt-2">
          <h6 className="w-max mb-2 text-xl">{item.title}</h6>
        </figcaption>
        <h5 className="w-max text-sm mb-1 pl-1">
          SEASONS : <span className="text-lg text-blue-400">{item.season}</span>
        </h5>
        <div className="flex mb-2">
          <h6 className="text-sm pl-1">status: {item.status} &nbsp;</h6>
          {item.status === "active" ? (
            <RiCircleFill className="text-green-400 text-md" />
          ) : (
            <RiCircleFill className="text-red-600 text-md" />
          )}
        </div>
        <div className="flex justify-between pr-2">
          <h6 className="text-sm pl-1">Total Chapters: {item.chapter}</h6>
          <div className="flex -mt-1">
            <AiFillStar className="text-yellow-300 text-2xl" />
            <span> &nbsp; {item.average}</span>
          </div>
        </div>
      </figure>
    </div>
  );
}

export default TvshowCard;
