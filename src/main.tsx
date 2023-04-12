import { FC } from "react";

type HelloWorldProps = {
  title: string;
};

export const HelloWorld: FC<HelloWorldProps> = ({ title }) => {
  return (
    <div>
      <h1>HelloWorld</h1>
      <p>{title}</p>
    </div>
  );
};
