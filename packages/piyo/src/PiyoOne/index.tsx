import React from "react";

export type PiyoOneProps = {
  piyo: string;
};

function PiyoOne({ piyo }: PiyoOneProps): JSX.Element {
  return <div>{`PiyoOne:${piyo}`}</div>;
}

export default PiyoOne;
