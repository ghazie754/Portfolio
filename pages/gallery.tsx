/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { createApi } from "unsplash-js";
import Image from "next/image";
import Link from "next/link";

type Photo = {
  id: number;
  width: number;
  height: number;
  urls: { large: string; regular: string; raw: string; small: string };
  color: string | null;
  user: {
    username: string;
    name: string;
  };
};

const api = createApi({
  // Don't forget to set your access token here!
  // See https://unsplash.com/developers
  accessKey: "0DstSeC4Ux8YRdfYMkZ3tB6XGhnnbFIeQlk7RS2e400"
});

const PhotoComp: React.FC<{ photo: Photo }> = ({ photo }) => {
  const { user, urls } = photo;

  return (
    <>
      <Image
        className="imgga"
        height={"400"}
        width={"400"}
        src={urls.regular}
        alt={"sdnjlkscamk"}
      />
      <Link
        className="credit"
        target="_blank"
        href={"https://unsplash.com/@${user.username}"}
      />
      {user.name}
    </>
  );
};

function gallery() {
  const [data, setPhotosResponse] = useState(null);

  useEffect(() => {
    api.search
      .getPhotos({ query: "cat", orientation: "landscape" })
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
              <PhotoComp photo={photo} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default gallery;
