const videoTime = "00:02:21.000";
const timeFromTheStart = "00:04:11.000";
const secondsSkipped = parseVideoDuration(timeFromTheStart);
const videoDurationSeconds = parseVideoDuration(videoTime); // Helper function to parse time and calculate duration in seconds
const videoElement = document.querySelector("video");
const main = document.querySelector("main");
const backgroundColorElement = document.querySelector("main div:nth-child(1)");
const videoWrapper = document.querySelector("main > div > div ");
async function fetchSubtitles() {
    const response = await fetch("../subtitles.json");
    const data = await response.json();

    const subtitlesContainer = document.createElement("div");
    subtitlesContainer.classList.add("subtitles-container");
    document.querySelector("main div div").appendChild(subtitlesContainer);

    data.subtitles.forEach((subtitle, index) => {
        let startTime, endTime, styles, subtitleElement, keyframes, switchCase, color, img, position, bouncing, bgColor;
        if (subtitle.text) {
            switchCase = "text";
            startTime = subtitle.startTime;
            endTime = subtitle.endTime;
            styles = subtitle.styles;
            const { text, icon } = subtitle;
            subtitleElement = document.createElement("p");
            if (icon) {
                subtitleElement.textContent = icon + " " + text;
            } else {
                subtitleElement.textContent = text;
            }
        } else if (subtitle.backgroundSound) {
            switchCase = "backgroundSound";
            // SOUNDS that decide the color of the background
            startTime = subtitle.startTime;
            endTime = subtitle.endTime;
            styles = subtitle.styles;

            const newDiv = document.createElement("div");
            newDiv.classList.add("colorDiv");
            main.insertBefore(newDiv, main.firstChild); // Prepend new div before each child of main
            // create new div and place it in de main
            subtitleElement = newDiv;
            color = subtitle.color;
            if (subtitle.bouncing !== undefined) {
                bouncing = subtitle.bouncing;
            } else {
                bouncing = "";
            }
        } else if (subtitle.soundOnScreen) {
            switchCase = "soundOnScreen";
            // Sounds that display an image on the screen
            startTime = subtitle.startTime;
            endTime = subtitle.endTime;
            // styles = subtitle.styles;
            subtitleElement = document.createElement("img");
            subtitleElement.src = subtitle.url;
            img = subtitle.img;
            position = subtitle.position;
        }
        let startTimeSeconds = parseVideoDuration(startTime);
        let endTimeSeconds = parseVideoDuration(endTime);
        startTimeSeconds = startTimeSeconds - secondsSkipped;
        endTimeSeconds = endTimeSeconds - secondsSkipped;

        const startTimePercentage = (startTimeSeconds / videoDurationSeconds) * 100;
        const animationName = `subtitle-animation-${index}`;

        // Calculate delay based on the start time of the subtitle
        const delaySeconds = startTimeSeconds;

        subtitleElement.style.animation = `${animationName} ${endTimeSeconds - startTimeSeconds}s forwards`;
        subtitleElement.style.animationDelay = `${delaySeconds}s`;
        subtitleElement.style.animationPlayState = "paused";

        switch (switchCase) {
            case "text":
                applyStyles(subtitleElement, styles);
                if (subtitle.position) {
                    videoWrapper.appendChild(subtitleElement);
                    subtitleElement.style.position = "absolute";
                    subtitleElement.style.top = subtitle.position.top;
                    if (subtitle.position.right) {
                        subtitleElement.style.right = subtitle.position.right;
                    } else {
                        // console.log("Left:", subtitle.position.left);
                        const left = subtitle.position.left;
                        const number = parseInt(left, 10);
                        const right = 100 - number;
                        // console.log(right);
                        subtitleElement.style.right = `${right}%`;
                    }
                    keyframes = `
                @keyframes ${animationName} {
                    0% {
                        opacity: 0;

                    }
                    ${startTimePercentage}% {
                        opacity: 0;
    
                    }
                    ${startTimePercentage + 0.1}% {
                        opacity: 1;

                    }
                    99% {
                        opacity: 1;
            
                    }
                    100% {
                        opacity: 0;

                    }
                }
            `;
                } else {
                    subtitlesContainer.appendChild(subtitleElement);
                    keyframes = `
                @keyframes ${animationName} {
                    0% {
                        opacity: 0;
                        height: 1px;
                    }
                    ${startTimePercentage}% {
                        opacity: 0;
                        height: 1px;
                    }
                    ${startTimePercentage + 0.1}% {
                        opacity: 1;
                        height: fit-content;
                    }
                    99% {
                        opacity: 1;
                        height: fit-content;
                    }
                    100% {
                        opacity: 0;
                        height: 1px;
                    }
                }
            `;
                }

                break;
            case "backgroundSound":
                applyStyles(subtitleElement, styles);
                console.log(bouncing);
                if (subtitle.keyFrames) {
                    console.log(subtitle.keyFrames);
                    if (subtitle.keyFrames === "flikkering") {
                        keyframes = `
                        @keyframes ${animationName} {
                            0%, 10%, 20%, 30%, 40%, 50%, 60%, 70%, 80%, 90%{
                                background-color: ${color};
                                opacity: 1;
                            }
                            5%, 15%, 25%, 35%, 45%, 55%, 65%, 75%, 85%, 95%{
                                background-color:  black;
                            }
                            100%{
                                background-color: ${color};
                                opacity: 0;
                            }
                        }
                    `;
                    } else if (subtitle.keyFrames === "animatedGradient") {
                        keyframes = `
                        @keyframes ${animationName} {
                            0% {
                                scale: 1;
                                opacity: 1;
                            }
                            99%{
                                scale: 2.8;
                                opacity: 1;
                            }
                            100%{
                                background-color: ${color};
                                opacity: 0;
                            }
                        }
                      `;
                    } else if (subtitle.keyFrames === "opbouw") {
                        keyframes = `
                        @keyframes ${animationName} {
                            0% {
                                background-color: black
                                opacity: 1;
                            }
                            99%{
                                background-color: ${color};
                                opacity: 1;
                            }
                            100%{
                                opacity: 0;
                            }
                        }
                      `;
                    }
                } else {
                    if (bouncing !== "") {
                        if (bouncing === true) {
                            console.log(bouncing);
                            keyframes = `
                        @keyframes ${animationName} {
                            0%{
                                background-color: rgb(183, 153, 108);
                            }
                            2.5%, 5%, 7.5%, 10%, 12.5%, 15%, 17.5%, 20%, 22.5%, 
                            25%, 27.5%, 30%, 32.5%, 35%, 37.5%, 40%, 42.5%, 45%, 47.5%, 
                            50%, 52.5%, 55%, 57.5%, 60%, 62.5%, 65%, 67.5%, 70%, 72.5%, 
                            75%, 77.5%, 80%, 82.5%, 85%, 87.5%, 90%, 92.5%, 95% {
                                background-color: rgb(94, 73, 47);
                            }
                            2.5%, 7.5%, 12.5%, 17.5%, 22.5%, 27.5%, 32.5%, 37.5%, 42.5%, 47.5%, 
                            52.5%, 57.5%, 62.5%, 67.5%, 72.5%, 77.5%, 82.5%, 87.5% {
                                background-color: ${color};
                            }
                            92.5%, 99%{
                                background-color: ${color};
                            }
                          99%{
                            opacity: 1;
                          }
                            100%{
                                opacity: 0;
                            }
                        }
                    `;
                        } else {
                            console.log(bouncing);
                            keyframes = `
                        @keyframes ${animationName} {
                            0% {
                                background-color: ${color};
                            }
                            20% {
                                background-color: ${color};
                            }
                            40% {
                                background-color: color-mix(in srgb, rgb(183, 153, 108) 20%, ${color});
                            }
                            80% {
                                background-color: ${color};
                            }
                            99%{
                                opacity: 1;
                            }
                            100% {
                                opacity: 0;
                            }
                        }
                    `;
                        }
                    } else {
                        keyframes = `
                        @keyframes ${animationName} {
                            0% {
                                opacity: 0;
                            }
                            10% {
                                opacity: 1;
                            }
                            90% {
                                opacity: 1;
                            }
                            100% {
                                opacity: 0;
                            }
                        }
                    `;
                    }
                }
                break;
            case "soundOnScreen":
                videoWrapper.appendChild(subtitleElement);
                subtitleElement.style.top = position.top;
                if (position.right) {
                    subtitleElement.style.right = position.right;
                } else {
                    const left = position.left;
                    const number = parseInt(left, 10);
                    const right = 100 - number;
                    subtitleElement.style.right = `${right}%`;
                }
             
                console.log("ani", subtitle.animation);
                if (subtitle.animation) {
                    keyframes = `
                    @keyframes ${animationName} {
                        0% {
                            opacity: 0;
                            top: ${position.top};
                            right: ${position.right};
                        }
                        10% {
                            opacity: 1;
                        }
                        40% {
                            top: 65%;
                            right: 45%;
                        }
                        70% {
                            top: 60%;
                            right: 45%;
                        }
                        90% {
                            opacity: 1;
                            top: 58%;
                            right: 37%;
                        }
                        100% {
                            top: 60%;
                            right: 40%;
                            opacity: 0;
                        }
                    }
                `;
                } else {
                    keyframes = `
                    @keyframes ${animationName} {
                        0% {
                            opacity: 0;
                            top: ${position.top};
                            right: ${position.right};
                        }
                        10% {
                            opacity: 1;
                        }
                        90% {
                            opacity: 1;
                        }
                        100% {
                            opacity: 0;
                        }
                    }
                `;
                }

                break;

            default:
                break;
        }

        const style = document.createElement("style");
        style.textContent = keyframes;
        document.head.appendChild(style);
    });

    // Play subtitles animation when video starts playing
    videoElement.addEventListener("play", () => {
        subtitlesContainer.querySelectorAll("p").forEach((subtitleElement) => {
            subtitleElement.style.animationPlayState = "running";
        });
        videoWrapper.querySelectorAll("img").forEach((subtitleElement) => {
            subtitleElement.style.animationPlayState = "running";
            console.log(subtitleElement);
        });
        videoWrapper.querySelectorAll("p").forEach((subtitleElement) => {
            subtitleElement.style.animationPlayState = "running";
            console.log(subtitleElement);
        });
        // backgroundColorElement.style.animationPlayState = "running";
        document.querySelectorAll("main div").forEach((subtitleElement) => {
            subtitleElement.style.animationPlayState = "running";
        });
    });

    // Pause subtitles animation when video is paused
    videoElement.addEventListener("pause", () => {
        subtitlesContainer.querySelectorAll("p").forEach((subtitleElement) => {
            subtitleElement.style.animationPlayState = "paused";
        });
        // backgroundColorElement.style.animationPlayState = "paused";
        videoWrapper.querySelectorAll("p").forEach((subtitleElement) => {
            subtitleElement.style.animationPlayState = "paused";
            console.log(subtitleElement);
        });
        videoWrapper.querySelectorAll("img").forEach((subtitleElement) => {
            subtitleElement.style.animationPlayState = "paused";
        });
        document.querySelectorAll("main div").forEach((subtitleElement) => {
            subtitleElement.style.animationPlayState = "paused";
        });
    });
}

function parseVideoDuration(timeString) {
    const [hours, minutes, seconds] = timeString.split(":").map(parseFloat);
    return hours * 3600 + minutes * 60 + seconds;
}

fetchSubtitles();
const button = document.querySelector("button");

button.addEventListener("click", () => {
    const p = document.querySelector("main div div p");
    if (p.style.animationPlayState === "paused") {
        videoElement.play();
        button.textContent = "Pause";
    } else {
        videoElement.pause();
        button.textContent = "Play";
    }
});

function applyStyles(element, styles) {
    if (!Array.isArray(styles)) return; // Ensure styles is an array

    styles.forEach((style) => {
        const { line, var: value } = style; // Destructure style object
        switch (line) {
            case "color":
                element.style.color = value;
                break;
            case "font-weight":
                element.style.fontWeight = value;
                break;
            case "background-color":
                element.style.backgroundColor = value;
                break;
            case "background":
                element.style.background = value;
                break;
            case "font":
                element.style.fontFamily = value;
                break;
            case "background-image":
                element.style.backgroundImage = value;
                break;
            case "font-size":
                element.style.fontSize = value;
                break;
            case "position":
                element.style.alignSelf = value;
                break;
            case "opacity":
                element.style.opacity = value;
                break;
            case "animation-timing-function":
                element.style.animationTimingFunction = value;
                break;
            case "filter":
                element.style.filter = value;
                break;
            default:
                break;
        }
    });
}
