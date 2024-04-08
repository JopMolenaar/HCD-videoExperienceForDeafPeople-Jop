const videoTime = "00:02:21.000";
const videoDurationSeconds = parseVideoDuration(videoTime); // Helper function to parse time and calculate duration in seconds
const videoElement = document.querySelector("video");
async function fetchSubtitles() {
    const response = await fetch("../subtitles.json");
    const data = await response.json();

    const subtitlesContainer = document.createElement("div");
    subtitlesContainer.classList.add("subtitles-container");
    document.querySelector("main div").appendChild(subtitlesContainer);

    data.subtitles.forEach((subtitle, index) => {
        const { startTime, endTime, text, styles } = subtitle;

        const subtitleElement = document.createElement("p");
        subtitleElement.textContent = text;

        const startTimeSeconds = parseVideoDuration(startTime);
        const endTimeSeconds = parseVideoDuration(endTime);

        const startTimePercentage = (startTimeSeconds / videoDurationSeconds) * 100;
        const animationName = `subtitle-animation-${index}`;

        // Calculate delay based on the start time of the subtitle
        const delaySeconds = startTimeSeconds;

        subtitleElement.style.animation = `${animationName} ${endTimeSeconds - startTimeSeconds}s forwards`;
        subtitleElement.style.animationDelay = `${delaySeconds}s`;
        subtitleElement.style.animationPlayState = "paused";
        applyStyles(subtitleElement, styles);

        const keyframes = `
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

        const style = document.createElement("style");
        style.textContent = keyframes;
        document.head.appendChild(style);

        subtitlesContainer.appendChild(subtitleElement);
    });

    // Play subtitles animation when video starts playing
    videoElement.addEventListener("play", () => {
        subtitlesContainer.querySelectorAll("p").forEach((subtitleElement) => {
            subtitleElement.style.animationPlayState = "running";
        });
    });

    // Pause subtitles animation when video is paused
    videoElement.addEventListener("pause", () => {
        subtitlesContainer.querySelectorAll("p").forEach((subtitleElement) => {
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
