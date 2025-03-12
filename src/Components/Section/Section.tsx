import { ReactNode } from "react";
import { LevelContext } from "../../context/LevelContext/LevelContext";
import { useContext } from "react";

interface SectionProp {
  children: ReactNode;
}
const Section: React.FC<SectionProp> = ({ children }) => {
  const level = useContext(LevelContext);
  return (
    <>
      <LevelContext.Provider value={level + 1}>
        <section>{children}</section>
      </LevelContext.Provider>
    </>
  );
};

export default Section;
