import React from 'react';

export default function InfoComp({ info }) {
    console.log(info);
    const firstWay = info.ways[0];
    const differences = info.differences;

    return (
        <>
            <div>
                <h3>{firstWay.title}</h3>
            </div>

            <div>
                <h3>{differences.easy}</h3>
            </div>
        </>
    );
}
