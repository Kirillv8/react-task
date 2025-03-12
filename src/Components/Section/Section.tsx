import { ReactNode } from "react";
import { LevelContext } from "../../context/LevelContext/LevelContext";

interface SectionProp {
  level?: number;
  children: ReactNode;
}
const Section: React.FC<SectionProp> = ({ level = 1, children }) => {
  return (
    <>
      <LevelContext.Provider value={level}>
        <section>{children}</section>
      </LevelContext.Provider>
    </>
  );
};

export default Section;
