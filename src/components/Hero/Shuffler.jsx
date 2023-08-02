import React, { useEffect, useState } from "react";

const LETTERS = "abcdfeghijklmnopqrstuvwxyz";

const Shuffler = () => {
    const [currentWord, setCurrentWord] = useState("");
    const [counter, setCounter] = useState(0);

    const arrValues = ["functionality", "performance", "accessibility", "functionality", "optimization", "engagement", "interactivity"];
    const shuffleMode = "random"; // or "lastword"
    const maxDisplayLength = 2; // maximum number of letters displayed

    useEffect(() => {
        const delay = 4000; // delay between each word shuffle

        const shuffleArray = (array) => {
            let currentIndex = array.length;
            let temporaryValue, randomIndex;

            while (currentIndex !== 0) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }

            return array;
        };

        const shuffleAll = () => {
            const shuffledValues = shuffleArray(arrValues);
            const currentVal = shuffledValues[counter];

            shuffleWord(currentVal);

            let nextCounter = counter + 1;
            if (nextCounter === arrValues.length) {
                nextCounter = 0;
            }
            setCounter(nextCounter);

            setTimeout(shuffleAll, delay);
        };

        setTimeout(shuffleAll, 0);
    }, []);

    const shuffleWord = (word) => {
        let iterations = 0;
        const txtLength = word.length;

        const interval = setInterval(() => {
            setCurrentWord((prevWord) =>
                word
                    .split("")
                    .map((letter, idx) => {
                        if (idx === 0) {
                            // return first letter straight away
                            return letter;
                        }
                        if (idx < iterations) {
                            // return letters to this position
                            return letter;
                        }
                        // return random letter (or letter at this position from previous word)
                        if (shuffleMode === "lastword") return prevWord.charAt(idx);
                        else return getRandomLetter(prevWord, idx);
                    })
                    .join("")
            );

            if (iterations >= txtLength) {
                // stop when we have completed the word
                clearInterval(interval);
            }

            // number of steps to take on each iteration
            iterations += 1;
        }, 60);
    };

    const getRandomLetter = (prevWord, idx) => {
        if (idx >= maxDisplayLength) {
            // limit the displayed random letters
            return prevWord.charAt(idx);
        } else {
            return LETTERS[Math.floor(Math.random() * LETTERS.length)];
        }
    };

    return <span className="shuffle">{currentWord}</span>;
};

export default Shuffler;
