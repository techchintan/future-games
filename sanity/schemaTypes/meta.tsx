/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import {set} from "sanity";

const meta = {
  name: "meta",
  title: "Meta",
  type: "object",
  fields: [
    {
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
      description: "The title for SEO metadata",
    },
    {
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      rows: 4,
      description: "A brief description for SEO metadata",
    },
    {
      name: "metaKeywords",
      title: "Meta Keywords",
      type: "array",
      of: [{type: "string"}],
      description: "Keywords for SEO metadata (e.g., 'online games', 'HTML5 games').",
      components: {
        input: (props: any) => {
          const inputRef: any = React.useRef(null);
          const {onChange, value} = props;

          React.useEffect(() => {
            const handlePaste = (e: {clipboardData: any}) => {
              const clipboardData = e.clipboardData;
              const pastedData = clipboardData.getData("Text");

              if (pastedData.includes("\n")) {
                const pastedArray = pastedData.split("\n").map((item: any) => item.trim());

                onChange(set([...(value || []), ...pastedArray]));
              }
            };

            const currentRef = inputRef.current;

            currentRef.addEventListener("paste", handlePaste);

            return () => {
              currentRef.removeEventListener("paste", handlePaste);
            };
          }, []);

          return <div ref={inputRef}>{props.renderDefault(props)}</div>;
        },
      },
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{type: "string"}],
      description: "Tags related to this game category (e.g., 'sports', 'action', 'adventure').",
      components: {
        input: (props: any) => {
          const inputRef: any = React.useRef(null);
          const {onChange, value} = props;

          React.useEffect(() => {
            const handlePaste = (e: {clipboardData: any}) => {
              const clipboardData = e.clipboardData;
              const pastedData = clipboardData.getData("Text");

              if (pastedData.includes("\n")) {
                const pastedArray = pastedData.split("\n").map((item: any) => item.trim());

                onChange(set([...(value || []), ...pastedArray]));
              }
            };

            const currentRef = inputRef.current;

            currentRef.addEventListener("paste", handlePaste);

            return () => {
              currentRef.removeEventListener("paste", handlePaste);
            };
          }, []);

          return <div ref={inputRef}>{props.renderDefault(props)}</div>;
        },
      },
    },
  ],
};

export default meta;
