import { ThreeDots } from "react-loader-spinner"; // Assuming you're using react-loader-spinner for loading animation
import icons from "../assets/icons/index.ts";
import { Box } from "@mui/material";

export enum WeatherType {
    ClearSky = 0,
    MainlyClear = 1,
    PartlyCloudy = 2,
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

export enum WeatherTranslation {
    Sole = "Clear",
    SoleConNuvoleEPioggia = "Mainly clear, partly cloudy, and overcast",
    SoloNuvole = "Mainly clear, partly cloudy, and overcast",
    LunaPiena = "Full Moon",
    LunaConNuvole = "Night Cloudy",
    SoloMezzaLuna = "Nigth Clear",
    LunaConNuvoleEPioggia = "Nigth Rain",
    MezzaLunaConNuvola = "Nigth",
    NuvoleConPioggia = "Rain",
    SoleConNuvole = "Sunny",
    SoleConNuvola = "Sunny1",
    NuvolaConFulmine = "Thunder",
    NuvoleConPioggiaEFulmine = "Thunderstorm"
}

function WeatherIcon({ weatherCode }) {
    const getIconFilename = (weather) => {
        switch (weather) {
            case WeatherTranslation.Sole:
                return icons.clear;
            case WeatherTranslation.SoleConNuvoleEPioggia:
                return icons.cloudrain;
            case WeatherTranslation.SoloNuvole:
                return icons.cloudy;
            case WeatherTranslation.LunaPiena:
                return icons.fullmoon;
            case WeatherTranslation.LunaConNuvole:
                return icons.iconCloud; // Assuming this is a generic cloudy night icon
            case WeatherTranslation.SoloMezzaLuna:
                return icons.nigthclear;
            case WeatherTranslation.LunaConNuvoleEPioggia:
                return icons.nigthrain;
            case WeatherTranslation.MezzaLunaConNuvola:
                return icons.nigth;
            case WeatherTranslation.NuvoleConPioggia:
                return icons.rain;
            case WeatherTranslation.SoleConNuvole:
                return icons.sunny;
            case WeatherTranslation.SoleConNuvola:
                return icons.sunny1;
            case WeatherTranslation.NuvolaConFulmine:
                return icons.thunder;
            case WeatherTranslation.NuvoleConPioggiaEFulmine:
                return icons.thunderstorm;
            default:
                return icons.clear; // Default icon
        }
    };

    const icon = weatherCode ? (
        <Box
            component='img'
            sx={{
                display: 'block',
                width: '55%',
                margin: 'auto',
            }}
            src={getIconFilename(weatherCode)} />
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

export default WeatherIcon;
