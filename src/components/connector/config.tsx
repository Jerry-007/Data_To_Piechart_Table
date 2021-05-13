const connectorsConfig = {
  google_analytic: {
    id: 1,
    label: "Google Analytics",
    type: "google_analytic",
    cardImgSrc: "/static/googleAnalyticsModal.svg",
    modalImgSrc: "/static/googleAnalyticsModal.svg",
    helpLink: "https://developers.google.com/analytics",
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
  clevertap: {
    id: 2,
    label: "Clevertap",
    type: "clevertap",
    cardImgSrc: "/static/clevertapLogo.svg",
    modalImgSrc: "/static/clevertapLogo.svg",
    helpLink: "https://developer.clevertap.com/docs/getting-started",
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
  mixpanel: {
    id: 3,
    label: "Mixpanel",
    type: "mixpanel",
    cardImgSrc: "/static/mixpanel.svg",
    modalImgSrc: "/static/mixpanel.svg",
    helpLink: "https://help.mixpanel.com/hc/en-us/sections/360004828411-Developer-Documentation",
    description: "Coming soon",
    disable: true,
    form: [],
  },
};

export default connectorsConfig;
