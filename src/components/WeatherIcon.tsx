import { ThreeDots } from "react-loader-spinner"; // Assuming you're using react-loader-spinner for loading animation
import icons from "../assets/icons/index.ts";
import { Box } from "@mui/material";

const weatherRecord: Record<string, number[]> = {
    "clear": [0],
    "sunny1": [1],
    "sunny": [2],
    "cloudy": [3, 45, 48, 103, 145, 148],
    "cloudyrainny": [51, 53, 55, 56, 57, 80, 81],
    "rain": [61, 63, 65, 66, 67, 82, 161, 163, 165, 166, 167, 182],
    "cloudysnow": [71, 73, 85],
    "snow": [75, 77, 86, 175, 177, 186],
    "thunder": [95, 195],
    "thunderstorm": [96, 99, 196, 199],

    "nigthclear": [100],
    "nigth": [101],
    "nigthcloudy": [102],
    "nigthrain": [151, 153, 155, 156, 157, 180, 181],
    "nigthsnow": [171, 173, 185],
}

export enum WeatherNames {
    "clear" = "Clear Sky",
    "sunny1" = "Mainly Clear",
    "sunny" = "Partly Cloud",
    "cloudy" = "Cloudy",
    "cloudyrainny" = "Cloudy Rainny",
    "rain" = "Raining",
    "cloudysnow" = "Cloudy Snowy",
    "snow" = "Snowing",
    "thunder" = "Thundering",
    "thunderstorm" = "Thunderstorm",
    "nigthclear" = "Nigth Clear",
    "nigth" = "Nigth",
    "nigthcloudy" = "Nigth Cloudy",
    "nigthrain" = "Nigth Raining",
    "nigthsnow" = "Nigth Snowing"
}

export function getStringFromNumber(number: number): string | undefined {
    const date = new Date().getHours();
    if (date >= 18 && date < 7) {
        number += 100;
    }
    for (const [key, value] of Object.entries(weatherRecord)) {
        if (value.includes(number)) {
            return key;
        }
    }
    return undefined;
}

function WeatherIcon({ weatherCode }: { weatherCode: number }) {
    console.log(icons[getStringFromNumber(weatherCode) as keyof typeof icons])
    const icon = weatherCode ? (
        <Box
            component='img'
            sx={{
                display: 'block',
                width: '55%',
                margin: 'auto',
            }}
            src={icons[getStringFromNumber(weatherCode) as keyof typeof icons]}
        />
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

export { WeatherIcon };
