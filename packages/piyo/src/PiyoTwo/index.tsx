import React from "react";

export type PiyoTwoProps = {
  piyo: string;
};

function PiyoTwo({ piyo }: PiyoTwoProps): JSX.Element {
  return <div>{`PiyoTwo:${piyo}`}</div>;
}

export default PiyoTwo;
