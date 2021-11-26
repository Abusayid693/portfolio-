import React from 'react';

// Styles
import {faSearch} from '@fortawesome/free-solid-svg-icons';

// Components
import {
  H1,
  H2,
  H3,
  H4,
  P1,
  P2,
  P3,
  FancyText,
  SectionTitle,
  WorkExperience,
  Image,
  Card,
  FeaturedProject,
  Input,
  Button,
  Tag,
} from '@components';

const Playground: React.FC = () => (
  <>
    <SectionTitle title="Selected" highlight="Projects" />
    <H1>Heading 1</H1>
    <H2>Heading 2</H2>
    <H3>Heading 3</H3>
    <H4>Heading 4</H4>
    <P1>Paragraph 1</P1>
    <P2>Paragraph 2</P2>
    <P3>Paragraph 3</P3>

    <div>
      <Tag>React</Tag>
      <Tag>Typescript</Tag>
      <Tag>Node</Tag>
    </div>

    <FancyText>Fancy Text</FancyText>

    <div>
      <Input showLabel label="Enter query" icon={faSearch} />
    </div>

    <Button>Click me</Button>

    {/* <FeaturedProject
      img="https://res.cloudinary.com/riteshp2000/image/upload/v1637558612/portfolio/v2/project-1.webp"
      title="Boutiqes"
      excerpt="Designed and Developed a higly interactive application using React-Native Firebase with cross-platform support (iOS Android). Integrated features such as Livestreams, Audio/VideoCalls, Realtime chats, Payments, Social media features, etc."
      tech={['react', 'typescript', 'firebase', 'agora', 'razorpay']}
      github="hello"
      live="live"
      type="mobile"
    /> */}

    {/* <Image
      className="some-class"
      style={{width: '100%', aspectRatio: '0.525', objectFit: 'contain'}}
      id="iphone-image"
      src="https://res.cloudinary.com/riteshp2000/image/upload/v1637558612/portfolio/v2/project-1.webp"
      alt="Iphone image"
    /> */}

    <SectionTitle title="Work" highlight="Experience" />
    <WorkExperience />
  </>
);

export default Playground;
