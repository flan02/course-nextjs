import TvshowCard from "./TvshowCard";
import "../app/loading";

async function getImage() {
  const res = await fetch("http://localhost:3000/api/cloudinary");
  const image = await res.json();
  console.log(image);
  return image;

  /*console.log(image);
  setImage(image);*/
}

async function TvshowGet() {
  const image = await getImage();
  //console.log("the image", image);
  return (
    <>
      {image &&
        image.map((item, index) => <TvshowCard item={item} key={index} />)}
    </>
  );
}

export default TvshowGet;
