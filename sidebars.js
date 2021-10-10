module.exports = {
  docs: [
    {
      type: "doc",
      id: "introduction",
    },
    {
      type: "category",
      label: "Getting started",
      collapsed: false,
      items: [
        {
          type: "autogenerated",
          dirName: "getting-started",
        },
      ],
    },
    {
      type: "category",
      label: "Concepts",
      collapsed: false,
      items: [
        {
          type: "autogenerated",
          dirName: "concepts",
        },
      ],
    },
    {
      type: "category",
      label: "Guides",
      collapsed: false,
      items: [
        {
          type: "autogenerated",
          dirName: "guides",
        },
      ],
    },
    {
      type: "category",
      label: "Examples",
      items: [
        {
          type: "autogenerated",
          dirName: "examples",
        },
      ],
    },
    {
      type: "category",
      label: "API reference",
      collapsed: true,
      items: [
        { type: "doc", id: "api/overview" },
        {
          type: "category",
          label: "All classes",
          items: [{ type: "autogenerated", dirName: "api/classes" }],
        },
        {
          type: "category",
          label: "All enums",
          items: [{ type: "autogenerated", dirName: "api/enums" }],
        },
        {
          type: "category",
          label: "All functions",
          items: [{ type: "autogenerated", dirName: "api/functions" }],
        },
        {
          type: "category",
          label: "All interfaces",
          items: [{ type: "autogenerated", dirName: "api/interfaces" }],
        },
        {
          type: "category",
          label: "All types",
          items: [{ type: "autogenerated", dirName: "api/types" }],
        },
      ],
    },
    {
      type: "doc",
      id: "contribute",
    },
  ],
};
