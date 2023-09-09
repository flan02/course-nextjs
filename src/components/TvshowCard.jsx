import Image from "next/image";

function TvshowCard({ item, index }) {
  return (
    <div>
      <div key={index} className="m-4 border border-slate-200">
        <Image
          className="h-96 object-fit"
          src={item}
          alt={item}
          priority={true}
          width={400}
          height={400}
        />
      </div>
    </div>
  );
}

export default TvshowCard;
