// YourComponent.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import { NozoMarkdownEditor } from "./main";

const meta: Meta<typeof NozoMarkdownEditor> = {
  title: "NozoMarkdownEditor",
  component: NozoMarkdownEditor,
};

export default meta;
type Story = StoryObj<typeof NozoMarkdownEditor>;

export const Story: Story = {
  args: {
    title: "Hello World",
  },
};
