"use client";

import { ComponentProps } from "react";
import { DiffEditor as MonacoDiffEditor } from "@monaco-editor/react";
import { useTheme } from "next-themes";

export type DiffEditorProps = ComponentProps<typeof MonacoDiffEditor>;
export const DiffEditor = ({ options, theme, ...props }: DiffEditorProps) => {
  const { theme: appTheme } = useTheme();
  const themeToUse = theme ?? (appTheme === "light" ? "light" : "vs-dark");

  return (
    <MonacoDiffEditor
      theme={themeToUse}
      options={{
        tabFocusMode: true,
        automaticLayout: true,
        scrollBeyondLastLine: false,
        ...options, // NOTE: merge shallowly
      }}
      {...props}
    />
  );
};
