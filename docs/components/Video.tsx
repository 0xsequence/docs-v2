import React, { useEffect, useRef } from 'react';

const Video = (props: any) => {
    // Using useRef to get direct references to the DOM elements
    const imageRef = useRef<any>(null);
    const videoRef = useRef<any>(null);
    const width = props.width ? props.width : '560'
    const height = props.height ? props.height : '315'

    useEffect(() => {
        // Defining the click event handler function
        const handleClick = () => {
            if (videoRef.current && imageRef.current) {
                videoRef.current.style.display = 'block';
                imageRef.current.style.display = 'none';
                // Modify the video src to start playing
                videoRef.current.src += "?autoplay=1";
            }
        };

        // Adding the event listener to the image
        const image = imageRef.current;
        image.addEventListener('click', handleClick);

        // Cleanup function to remove the event listener
        return () => {
            image.removeEventListener('click', handleClick);
        };
    }, []); // The empty dependency array ensures this effect runs only once after initial render

    return (
        <div className="video-container">
            <img
                ref={imageRef} // Assigning the ref to the image
                className="preview-image"
                width={width}
                height={height}
                src={props.videoPreviewSrc}
                alt="Preview"
            />
            <video
                ref={videoRef} // Assigning the ref to the video
                className="video-frame"
                width={width}
                height={height}
                controls
                muted
                src={props.videoSrc}
                //@ts-ignore
                type="video/mp4"
                style={{ display: 'none' }} // Initially hiding the video
            />
        </div>
    );
};

export default Video;
