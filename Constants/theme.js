import {Dimensions} from "react-native";

const {width, height} = Dimensions.get("window");

export const COLORS = {
    primary: "#f3b4bd",
    secondary: "#3693b6",
    black: "#18191a",
    white: "#FFFFFF",
    lightGray: "#F5F5F6",
    lightGray2: "rgba(217,217,217,0.42)",
    lightGray3: "#EFEFF1",
    lightGray4: "#3a3a3a",
    transparent: "transparent",
    darkgray: '#898C95',
};

export const SIZES = {
    base: 8,
    font: 14,
    radius: 5,
    roundRadius: 30,
    padding: 10,
    padding2: 12,
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,
    width,
    height
};

export const FONTS = {
    largeTitle: { fontSize: SIZES.largeTitle, lineHeight: 55},
    h1: {fontSize: SIZES.h1},
    h2: { fontSize: SIZES.h2},
    h3: {fontSize: SIZES.h3, lineHeight: 22},
    h4: {fontSize: SIZES.h4, lineHeight: 22},
    body1: { fontSize: SIZES.body1, lineHeight: 36},
    body2: {fontSize: SIZES.body2, lineHeight: 30},
    body3: {fontSize: SIZES.body3, lineHeight: 22},
    body4: {fontSize: SIZES.body4, lineHeight: 18},
    body5: {fontSize: SIZES.body5, lineHeight: 22},
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
