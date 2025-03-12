import Section from "./Components/Section/Section";
import Heading from "./Components/Heading/Hearing";
const App = () => {
  return (
    <>
      <Section>
        <Heading>Title</Heading>
        <Section>
          {" "}
          <Heading>Heading</Heading>
          <Heading>Sub-heading</Heading>
          <Section>
            {" "}
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-sub-heading</Heading>
            <Heading>Sub-sub-sub-sub-heading</Heading>
          </Section>
        </Section>
      </Section>
    </>
  );
};

export default App;
