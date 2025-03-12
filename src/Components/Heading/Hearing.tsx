import { ReactNode } from "react";
import { LevelContext } from "../../context/LevelContext/LevelContext";
import { useContext } from "react";

interface HeadingProp {
  children: ReactNode;
}

const Heading: React.FC<HeadingProp> = ({ children }) => {
  const level = useContext(LevelContext);

  switch (level) {
    case 1: {
      return <h1>{children}</h1>;
    }
    case 2: {
      return <h2>{children}</h2>;
    }
    case 3: {
      return <h3>{children}</h3>;
    }

    default: {
      throw Error("Unknown level: " + level);
    }
  }
};

export default Heading;
