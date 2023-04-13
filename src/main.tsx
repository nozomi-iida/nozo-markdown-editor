import { FC } from "react";

type NozoMarkdownEditorProps = {
  title: string;
};

export const NozoMarkdownEditor: FC<NozoMarkdownEditorProps> = ({ title }) => {
  return (
    <div>
      <h1>HelloWorld</h1>
      <p>{title}</p>
    </div>
  );
};
