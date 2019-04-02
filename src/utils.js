const utils = {
    range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),

    colors: {
        playerA: "crimson",
        playerB: "darkblue",
        none: "#efefef"
    }
};



export default utils;
