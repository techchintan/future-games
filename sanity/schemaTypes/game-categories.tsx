import {orderRankOrdering, orderRankField} from "@sanity/orderable-document-list";

const gameCategory = {
  name: "gameCategory",
  title: "Game Categories",
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
      description: "The title of the game category",
    },
    {
      name: "description",
      title: "Description",
      rows: 5,
      type: "text",
      description: "Description of the game category",
    },
    {
      name: "thumbnail",
      title: "Thumbnail",
      type: "thumbnail",
      description: "Upload a category image",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "The slug for the category URL",
      options: {
        source: "title",
        maxLength: 100,
      },
    },
    {
      name: "seo",
      title: "SEO",
      type: "meta",
      description: "SEO metadata of this category",
    },
    {
      name: "related_categories",
      title: "Related Categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{type: "gameCategory"}],
        },
      ],
      description: "Related categories for this game category",
      validation: (Rule: any) => Rule.unique(),
    },
    orderRankField({type: "game"}),
  ],
  orderings: [orderRankOrdering],

  preview: {
    select: {
      title: "title",
      subtitle: "slug.current",
      media: "thumbnail.thumbnail",
    },
  },
};

export default gameCategory;
