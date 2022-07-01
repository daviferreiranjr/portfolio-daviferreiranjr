import { styled } from "../styles/stitches.config";
import { colors } from '../styles/Global'

export const Button = styled('button', {
    height: "2.75rem",
    appearance: "none",
    background: "#ffffff",
    color: "$grey1",
    fontWeight: "600",
    padding: "0 2rem",
    border: "2px solid #ffffff",
    borderRadius: "$1",
    cursor: "pointer",
    fontSize: "1rem",
    fontFamily: "$texts",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "max-content",

    variants: {
        type: {
            btLink: {
                background: "transparent",
                borderColor: "transparent",
            },
            primary: {
                background: "$brand1",
                borderColor: "$brand1",
                color: "#ffffff"
            },
            icon: {
                borderColor: "$grey5",
                backgroundColor: "transparent",
                "&:hover": {
                    backgroundColor: "$grey5",
                }
            }
        },
        ...colors
    }
})