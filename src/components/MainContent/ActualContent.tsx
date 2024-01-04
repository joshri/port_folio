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

const Gif = styled.video<{ width?: string }>`
  width: ${({ width }) => width || "50%"};
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
          to full-fledged software engineer along the way.
        </p>
        <Flex column>
          <Flex>
            <img src={approval} alt="Really great PR approval" width="50%" />
            <Flex column margin="0 0 0 20px">
              <p>
                Would <h2>YOU</h2> like to be the next person to leave this kind
                of comment on one of my PRs?
              </p>
              <CoverButton fontSize="small">
                <a
                  href="https://github.com/weaveworks/weave-gitops/pull/2837"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click to see the PR in question
                </a>
              </CoverButton>
            </Flex>
          </Flex>
          <Flex margin="20px 0">
            <Gif
              src={
                "https://portfolio-bucket-7202021.s3.amazonaws.com/assets/video/WeaveUI.mov"
              }
              autoPlay
              loop
              playsInline
              muted
            />
            <Flex column margin="0 0 0 20px">
              <p>Check out the slick lil' nav and theming on the left.</p>
              <p>
                My most notable projects were the three most utilized UI
                features according to customer usage data - a graph
                visualization made with d3.js (which I learned just for this
                feature), a filtering system which made its way into 80% of the
                product, and a YAML visualization for all the die-hard
                Kubernetes geniuses that used our product.
              </p>
            </Flex>
          </Flex>
          <Flex margin="0 0 20px 0">
            <img src={graph} alt="Cool graph I made" width="50%" />
            <img src={yaml} alt="Sweet YAML visualization" width="50%" />
          </Flex>
        </Flex>
        <SubSectionText>at BARTAB,</SubSectionText>
      </Flex>
    </div>
  );
}

export default styled(ActualContent).attrs({ className: ActualContent.name })`
  max-width: 2000px;
  margin-top: 200px;
  padding: 0 5vw;
`;
