import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { fetchCeramics } from '../../services';

// TODO 
// small gap between photos
// photo carousel

const UnstyledCeramics = ({ className }) => {
    const [ceramicsPhotos, setCeramicsPhotos] = useState([]);

    useEffect(() => {
        const ceramics = fetchCeramics();
        ceramics.then(val => {
            setCeramicsPhotos(val)
        })
    }, []);
    
    return (
        <div className={className}>
            <div className="header">🏺 Playing with Mud</div>
            <div className="description">
                <div>Ceramics is one of my favorite hobbies, and I've been practicing it for around 4 years. Here's some of my favorite work so far. </div>
                {ceramicsPhotos && (
                    <div className="photos">
                        {ceramicsPhotos.map(i => (
                            <img src={i} width={150} />
                        ))}
                    </div>
                )}
            </div>
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
  