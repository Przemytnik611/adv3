
// Source - https://stackoverflow.com/a/78155941
// Posted by ktt, modified by community. See post 'Timeline' for change history
// Retrieved 2026-09-10, License - CC BY-SA 4.0

import React, { useRef, useEffect, useState } from "react";

// interface ScrollVideoProps {
//   src: string;
//   heightPerSecond: number;
//   CoverElement?: React.ReactNode;
//   belowNav: boolean;
// }

// const MapStory=()=>({
//   src,
//   heightPerSecond,
//   CoverElement,
//   belowNav = false,
// }) => {
//   const videoRef = useRef<HTMLVideoElement | null>(null);
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const [containerHeight, setContainerHeight] = useState("400vh"); // Default value
//   const [videoEnded, setVideoEnded] = useState(false);

//   const onVideoEnd = () => {
//     setVideoEnded(true);
//   };

//   useEffect(() => {
//     let lastScroll = window.scrollY;

//     const handleScroll = () => {
//       if (!videoRef.current || !containerRef.current) return;

//       const containerTop = containerRef.current.offsetTop;
//       const containerHeight = containerRef.current.offsetHeight;
//       const containerBottom = containerTop + containerHeight;

//       const scrollPos = window.scrollY;
//       const viewportBottom = scrollPos + window.innerHeight;

//       // Check if video is within the viewport
//       const isVideoInView =
//         containerTop < viewportBottom && containerBottom > scrollPos;

//       if (isVideoInView && !videoRef.current.paused) {
//         videoRef.current.pause();
//       }

//       const percentageScrolled = (scrollPos - containerTop) / containerHeight;
//       if (Number.isFinite(percentageScrolled) && videoRef.current.duration) {
//         const targetTime = percentageScrolled * videoRef.current.duration;

//         // Override autoplay when scrolling down, starting from autoplayed time if it exceeds scrolled amount. Same but opposite for scrolling up
//         if (
//           (videoRef.current.currentTime < targetTime &&
//             scrollPos > lastScroll) ||
//           (videoRef.current.currentTime > targetTime && scrollPos < lastScroll)
//         ) {
//           videoRef.current.currentTime = targetTime;
//           setVideoEnded(false);
//         }
//       }

//       lastScroll = window.scrollY;
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const handleVideoLoaded = () => {
//     if (videoRef.current) {
//       setContainerHeight(`${videoRef.current.duration * heightPerSecond}px`);
//     }
//   };

//   useEffect(() => {
//     const videoElement = videoRef.current;
//     if (videoElement) {
//       if (videoElement.readyState >= 1) {
//         handleVideoLoaded(); // Call directly if metadata is already loaded
//       } else {
//         videoElement.addEventListener("loadedmetadata", handleVideoLoaded);
//       }

//       return () => {
//         videoElement.removeEventListener("loadedmetadata", handleVideoLoaded);
//       };
//     }
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       style={{
//         height: containerHeight,
//         width: "100%",
//         position: "relative",
//       }}
//     >
//       <video
//         muted
//         playsInline
//         controls={false}
//         autoPlay
//         ref={videoRef}
//         onEnded={onVideoEnd}
//         style={{
//           position: "sticky",
//           top: belowNav ? "68px" : "0",
//           width: "100%",
//           height: "100vh",
//           objectFit: "cover",
//         }}
//       >
//         <source src="/videos/12.mp4" /> Your browser does not support the
//         video tag.
//       </video>
//     </div>
//   );
// };

// export default MapStory;


function MapStory() {
  return (
    <section className="map-section" id="trasy">
      <div className="map-sticky">
        <div className="map-background" />
        <div className="map-video-wrap">
          <video
            className="map-video"
            src="/videos/12.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        </div>
        <div className="map-vignette" />
        <div className="map-title">
          <h2>ONE ROAD <br /> MANY STORIES</h2>
          <small>RUSZAJ PRZED SIEBIE.</small>
        </div>
      </div>
    </section>
  );
}
export default MapStory