import { styled } from "../../styles/stitches.config";
import { Flex } from "../../styles/Global"
import { Text } from "../../styles/Text"

export const Project = styled("article", {
  marginTop: "4rem",
});

export const ProjectStack = styled(Flex, {
  margin: "1.25rem 0 1.25rem 0",
  display: "flex",
  gap: "1rem",
});

export const ProjectStackTech = styled("span", {
  backgroundColor: "$black1",
  color: "$black1",
  padding: "0  0.5rem",
  borderRadius: "$2",
});

export const ProjectLinks = styled(Flex, {
  marginTop: "2.25rem",
});

export const ProjectLink = styled("a", {
  fontSize: "1rem",
  color: "$black1",
  fontWeight: "500",
  marginRight: "$2",
  display: "flex",
  alignItems: "center",
  lineHeight: "0",

  "&:hover":{
    color: "$grey1"
  },

  [`& svg`]: {
    marginRight: "$1"
  }
});
