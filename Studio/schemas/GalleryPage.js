export default {
  name: "GalleryPage",
  title: "Gallery",
  type: "document",
  fields: [
    //   1st Gallery
    {
      title: "Header",
      name: "precastHeader",
      type: "string",
    },
    {
      title: "Article",
      name: "precastText",
      type: "text",
    },
    {
      title: "Precast Repair",
      name: "precast",
      type: "array",
      of: [
        {
          type: "MainImage",
        },
      ],
      options: {
        sortable: true,
      },
    },
    // 2nd Header
    {
      title: "Header",
      name: "renovationsHeader",
      type: "string",
    },
    {
      title: "Article",
      name: "renovationText",
      type: "text",
    },
    {
      title: "Renovation Repair",
      name: "renovations",
      type: "array",
      of: [
        {
          type: "MainImage",
        },
      ],
      options: {
        sortable: true,
      },
    },
    // 3nd Gallery
    {
      title: "Header",
      name: "concreteHeader",
      type: "string",
    },
    {
      title: "Article",
      name: "concreteText",
      type: "text",
    },
    {
      title: "Concrete Repair",
      name: "concrete",
      type: "array",
      of: [
        {
          type: "MainImage",
        },
      ],
      options: {
        sortable: true,
      },
    },
    // 4rd Gallery
    {
      title: "Header",
      name: "stainHeader",
      type: "string",
    },
    {
      title: "Article",
      name: "stainText",
      type: "text",
    },
    {
      title: "Stain Repair",
      name: "stain",
      type: "array",
      of: [
        {
          type: "MainImage",
        },
      ],
      options: {
        sortable: true,
      },
    },
  ],
};
