"use client";

import { ComponentProps } from "react";
import MonacoEditor from "@monaco-editor/react";
import { useTheme } from "next-themes";

// @ts-expect-error react 19 beta error
export type EditorProps = ComponentProps<typeof MonacoEditor>;

/**
 * NOTE: This component maybe doesn't shrink according to the container component's width
 *
 * @see https://github.com/suren-atoyan/monaco-react/issues/346
 *
 */
// @ts-expect-error react 19 beta error
export const Editor = ({ options, theme, ...props }: EditorProps) => {
  const { theme: appTheme } = useTheme();
  const themeToUse = theme ?? (appTheme === "light" ? "light" : "vs-dark");

  return (
    // @ts-expect-error react 19 beta error
    <MonacoEditor
      // @ts-expect-error react 19 beta error
      theme={themeToUse}
      // @ts-expect-error react 19 beta error
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      options={{
        tabFocusMode: true,
        detectIndentation: false,
        minimap: { enabled: false },
        automaticLayout: true,
        scrollBeyondLastLine: false,
        // @ts-expect-error react 19 beta error
        ...options, // NOTE: merge shallowly
      }}
      {...props}
    />
  );
};
