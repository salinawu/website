import React, { useCallback, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

import { fetchCeramics } from '../../services';

// TODO 
// small gap between photos
// photo carousel
// photo height/width aspect ratios

const LEFT_KEY = "ArrowLeft";
const RIGHT_KEY = "ArrowRight";
const UnstyledCeramics = ({ className }) => {
    const [ceramicsPhotos, setCeramicsPhotos] = useState([]);
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(null);

    useEffect(() => {
        const ceramics = fetchCeramics();
        ceramics.then(val => {
            setCeramicsPhotos(val)
        })
    }, []);

    useEffect(() => {
        window.addEventListener('keyup', onKeyUp)
        // Remove event listeners on cleanup
        return () => {
            window.removeEventListener('keyup', onKeyUp)
        }
    }, [currentPhotoIndex]);

    const handleClickAway = useCallback(() => {
        setCurrentPhotoIndex(null);
    }, []);

    const goToPreviousPhoto = useCallback(() => {
        if (currentPhotoIndex > 0) {
            setCurrentPhotoIndex(currentPhotoIndex - 1);
        }
    }, [currentPhotoIndex]);

    const goToNextPhoto = useCallback(() => {
        if (currentPhotoIndex < (ceramicsPhotos.length - 1)) {
            setCurrentPhotoIndex(currentPhotoIndex + 1);
        }
    }, [currentPhotoIndex]);

    const handleClickImage = useCallback(index => {
        setCurrentPhotoIndex(index);
    }, []);
    
    const selectedPhoto = useMemo(() => ceramicsPhotos[currentPhotoIndex], [currentPhotoIndex]);

    const onKeyUp = useCallback(({ key })  => {
        if (key == LEFT_KEY) {
            goToPreviousPhoto();
        } else if (key == RIGHT_KEY) {
            goToNextPhoto();
        }
    }, [currentPhotoIndex]);
    
    return (
        <div className={className}>
            <div className="header">🏺 Playing with Mud</div>
            <div className="description">
                <div>Ceramics is one of my favorite hobbies, and I've been practicing it for around 4 years. Here's some of my favorite work so far. </div>
                {ceramicsPhotos && (
                    <div className="photos">
                        {ceramicsPhotos.map((imgSrc, index) => (
                            <img
                                key={index}
                                src={imgSrc}
                                width={150}
                                onClick={() => handleClickImage(index)}
                            />
                        ))}
                    </div>
                )}
            </div>
            {selectedPhoto && (
                <>
                    <div className="photoCarouselModal">
                        {currentPhotoIndex > 0 && <span className="leftCaret" onClick={goToPreviousPhoto}>^</span>}
                        <img className="selectedPhoto" src={selectedPhoto} />
                        {currentPhotoIndex < (ceramicsPhotos.length - 1) && <span className="rightCaret" onClick={goToNextPhoto}>^</span>}
                    </div>
                    <div id="opaque" onClick={handleClickAway}></div> 
                </>
            )}
            
        </div>
    );
};

const Ceramics = styled(UnstyledCeramics)`
    .header {
        font-size: 32px;
    }

    .description {
        padding-top: 20px;
        padding-bottom: 20px;
        font-size: 16px;
    }

    .photoCarouselModal {
        display: flex;
        align-items: center;

        position: fixed;
        width: 400px; // TODO figure out a better aspect ratio
        top: 50%;
        left: 50%;
        transform: translate(-20%, -50%);
        z-index: 1;

        .selectedPhoto {
            width: 100%;
            border-radius: 12px;
        }

        .leftCaret {
            color: white;
            font-size: 32px;
            transform: rotateZ(270deg);
        }

        .rightCaret {
            color: white;
            font-size: 32px;
            transform: rotateZ(90deg);
        }
    }

    #opaque {
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        opacity: .8;
        background-color: black;
    }
    * html #opaque {
        position: absolute;
    }

    .photos {
        padding-top: 30px;
        /* Prevent vertical gaps */
        line-height: 0;
         
        -webkit-column-count: 5;
        -webkit-column-gap:   0px;
        -moz-column-count:    5;
        -moz-column-gap:      0px;
        column-count:         5;
        column-gap:           0px;  
      }
      
    .photos img {
        /* Just in case there are inline attributes */
        width: 100% !important;
        height: auto !important;
    }

    @media (max-width: 1200px) {
        .photos {
            -moz-column-count:    4;
            -webkit-column-count: 4;
            column-count:         4;
        }
    }
    @media (max-width: 1000px) {
        .photos {
            -moz-column-count:    3;
            -webkit-column-count: 3;
            column-count:         3;
        }
    }
    @media (max-width: 800px) {
        .photos {
            -moz-column-count:    2;
            -webkit-column-count: 2;
            column-count:         2;
        }
    }
    @media (max-width: 400px) {
        .photos {
            -moz-column-count:    1;
            -webkit-column-count: 1;
            column-count:         1;
        }
    }
`;

export default Ceramics;
  