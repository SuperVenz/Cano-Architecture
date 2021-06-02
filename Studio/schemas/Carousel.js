export default {
  name: "carousel",
  title: "Carousel Image",
  type: "image",
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: "alt",
      title: "Alternative text (for screen readers)",
      type: "string",
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "header",
      title: "Header",
      type: "string",
      options: {
        isHighlighted: true,
      },
    },
  ],
};
