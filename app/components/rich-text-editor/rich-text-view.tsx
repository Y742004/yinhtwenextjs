"use client";
import { Block } from "@blocknote/core";
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useState } from "react";

import "@/app/style.css";

export default function RichTextView({ textData }: any) {
  // Stores the document JSON.
  const [blocks, setBlocks] = useState<Block[]>([]);

  // Creates a new editor instance.
  const editor = useCreateBlockNote({
    initialContent: (() => {
      try {
        const parsedData = textData ? JSON.parse(textData) : [];
        // Check if parsedData is a non-empty array
        if (Array.isArray(parsedData) && parsedData.length > 0) {
          return parsedData;
        }
      } catch (error) {
        // console.error("Error parsing textData:", error);
      }
      // Return a default block if parsing fails or data is empty
      return [
        {
          type: "paragraph",
          content: "Start typing here...",
        },
      ];
    })(),
  });

  // Renders the editor instance and its document JSON.
  return (
    <div className={"wrapper, mt-10"}>
      {/* <div>BlockNote Editor:</div> */}
      <div className={"item"}>
        <BlockNoteView editor={editor} editable={false} />
      </div>
    </div>
  );
}
