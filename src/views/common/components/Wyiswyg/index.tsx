import React, { useState, useEffect } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import dynamic from "next/dynamic";
import { EditorState } from "react-draft-wysiwyg";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then(({ Editor }) => Editor),
  { ssr: false },
);

const WYSIWYGEditor = () => {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [editorState, setEditorState] = useState<typeof EditorState>();

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  useEffect(() => {
    setEditorLoaded(true); // Ensures the editor is loaded only on the client
  }, []);


  if (!editorLoaded) {
    return <div>Loading Editor...</div>;
  }

  return (
    <div className="border-[1px] border-neutral-200 rounded-md px-2 min-h-[250px]">
      <Editor
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        toolbar={toolbar}
      />
    </div>
  );
};

export default WYSIWYGEditor;