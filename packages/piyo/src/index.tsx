import React from "react";

export type PiyoProps = {
  hoge: string;
};

export function Piyo({ hoge }: PiyoProps): JSX.Element {
  return <div>{`piyo${hoge}`}</div>;
}
