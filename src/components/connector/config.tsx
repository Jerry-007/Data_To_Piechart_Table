const connectorsConfig = [
  {
    id: 1,
    label: "Google Analytics",
    type: "google_analytic",
    imgSrc: "",
    helpLink: "",
    description: "",
    disable: false,
    form: [
      {
        label: "token",
        type: "string",
      },
    ],
  },
  {
    id: 2,
    label: "Clevertap",
    type: "clevertap",
    imgSrc: "",
    helpLink: "",
    description: "",
    disable: false,
    form: [
      {
        label: "AccountID",
        type: "id",
        required: true,
      },
      {
        label: "PassCode",
        type: "password",
        required: true,
      },
      {
        label: "token",
        type: "text",
        required: true,
      },
      {
        label: "region",
        type: "string",
        required: false,
      },
    ],
  },
  {
    id: 3,
    label: "Some other",
    type: "other",
    imgSrc: "",
    helpLink: "",
    description: "Coming soon",
    disable: true,
    form:[]
  },
];

export default connectorsConfig;
