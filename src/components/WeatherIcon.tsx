import { ThreeDots } from "react-loader-spinner"; // Assuming you're using react-loader-spinner for loading animation
import icons from "../assets/icons/index.ts";
import { Box } from "@mui/material";

const weatherRecord: Record<string, number[]> = {
    "clear": [0],
    "sunny1": [1],
    "sunny": [2],
    "cloudy": [3, 45, 48],
    "cloudy rainny": [51, 53, 55, 56, 57, 80, 81],
    "rain": [61, 63, 65, 66, 67, 82],
    "cloudy snow": [71, 73, 85],
    "snow": [75, 77, 86],
    "thunderstorm": [95],

}
type WeatherType = {



    // ThunderstormSlight = 95,

    // ThunderstormSlightHail = 96,
    // ThunderstormHeavyHail = 99,

    // "nigth clear" = 100
}



function WeatherIcon({ weatherCode }) {
    const getIconFilename = (code) => {
        switch (code) {
            case WeatherType.ClearSky:
        }
    };

export enum WeatherType {
    "a" = 0,
    MainlyClear = 1,
    "clear" = 2,
    Overcast = 3,
    Fog = 45,
    RimeFog = 48,
    DrizzleLight = 51,
    DrizzleModerate = 53,
    DrizzleDense = 55,
    FreezingDrizzleLight = 56,
    FreezingDrizzleDense = 57,
    RainSlight = 61,
    RainModerate = 63,
    RainHeavy = 65,
    FreezingRainLight = 66,
    FreezingRainHeavy = 67,
    SnowFallSlight = 71,
    SnowFallModerate = 73,
    SnowFallHeavy = 75,
    SnowGrains = 77,
    RainShowersSlight = 80,
    RainShowersModerate = 81,
    RainShowersViolent = 82,
    SnowShowersSlight = 85,
    SnowShowersHeavy = 86,
    ThunderstormSlight = 95,
    ThunderstormSlightHail = 96,
    ThunderstormHeavyHail = 99
}

function WeatherIcon({ weatherCode }) {
    const icon = weatherCode ? (
        <Box
            component='img'
            sx={{
                display: 'block',
                width: '55%',
                margin: 'auto',
            }}
            src={icons[WeatherType[weatherCode]]} />
    ) : (
        <ThreeDots
            visible={true}
            height={45}
            color="#176087"
            ariaLabel="three-dots-loading"
            wrapperStyle={{ display: "flex", justifyContent: "center" }}
        />
    );

    return icon;
}

export  {WeatherIcon};
