import { styled } from '@/styles/stitches.config';
import { colors } from '@/styles/Global'

export const Button = styled('button', {
    height: "2.75rem",
    appearance: "none",
    background: "$whiteFixed",
    color: "$grey1",
    fontWeight: "600",
    padding: "0 2rem",
    border: "2px solid $whiteFixed",
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
                background: "$yelow1",
                borderColor: "$black1",
                color: "$black1",
                "&:hover": {
                    backgroundColor: "$grey5",
                    borderColor: "$black1",
                }
            },
            icon: {
                borderColor: "$black1",
                backgroundColor: "transparent",
                "&:hover": {
                    backgroundColor: "$grey5",
                }
            },
            circle: {
                borderColor: "$black1",
                backgroundColor: "$yelow1",
                borderRadius: "50%",
                padding: "0",
                width: "2.75rem",
                height: "2.75rem",
                "&:hover": {
                    backgroundColor: "$grey5",
                }
            }
        },
        ...colors
    }
})