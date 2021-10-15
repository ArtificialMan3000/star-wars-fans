import React from 'react';

const Description = (props) => {
    return (
        <>
            <p className="episode-num">Episode {props.episodeId}</p>
            <div className="opening">{props.openingCrawl}</div>
        </>
    );
};

export { Description };
