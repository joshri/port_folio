import { motion } from "framer-motion";
import styled from "styled-components";
import graph from "../../assets/GraphExample.png";
import approval from "../../assets/PR-Approval.png";
import yaml from "../../assets/YamlExample.png";
import { CoverButton, Flex } from "../../styles";

const SectionText = styled(motion.h1)`
  font-size: 8vw;
`;

const SubSectionText = styled(motion.h2)`
  margin-block-start: 0;
  margin-block-end: 0;
  font-size: 4vw;
`;

const Gif = styled.video<{
  width?: string;
  margin?: string;
  responsive?: boolean;
}>`
  width: ${({ width }) => width || "50%"};
  margin: ${({ margin }) => margin || "0"};
  //for bartab gifs
  max-height: 600px;
  @media (max-width: 425px) {
    ${({ responsive }) => responsive && "width: 100%; margin: 0;"}
  }
`;

const Img = styled.img<{
  width?: string;
  margin?: string;
  responsive?: boolean;
}>`
  width: ${({ width }) => width || "50%"};
  margin: ${({ margin }) => margin || "0"};
  @media (max-width: 425px) {
    ${({ responsive }) => responsive && "width: 100%; margin: 0;"}
  }
`;

type Props = {
  className?: string;
};

function ActualContent({ className }: Props) {
  return (
    <div className={className}>
      <Flex column>
        <Flex start>
          <SectionText>ABOUT:</SectionText>
        </Flex>
        <Flex column>
          <h2>I make computers do cool stuff.</h2>
          <p>
            As you may have been able to tell, I don't take myself too
            seriously.
          </p>
          <p>
            I DO take good code seriously though, and I'd love for you to read
            on for some examples that I've made all by myself.
          </p>
        </Flex>
        <Flex start>
          <SectionText>PROOF:</SectionText>
        </Flex>
        <SubSectionText>at WEAVEWORKS,</SubSectionText>
        <p>
          I worked with a fully remote team distributed around the world to
          devolop Weave GitOps, which streamlined the deployment, management,
          and monitoring of Kubernetes applications for both open source and
          enterprise users on a bi-weekly release schedule, picking up Go and
          Kubernetes to earn myself a promotion from associate frontend engineer
          to full-fledged software engineer in under a year.
        </p>
        <Flex column>
          <Flex responsive column>
            <Img src={approval} alt="Really great PR approval" responsive />
            <Flex column margin="0 0 0 20px">
              <p>
                Would <h2>YOU</h2> like to be the next person to leave this kind
                of comment on one of my PRs?
              </p>
              <a
                href="https://github.com/weaveworks/weave-gitops/pull/2837"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CoverButton fontSize="small">
                  Click to see the PR in question
                </CoverButton>
              </a>
            </Flex>
          </Flex>
          <Flex margin="20px 0" responsive column>
            <Gif
              src={
                "https://portfolio-bucket-7202021.s3.amazonaws.com/assets/video/WeaveUI.mov"
              }
              autoPlay
              loop
              playsInline
              muted
              margin="0 20px 0 0"
              responsive
            />

            <p>
              My most notable projects were the three most utilized UI features
              according to customer usage data - a graph visualization made with
              d3.js (which I learned just for this feature), a filtering system
              which made its way into 80% of the product, and a YAML
              visualization for all the die-hard Kubernetes geniuses that used
              our product.
            </p>
          </Flex>
          <Flex margin="0 0 20px 0" responsive column>
            <Img src={graph} alt="Cool graph I made" responsive />
            <Img src={yaml} alt="Sweet YAML visualization" responsive />
          </Flex>
        </Flex>
        <SubSectionText>at BARTAB,</SubSectionText>
        <p>
          I built a React Native app from scratch and deployed it onto both app
          stores with XCode and Android Studio as the sole frontend engineer on
          the project. It communicated with Bluetooth proximity beacons, Stripe
          (and Dwolla), and our REST API to open and close bar tabs (hence the
          name...Bartab).
        </p>
        <Flex margin="0 0 20px 0">
          <Gif
            src={
              "https://portfolio-bucket-7202021.s3.amazonaws.com/assets/video/BartabOpenFinal3.mov"
            }
            autoPlay
            loop
            playsInline
            muted
            width="50%"
          />
          <Gif
            src={
              "https://portfolio-bucket-7202021.s3.amazonaws.com/assets/video/BartabUpdateGif.mp4"
            }
            autoPlay
            loop
            playsInline
            muted
            width="50%"
          />
        </Flex>
        <Flex responsive column margin="0 0 20px 0">
          <Gif
            src={
              "https://portfolio-bucket-7202021.s3.amazonaws.com/assets/video/SidecarDemoMovie.mp4"
            }
            autoPlay
            loop
            playsInline
            muted
            responsive
            margin="0 20px 0 0"
          />
          <p>
            This is the web app component of Bartab, made with React, Redux,
            Bootstrap, and SASS - meant to emulate a POS service
          </p>
        </Flex>
        <Flex margin="20px 0" column>
          <SubSectionText>THIS VERY WEBSITE</SubSectionText>
          <p>
            was created with Typescript, React, Styled Components, and Framer
            Motion, and is deployed on AWS with an S3 bucket, Route 53 domain
            management, and Amplify to rip it right outta my GitHub repo.
          </p>
        </Flex>
        <SubSectionText>REMNANTS OF THE PAST:</SubSectionText>
        <Flex responsive column margin="20px 0">
          <Gif
            src={
              "https://portfolio-bucket-7202021.s3.amazonaws.com/assets/video/ForAllSeasonsGif.mp4"
            }
            autoPlay
            loop
            playsInline
            muted
            responsive
            margin="0 20px 0 0"
          />
          <Flex column>
            <p>
              For All Seasons leveraged the Spotify API with OAuth2 to supply
              curated seasonal playlists from your favorite artist.
            </p>
            <a
              href="https://github.com/joshri/for-all-seasons"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CoverButton fontSize="small">GitHub</CoverButton>
            </a>
          </Flex>
        </Flex>
        <Flex responsive column margin="0 0 20px 0">
          <Gif
            src={
              "https://portfolio-bucket-7202021.s3.amazonaws.com/assets/video/IsItHotGif.mp4"
            }
            autoPlay
            loop
            playsInline
            muted
            responsive
            margin="0 20px 0 0"
          />
          <Flex column>
            <p>
              Is It Hot is a record of my first experiment using APIs! If you'd
              like to put down your iPhone and get the weather another
              way...well here you go.
            </p>
            <a
              href="https://github.com/joshri/is-it-hot"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CoverButton fontSize="small">GitHub</CoverButton>
            </a>
          </Flex>
        </Flex>
        <Flex responsive column margin="0 0 20px 0">
          <Gif
            src={
              "https://portfolio-bucket-7202021.s3.amazonaws.com/assets/video/FunkySimonGif.mp4"
            }
            autoPlay
            loop
            playsInline
            muted
            responsive
            margin="0 20px 0 0"
          />
          <Flex column>
            <p>
              Funky Simon is the classic game of Simon implemented with
              Javascript, HTML, and an incredible Garageband song by yours
              truly. It is a work that will be remembered for generations to
              come.
            </p>
            <a
              href="https://github.com/joshri/funky-simon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CoverButton fontSize="small">GitHub</CoverButton>
            </a>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}

export default styled(ActualContent).attrs({ className: ActualContent.name })`
  max-width: 2000px;
  margin-top: 200px;
  padding: 0 5vw;
  p {
    font-size: clamp(12px, calc(0.25rem + 1vw), 24px);
  }
`;
