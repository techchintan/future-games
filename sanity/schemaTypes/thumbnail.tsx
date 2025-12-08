const thumbnail = {
  name: "thumbnail",
  title: "Thumbnail",
  type: "object",
  fields: [
    {
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      description: "Upload file",
      options: {hotspot: true},
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
  ],
};

export default thumbnail;
