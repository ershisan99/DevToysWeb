"use client";

import { useState } from "react";
import { Panel, PanelGroup } from "react-resizable-panels";

import { PERSISTENCE_KEY } from "@/config/persistence-keys";
import { toolGroups } from "@/config/tools";
import { DiffEditor } from "@/components/ui/diff-editor";
import { Editor } from "@/components/ui/editor";
import * as Button from "@/components/buttons";
import { Configuration } from "@/components/configuration";
import { Configurations } from "@/components/configurations";
import { ControlMenu } from "@/components/control-menu";
import * as icons from "@/components/icons";
import { LabeledSwitch } from "@/components/labeled-switch";
import { PageRootSection } from "@/components/page-root-section";
import { PageSection } from "@/components/page-section";
import { PanelResizeHandle } from "@/components/panel-resize-handler";

/** No particular reason for these sizes, just feels like a good balance */
const VERTICAL_PANEL_MAX_SIZE = 80;
const HORIZONTAL_PANEL_MAX_SIZE = 90;
const PANEL_FULL_SIZE = 100;

export default function Page() {
  const [input1, setInput1] = useState<string | undefined>("Hello world");
  const [input2, setInput2] = useState<string | undefined>("Hello, World!");
  const [diffFullHeight, setDiffFullHeight] = useState(false);
  const [inlineMode, setInlineMode] = useState(false);
  const diffPanelMaxSize = diffFullHeight ? PANEL_FULL_SIZE : VERTICAL_PANEL_MAX_SIZE;

  const clearInput1 = () => setInput1("");
  const clearInput2 = () => setInput2("");
  const toggleFullHeight = () => setDiffFullHeight(prev => !prev);

  const inlineModeConfig = (
    <Configuration
      icon={<icons.Rows size={24} />}
      title="Inline mode"
      control={
        <LabeledSwitch
          id="uppercase-switch"
          label={inlineMode ? "On" : "Off"}
          checked={inlineMode}
          onCheckedChange={setInlineMode}
          aria-label="toggle whether to show diff in inline mode"
        />
      }
    />
  );
  const input1Control = (
    <ControlMenu
      list={[
        <Button.Paste onClipboardRead={setInput1} />,
        <Button.File onFileRead={setInput1} iconOnly aria-label="load a file with old text" />,
        <Button.Clear onClick={clearInput1} iconOnly aria-label="clear old text input" />,
      ]}
    />
  );

  const input2Control = (
    <ControlMenu
      list={[
        <Button.Paste onClipboardRead={setInput2} />,
        <Button.File onFileRead={setInput2} iconOnly aria-label="load a file with new text" />,
        <Button.Clear onClick={clearInput2} iconOnly aria-label="clear new text input" />,
      ]}
    />
  );

  const diffControl = (
    <ControlMenu
      list={[
        <Button.ToggleFullSize iconOnly onClick={toggleFullHeight} expanded={diffFullHeight} />,
      ]}
    />
  );

  const hiddenInFullHeightMode = diffFullHeight ? "hidden" : "";

  return (
    <PageRootSection className="h-full" title={toolGroups.text.tools.diff.longTitle}>
      <PageSection title="Configuration" className={hiddenInFullHeightMode}>
        <Configurations list={[inlineModeConfig]} />
      </PageSection>
      <PanelGroup direction="vertical" autoSaveId={PERSISTENCE_KEY.panels.textDiff.vertical}>
        <Panel maxSize={VERTICAL_PANEL_MAX_SIZE} className={hiddenInFullHeightMode}>
          <PanelGroup
            direction="horizontal"
            autoSaveId={PERSISTENCE_KEY.panels.textDiff.horizontal}
          >
            <Panel maxSize={HORIZONTAL_PANEL_MAX_SIZE}>
              <PageSection className="h-full" title="Old text" control={input1Control}>
                {/* @ts-expect-error react 19 beta error */}
                <Editor value={input1} onChange={setInput1} />
              </PageSection>
            </Panel>
            <PanelResizeHandle direction="vertical" className="mt-[42px]" />

            <Panel maxSize={HORIZONTAL_PANEL_MAX_SIZE}>
              <PageSection className="h-full" title="New text" control={input2Control}>
                {/* @ts-expect-error react 19 beta error */}
                <Editor value={input2} onChange={setInput2} />
              </PageSection>
            </Panel>
          </PanelGroup>
        </Panel>
        <PanelResizeHandle direction="horizontal" className={hiddenInFullHeightMode} />
        <Panel maxSize={diffPanelMaxSize}>
          <PageSection className="h-full" title="Difference" control={diffControl}>
            {/* @ts-expect-error react 19 beta error */}
            <DiffEditor
              // @ts-expect-error react 19 beta error
              original={input1}
              // @ts-expect-error react 19 beta error
              modified={input2}
              // @ts-expect-error react 19 beta error

              options={{
                readOnly: true,
                renderSideBySide: !inlineMode,
              }}
            />
          </PageSection>
        </Panel>
      </PanelGroup>
    </PageRootSection>
  );
}
