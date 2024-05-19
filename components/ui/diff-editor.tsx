"use client";

import { ComponentProps } from "react";
import { DiffEditor as MonacoDiffEditor } from "@monaco-editor/react";
import { useTheme } from "next-themes";

// @ts-expect-error react 19 beta error
export type DiffEditorProps = ComponentProps<typeof MonacoDiffEditor>;
// @ts-expect-error react 19 beta error
export const DiffEditor = ({ options, theme, ...props }: DiffEditorProps) => {
  const { theme: appTheme } = useTheme();
  const themeToUse = theme ?? (appTheme === "light" ? "light" : "vs-dark");

  return (
    // @ts-expect-error react 19 beta error
    <MonacoDiffEditor
      // @ts-expect-error react 19 beta error
      theme={themeToUse}
      // @ts-expect-error react 19 beta error
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      options={{
        tabFocusMode: true,
        automaticLayout: true,
        scrollBeyondLastLine: false,
        // @ts-expect-error react 19 beta error
        ...options, // NOTE: merge shallowly
      }}
      {...props}
    />
  );
};
