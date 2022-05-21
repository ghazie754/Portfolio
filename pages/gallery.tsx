import React, { useEffect, useState, FC } from "react";
import { createApi } from "unsplash-js";
// import Image from "next/image";
// import Link from "next/link";

// const myLoader = ({ src, width, quality }) => {
//   return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
// };
// type Photo = {
//   id: number;
//   urls: { large: string; regular: string; raw: string; small: string };
//   color: string | null;
//   width: number;
//   height: number;
//   user: {
//     username: string;
//     name: string;
//   };
// };
//
const api = createApi({
  // Don't forget to set your access token here!
  // See https://unsplash.com/developers
  accessKey: "0DstSeC4Ux8YRdfYMkZ3tB6XGhnnbFIeQlk7RS2e400"
});

// const PhotoComp: React.FC<{ photo: Photo }> = ({ photo }) => {
//   const { user, urls} = photo;
//   const size: number =(Math.floor(Math.random() * 10)+ 50) * 10;
//   return (
//     <div>
//       <Image
//         // loader={myLoader}
//         className="pics"
//         height={size}
//         width={size}
//         src={urls.small}
//         alt={"sdnjlkscamk"}
//       />
//       <Link
//         className="credit"
//         target="_blank"
//         href={`https://unsplash.com/@${user.username}`}
//       >
//         {user.name}
//       </Link>
//     </div>
//   );
// };

const Gallery: FC = () => {
  const [data, setPhotosResponse] = useState(null);

  useEffect(() => {
    api.search
      .getPhotos({ query: "dog" })
      .then((result) => {
        setPhotosResponse(result);
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  }, []);

  if (data === null) {
    return <div>Loading...</div>;
  } else if (data.errors) {
    return (
      <div>
        <div>{data.errors[0]}</div>
        <div>PS: Make sure to set your access token!</div>
      </div>
    );
  } else {
    return (
      <div className="feed">
        <ul className="columnUl">
          {data.response.results.map((photo) => (
            <li key={photo.id} className="li">
              {/* <PhotoComp photo={photo} /> */}
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default Gallery;
