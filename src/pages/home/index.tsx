// Styles
import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  StackSection,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectsAreaContent,
  ProjectAreaWrapperColumns,
} from "./style";


export const Home = (): JSX.Element => {
  return (
    <main>
      <Header>
        <Container>
          <HeaderContent>
            <Text as="h1" type="heading1" color="grey5">
              Desenvolvedor Fullstack{" "}
            </Text>
            <Text type="body1" color="grey6">
            Sou um Desenvolvedor Full Stack em formação pela Kenzie Academy Brasil.
            Já produzi diversos projetos Front End e Back End, nos quais pude desenvolver minhas habilidades em HTML5, CSS3, JavaScript(ES6), Controle de versão com Git, TypeScript, Node, Express, Python e Django. 
            Além disso, possuo conhecimentos em ferramentas e metodologias como Trello, Figma e Scrum. 
            </Text>
            <HeaderButtonsArea>
              <Button as="a" href="#projetos" type="primary">
                Projetos
              </Button>
              <Button as="a" href="#tecnologias" type="primary">
                Tecnologias
              </Button>
            </HeaderButtonsArea>
          </HeaderContent>
        </Container>
      </Header>
      <StackSection id="tecnologias">
        <Container>
          <Text as="h4" type="heading3" color="grey5">
            Tecnologias:
          </Text>
          <StackCards>
            {stackData.map((stack, index) => (
              <Stack key={index} title={stack.title} icon={stack.img} />
            ))}
          </StackCards>
        </Container>
      </StackSection>
      <ProjectsArea id="projetos">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey5">
                Vamos conversar?
              </Text>
              <Text as="p" type="body1" color="grey5">
                No linkedIn sempre estou compartilhando meus processos diários
                para desenvolver esses projetos e estou disposto a trocar
                algumas ideias por lá
              </Text>
              <Button
                type="primary"
                target="_blank"
                as="a"
                href={`https://www.linkedin.com/in/${userData.linkedinUser}`}
              >
                Acessar perfil no LinkedIn
              </Button>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Text type="heading2" as="h3" color="black1" css={{ marginBottom: "$2" }}>
                Projetos:
              </Text>
                <Text as="p" type="body1" color="black1">
                Abaixo estão alguns projetos desenvolvidos por mim:
              </Text>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
    </main>
  );
};
