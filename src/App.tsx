import Section from "./Components/Section/Section";
import Heading from "./Components/Heading/Hearing";
const App = () => {
  return (
    <>
      <Section level={1}>
        <Heading>Title</Heading>
      </Section>
      <Section level={2}>
        {" "}
        <Heading>Heading</Heading>
        <Heading>Sub-heading</Heading>
      </Section>
      <Section level={3}>
        {" "}
        <Heading>Sub-sub-heading</Heading>
        <Heading>Sub-sub-sub-heading</Heading>
        <Heading>Sub-sub-sub-sub-heading</Heading>
      </Section>
    </>
  );
};

export default App;
