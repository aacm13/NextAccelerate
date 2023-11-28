'use client'
import { useState } from "react";
import Image from 'next/image';

const YouTubeLazyLoad = ({ youtubeID, title, thumbnailOverride }) => {
  const [showVideo, setShowVideo] = useState(false);
  const coverImg = `https://img.youtube.com/vi/${youtubeID}/maxresdefault.jpg`;
  return (
    <div>
      {showVideo ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeID}`}
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={title || "Youtube video"}
          className="w-full aspect-video"
        />
      ) : (
        <button
          type="button"
          onClick={() => setShowVideo(true)}
          className="group relative aspect-[16/9] w-full"
          aria-label={`Play video ${title}`}
        >
          {/* <Image
            src={coverImg}
            width={500}
            height={500}
            alt="Picture of the author"
          /> */}
          {youtubeID && <img
            src={
              thumbnailOverride ||
              coverImg
            }
            alt={title}

          />}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 32 32"
            className="h-2/5 w-1/2 transform transition group-hover:scale-105 absolute right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2"
          >
            <path
              fill="white"
              d="M7 28a1 1 0 0 1-1-1V5a1 1 0 0 1 1.482-.876l20 11a1 1 0 0 1 0 1.752l-20 11A1 1 0 0 1 7 28Z"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default YouTubeLazyLoad;
