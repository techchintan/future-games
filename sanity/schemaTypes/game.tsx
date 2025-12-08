import {orderRankOrdering, orderRankField} from "@sanity/orderable-document-list";

const game = {
  name: "game",
  title: "Games",
  type: "document",
  groups: [
    {
      name: "category",
      title: "Category",
    },
  ],
  fields: [
    {
      name: "is_active",
      title: "Is Active",
      type: "boolean",
      description: "is this game is available to play?",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "Title of the game",
    },
    {
      name: "game_slug",
      title: "Slug",
      type: "slug",
      description: "Slug for the game URL",
      options: {
        source: "title",
        maxLength: 100,
      },
    },
    {
      name: "game_url",
      title: "Url",
      type: "string",
      description: "Url of the game",
    },
    {
      name: "description",
      title: "Description",
      rows: 5,
      type: "text",
      description: "Description of the game",
    },
    {
      name: "faq",
      title: "FAQ",
      type: "array",
      of: [
        {
          type: "faq",
        },
      ],
      description: "FAQs for this game",
    },
    {
      name: "genre",
      title: "Genre",
      type: "string",
      description: "Which type of this game?",
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [
        {
          type: "gameCategory",
        },
      ],
      options: {
        filter: "is_active == true",
      },
      description: "Category of this game",
      group: "category",
    },
    {
      name: "is_external",
      title: "Is External",
      type: "boolean",
      description: "is this game is external or internal?",
    },
    {
      name: "seo",
      title: "SEO",
      type: "meta",
      description: "SEO metadata of this game",
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
      description: "Rating of the game out of 10",
    },
    {
      name: "total_likes_in_percentage",
      title: "Likes",
      type: "number",
      description: "Total numbers of likes in percentage",
    },
    {
      name: "total_play_count",
      title: "Play count",
      type: "number",
      description: "Total number of time game play count in number",
    },
    {
      name: "developer_name",
      title: "Developer name",
      type: "string",
      description: "Name of Developer who developed this game",
    },
    {
      name: "badge",
      title: "Badge",
      type: "string",
      description: "Game indication badge. for eg. Hot, Popular etc.",
    },
    {
      name: "thumbnail",
      title: "Thumbnail",
      type: "thumbnail",
      description: "Image of game",
    },
    {
      name: "video_thumbnail",
      title: "Video Thumbnail",
      type: "file",
      description: "Video of game",
    },
    orderRankField({type: "game"}),
  ],
  orderings: [orderRankOrdering],

  preview: {
    select: {
      title: "title",
      subtitle: "game_slug.current",
      media: "thumbnail.thumbnail",
    },
  },
};

export default game;
