const videoTime = "00:02:21.000";
const timeFromTheStart = "00:04:11.000";
const secondsSkipped = parseVideoDuration(timeFromTheStart);
const videoDurationSeconds = parseVideoDuration(videoTime); // Helper function to parse time and calculate duration in seconds
const videoElement = document.querySelector("video");
const backgroundColorElement = document.querySelector("main div:nth-child(1)");

async function fetchSubtitles() {
    const response = await fetch("../subtitles.json");
    const data = await response.json();

    const subtitlesContainer = document.createElement("div");
    subtitlesContainer.classList.add("subtitles-container");
    document.querySelector("main div div").appendChild(subtitlesContainer);

    data.subtitles.forEach((subtitle, index) => {
        let startTime, endTime, styles, subtitleElement, keyframes, switchCase, color;
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
            // styles = subtitle.styles;
            subtitleElement = backgroundColorElement;
            color = subtitle.color;
        } else if (subtitle.soundOnScreen) {
            switchCase = "soundOnScreen";
            // Sounds that display an image on the screen
            startTime = subtitle.startTime;
            endTime = subtitle.endTime;
            styles = subtitle.styles;
            subtitleElement = document.createElement("img");
            const { img, position } = subtitle;
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
                        display: none;
                    }
                }
            `;

                break;
            case "backgroundSound":
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
                    100% {
                        background-color: rgb(183, 153, 108);
                    }
                }
            `;
                break;
            case "soundOnScreen":
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
        backgroundColorElement.style.animationPlayState = "running";
    });

    // Pause subtitles animation when video is paused
    videoElement.addEventListener("pause", () => {
        subtitlesContainer.querySelectorAll("p").forEach((subtitleElement) => {
            subtitleElement.style.animationPlayState = "paused";
            backgroundColorElement.style.animationPlayState = "paused";
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
            case "font":
                // element.style.backgroundColor = value;
                break;
            case "background-image":
                element.style.backgroundImage = value;
                break;
            case "font-size":
                element.style.fontSize = value;
                break;
            default:
                break;
        }
    });
}
