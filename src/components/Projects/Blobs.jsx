import React, { useState, useEffect } from 'react';


const Blobs = () => {
    const [blobPositions, setBlobPositions] = useState([]);

    useEffect(() => {
        const generateRandomPositions = () => {
            const positions = [];
            for (let i = 0; i < 6; i++) {
                const position = {
                    top: Math.random() * 200 - 100,
                    left: Math.random() * 400 - 200,
                    delay: Math.random() * 4,
                };
                positions.push(position);
            }
            setBlobPositions(positions);
        };

        generateRandomPositions();
    }, []);

    return (
        <div className="blobs-container">
            {/* Set 1 */}
            <div className="set set1">
                {blobPositions.slice(0, 3).map((position, index) => (
                    <div
                        key={index}
                        className="blob"
                        style={{ top: position.top, left: position.left, animationDelay: `${position.delay}s` }}
                    ></div>
                ))}
            </div>

            {/* Set 2 */}
            <div className="set set2">
                {blobPositions.slice(3).map((position, index) => (
                    <div
                        key={index + 3}
                        className="blob"
                        style={{ top: position.top, left: position.left, animationDelay: `${position.delay}s` }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Blobs;
