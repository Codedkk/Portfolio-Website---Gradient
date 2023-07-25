import React, { useState, useEffect } from 'react';


const Blobs = () => {
    const [blobPositions, setBlobPositions] = useState([]);

    useEffect(() => {
        // Generate random positions for each blob in each set
        const generateRandomPositions = () => {
            const positions = [];
            for (let i = 0; i < 6; i++) {
                const position = {
                    top: Math.random() * 200 - 100, // Randomize vertical position (-100px to 100px)
                    left: Math.random() * 400 - 200, // Randomize horizontal position (-200px to 200px)
                    delay: Math.random() * 4, // Randomize delay for animation (0s to 4s)
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
                        key={index + 3} // Adding offset to avoid duplicate keys
                        className="blob"
                        style={{ top: position.top, left: position.left, animationDelay: `${position.delay}s` }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Blobs;
