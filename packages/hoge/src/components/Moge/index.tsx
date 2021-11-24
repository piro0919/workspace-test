import PiyoOne, { PiyoOneProps } from "piyo/PiyoOne";
import PiyoTwo from "piyo/PiyoTwo";
import React from "react";

type MogeProps = Pick<PiyoOneProps, "piyo">;

function Moge({ piyo }: MogeProps): JSX.Element {
  return (
    <>
      <PiyoOne piyo={piyo} />
      <PiyoTwo piyo="two" />
    </>
  );
}

export default Moge;
