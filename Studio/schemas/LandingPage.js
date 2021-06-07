export default {
  name: "HomePage",
  title: "Homepage",
  type: "document",
  fields: [
    {
      name: "topPic",
      title: "Top Pic",
      type: "MainImage",
      description: "The Top pic of the landing page",
    },
    {
      title: "Excite Title",
      name: "excite_title",
      type: "string",
    },

    {
      title: "Excite",
      name: "excite",
      type: "text",
    },
    {
      title: "Button ",
      name: "button",
      type: "string",
    },
    {
      title: "Educate Title",
      name: "educate_title",
      type: "string",
    },
    {
      title: "Educate",
      name: "educate",
      type: "text",
    },
    {
      title: "Before and After",
      name: "beforeAfter",
      description: "Desktop Only!",
      type: "array",
      of: [
        {
          type: "beforeAfter",
        },
      ],
      options: {
        sortable: true,
      },
    },
    {
      title: "Carousel",
      name: "carousel",
      description: "Mobile Only!",
      type: "array",
      of: [
        {
          type: "carousel",
        },
      ],
      options: {
        sortable: true,
      },
    },
    {
      title: "Experience Title",
      name: "experience_title",
      type: "string",
    },
    {
      title: "Experience",
      name: "experience",
      type: "text",
    },
    {
      name: "expPic",
      title: "Experience Pic",
      type: "MainImage",
      description: "The pic under Experience of the landing page",
    },
    {
      name: "engagePic",
      title: "Engage Pic",
      type: "MainImage",
      description: "The bottom pic of the landing page",
    },
  ],
};
