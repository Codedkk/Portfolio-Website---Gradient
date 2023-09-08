import React, { useEffect, useState } from "react";

const LETTERS = "abcdfeghijklmnopqrstuvwxyz";

const Shuffler = () => {
    const [currentWord, setCurrentWord] = useState("");
    const [counter, setCounter] = useState(0);

    const arrValues = ["functionality", "performance", "accessibility", "functionality", "optimization", "engagement", "interactivity"];
    const shuffleMode = "random";
    const maxDisplayLength = 2;
    useEffect(() => {
        const delay = 3000;

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
                            return letter;
                        }
                        if (idx < iterations) {
                            return letter;
                        }
                        if (shuffleMode === "lastword") return prevWord.charAt(idx);
                        else return getRandomLetter(prevWord, idx);
                    })
                    .join("")
            );

            if (iterations >= txtLength) {
                clearInterval(interval);
            }
            iterations += 1;
        }, 60);
    };

    const getRandomLetter = (prevWord, idx) => {
        if (idx >= maxDisplayLength) {
            return prevWord.charAt(idx);
        } else {
            return LETTERS[Math.floor(Math.random() * LETTERS.length)];
        }
    };

    return <span className="shuffle">{currentWord}</span>;
};

export default Shuffler;
