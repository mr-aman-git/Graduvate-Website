"use client";
import react, { useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { tipTapImageUpload } from "../../routes/adminApi.js";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import { TableKit } from "@tiptap/extension-table";
import Text from "@tiptap/extension-text";
import { Gapcursor } from "@tiptap/extensions";
import ResizeImage from "tiptap-extension-resize-image";
import Link from "@tiptap/extension-link";

import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Quote,
  Heading1,
  Heading2,
  Heading3,
  Undo,
  Redo,
  Link2,
  Table,
  ImagePlus,
  Loader2,
  TableProperties,
  Rows,
  Columns,
  Trash2,
  PlusSquare,
  Merge,
} from "lucide-react";

const MenuBar = ({ editor }) => {
  const [uploading, setUploading] = react.useState(false);
  if (!editor) return null;

  const setLink = () => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt(
      "Paste URL (e.g. https://google.com):",
      previousUrl,
    );

    // Agar cancel kar diya toh kuch mat karo
    if (url === null) return;

    // Agar khali choda toh link hata do (Unlink)
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }

    // Link set karein
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  };

  const handleFileChange = async (e) => {
    const image = e.target.files[0];
    console.log("image", image);

    if (!image) return;

    // Check if it's actually an image
    if (!image.type.startsWith("image/")) {
      alert("Please upload an image file only!");
      return;
    }

    setUploading(true);
    try {
      // Ye function hum page se pass karenge jisme API call hogi
      const imageUrl = await tipTapImageUpload(image);
      console.log("imageUrl", imageUrl);
      if (imageUrl) {
        editor.chain().focus().setImage({ src: imageUrl }).run();
      }
    } catch (error) {
      console.error("Upload failed", error);
      alert("Image upload failed!");
    } finally {
      setUploading(false);
      e.target.value = ""; // Reset input
    }
  };

  const IconButton = ({ onClick, isActive, children, title }) => (
    <button
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className={`p-2 rounded-md transition-all ${
        isActive
          ? "bg-indigo-100 text-indigo-600"
          : "text-gray-600 hover:bg-gray-100"
      }`}
      title={title}
    >
      {children}
    </button>
  );

  return (
    <div className="flex flex-wrap items-center gap-1 p-2 bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="w-px h-6 bg-gray-200 mx-1" />

      {/* TABLE CONTROLS */}
      <IconButton
        onClick={() =>
          editor
            .chain()
            .focus()
            .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
            .run()
        }
        title="Insert Table"
      >
        <Table size={18} />
      </IconButton>

      {/* <div className="relative">
        <input
          type="file"
          id="tiptap-upload"
          className="hidden"
          accept="image/*"
          onChange={handleFileChange}
          disabled={uploading}
        />
        <IconButton
          onClick={() => document.getElementById("tiptap-upload").click()}
          title="Upload Image"
        >
          {uploading ? (
            <Loader2 size={18} className="animate-spin text-blue-600" />
          ) : (
            <ImagePlus size={18} />
          )}
        </IconButton>
      </div> */}

      {/* Ye buttons tabhi dikhenge jab cursor table ke andar ho */}
      {editor.isActive("table") && (
        <>
          <IconButton
            onClick={() => editor.chain().focus().addRowAfter().run()}
            title="Add Row After"
          >
            <Rows size={18} className="text-blue-500" />
          </IconButton>

          <IconButton
            onClick={() => editor.chain().focus().addColumnAfter().run()}
            title="Add Column After"
          >
            <Columns size={18} className="text-blue-500" />
          </IconButton>

          <IconButton
            onClick={() => editor.chain().focus().deleteRow().run()}
            title="Delete Row"
          >
            <div className="relative">
              <Rows size={18} className="text-red-400" />
              <span className="absolute -top-1 -right-1 text-[10px] font-bold text-red-600">
                ×
              </span>
            </div>
          </IconButton>

          <IconButton
            onClick={() => editor.chain().focus().deleteColumn().run()}
            title="Delete Column"
          >
            <div className="relative">
              <Columns size={18} className="text-red-400" />
              <span className="absolute -top-1 -right-1 text-[10px] font-bold text-red-600">
                ×
              </span>
            </div>
          </IconButton>

          <IconButton
            onClick={() => editor.chain().focus().mergeCells().run()}
            title="Merge Cells"
          >
            <Merge size={18} />
          </IconButton>

          <IconButton
            onClick={() => editor.chain().focus().deleteTable().run()}
            title="Delete Table"
            className="text-red-600 hover:bg-red-50"
          >
            <Trash2 size={18} className="text-red-600" />
          </IconButton>
        </>
      )}

      <IconButton
        onClick={() => editor.chain().focus().toggleBold().run()}
        isActive={editor.isActive("bold")}
        title="Bold"
      >
        <Bold size={18} />
      </IconButton>

      <IconButton
        onClick={() => editor.chain().focus().toggleItalic().run()}
        isActive={editor.isActive("italic")}
        title="Italic"
      >
        <Italic size={18} />
      </IconButton>

      <div className="w-px h-6 bg-gray-200 mx-1" />

      <IconButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        isActive={editor.isActive("heading", { level: 1 })}
        title="Heading 1"
      >
        <Heading1 size={18} />
      </IconButton>

      <IconButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        isActive={editor.isActive("heading", { level: 2 })}
        title="Heading 2"
      >
        <Heading2 size={18} />
      </IconButton>

      <IconButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        isActive={editor.isActive("heading", { level: 3 })}
        title="Heading 3"
      >
        <Heading3 size={18} />
      </IconButton>

      <div className="w-px h-6 bg-gray-200 mx-1" />

      <IconButton
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        isActive={editor.isActive("bulletList")}
        title="Bullet List"
      >
        <List size={18} />
      </IconButton>

      <IconButton
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        isActive={editor.isActive("orderedList")}
        title="Numbered List"
      >
        <ListOrdered size={18} />
      </IconButton>

      <IconButton
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        isActive={editor.isActive("blockquote")}
        title="Quote"
      >
        <Quote size={18} />
      </IconButton>

      {/* <IconButton
        onClick={setLink}
        isActive={editor.isActive("link")}
        title={editor.isActive("link") ? "Edit/Remove Link" : "Add Link"}
      >
        <Link2 size={18} />
      </IconButton> */}

      <div className="grow" />

      <IconButton
        onClick={() => editor.chain().focus().undo().run()}
        title="Undo"
      >
        <Undo size={18} />
      </IconButton>
      <IconButton
        onClick={() => editor.chain().focus().redo().run()}
        title="Redo"
      >
        <Redo size={18} />
      </IconButton>
    </div>
  );
};
const Tiptap = ({ onChange, initialContent = "", value = "" }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      ResizeImage,
      Document,
      Paragraph,
      Text,
      Gapcursor,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: "text-blue-600 underline cursor-pointer",
        },
      }),
      TableKit.configure({
        resizable: true,
      }),
    ],
    content: value,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        // Ab humne 'prose' hata diya aur apni custom class 'tiptap' lagayi hai
        class: "tiptap p-5 min-h-[300px] max-w-none focus:outline-none",
      },
    },
  });
  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value);
    }
  }, [value, editor]);

  return (
    <div className="w-full max-w-8xl mx-auto border border-gray-200 rounded-xl shadow-lg bg-white">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;
