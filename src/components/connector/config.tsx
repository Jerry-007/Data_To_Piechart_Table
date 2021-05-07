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
        name: "accessToken",
        label: "Token",
        type: "string",
        required: true,
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
        name: "accountID",
        label: "AccountID",
        type: "id",
        required: true,
      },
      {
        name: "passcode",
        label: "Passcode",
        type: "password",
        required: true,
      },
      {
        name: "acessToken",
        label: "Token",
        type: "text",
        required: true,
      },
      {
        name: "region",
        label: "Region",
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
    form: [],
  },
];

export default connectorsConfig;
