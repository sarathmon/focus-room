export const SERIES = [
  {
    name: "DESKTOP",
    data: [44, 55, 41, 67, 22, 43, 22, 34, 56, 33, 41, 20, 32, 51, 28],
  },
  {
    name: "MWEB",
    data: [13, 23, 20, 18, 13, 27, 12, 13, 16, 17, 31, 12, 22, 41, 18],
  },
  {
    name: "IPHONE",
    data: [11, 17, 12, 16, 21, 14, 11, 12, 10, 18, 22, 10, 12, 15, 12],
  },
  {
    name: "ANDROID",
    data: [21, 17, 24, 18, 22, 8, 10, 17, 14, 12, 21, 20, 12, 11, 27],
  },
  {
    name: "CSC",
    data: [18, 32, 26, 15, 12, 12, 16, 14, 16, 17, 14, 12, 13, 15, 13],
  },
  {
    name: "MPLUS",
    data: [20, 17, 25, 13, 27, 11, 32, 11, 18, 24, 21, 15, 19, 12, 14],
  },
];

export const OPTIONS = {
  chart: {
    type: "bar",
    height: 250,
    stacked: true,
    background: "#0a0a0a",
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },

  responsive: [
    {
      breakpoint: 250,
      options: {
        legend: {
          position: "right",
          offsetX: -10,
          offsetY: 0,
        },
      },
    },
  ],

  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 2,
      dataLabels: {
        total: {
          enabled: false,
          style: {
            fontSize: "12px",
            fontWeight: 400,
          },
        },
      },
    },
  },
  xaxis: {
    type: "category",
    categories: [
      "10.01",
      "10.02",
      "10.03",
      "10.04",
      "10.05",
      "10.06",
      "10.07",
      "10.08",
      "10.09",
      "10.10",
      "10.11",
      "10.12",
      "10.13",
      "10.14",
      "10.15",
    ],
  },
  legend: {
    position: "top",
    offsetY: 20,
  },
  fill: {
    opacity: 1,
  },
  theme: {
    mode: "dark",
    palette: "palette1",
    monochrome: {
      enabled: false,
      color: "#000000",
      shadeTo: "dark",
      shadeIntensity: 0.65,
    },
  },
};

export const LOCALE = [
  {
    id: 1,
    name: "US",

    isHealthy: true,
  },
  {
    id: 2,
    name: "CA",

    isHealthy: true,
  },
];

export const VENDORS = [
  {
    id: 1,
    name: "CONSTRUCTOR",

    isHealthy: true,
  },
  {
    id: 2,
    name: "BREAD FINANCIAL",

    isHealthy: true,
  },
  {
    id: 3,
    name: "PAYPAL",

    isHealthy: true,
  },
  {
    id: 4,
    name: "CYBERSOURCE",

    isHealthy: true,
  },
  {
    id: 5,
    name: "CHASE",

    isHealthy: true,
  },
  {
    id: 6,
    name: "VALUELINK",

    isHealthy: false,
  },
  {
    id: 7,
    name: "BAZAAR VOICE",

    isHealthy: true,
  },
  {
    id: 8,
    name: "FORTER",

    isHealthy: true,
  },
  {
    id: 9,
    name: "POWERFRONT",

    isHealthy: false,
  },
  {
    id: 10,
    name: "CLARNA",

    isHealthy: true,
  },
  {
    id: 11,
    name: "VERTEX",

    isHealthy: true,
  },
  {
    id: 12,
    name: "AFTERPAY",

    isHealthy: true,
  },
  {
    id: 13,
    name: "EPSILON",

    isHealthy: true,
  },
  {
    id: 14,
    name: "CERTONA",

    isHealthy: true,
  },
  {
    id: 15,
    name: "NARVAR",

    isHealthy: true,
  },
  {
    id: 16,
    name: "LOQATE",

    isHealthy: true,
  },
  {
    id: 17,
    name: "ACAMAI",

    isHealthy: true,
  },
  {
    id: 18,
    name: "ADOBE",

    isHealthy: true,
  },
];

export const CHANNELS = [
  {
    id: 1,
    name: "DESKTOP",

    isHealthy: true,
  },
  {
    id: 2,
    name: "IPHONE",

    isHealthy: true,
  },
  {
    id: 3,
    name: "MWEB",

    isHealthy: true,
  },
  {
    id: 4,
    name: "ANDROID",

    isHealthy: true,
  },
  {
    id: 5,
    name: "MPLUS",

    isHealthy: true,
  },
  {
    id: 6,
    name: "CSC",

    isHealthy: true,
  },
];

export const TYPES = [
  {
    id: 1,
    name: "SHIP TO HOME",

    isHealthy: true,
  },
  {
    id: 2,
    name: "SAME DAY DELIVERY",

    isHealthy: true,
  },

  {
    id: 3,
    name: "BOPIS",

    isHealthy: true,
  },
];

export const MICRO_SERVICES = [
  {
    id: 1,
    name: "AUTHENTICATION",

    isHealthy: true,
  },
  {
    id: 2,
    name: "PAYMENT",

    isHealthy: false,
  },
  {
    id: 3,
    name: "CONTENT EXPERIENCE",

    isHealthy: true,
  },
  {
    id: 4,
    name: "SEARCH EXPERIENCE",

    isHealthy: true,
  },
  {
    id: 5,
    name: "BROWSE EXPERIENCE",

    isHealthy: true,
  },
  {
    id: 6,
    name: "PROFILE MANAGEMENT",

    isHealthy: true,
  },
  {
    id: 7,
    name: "BROWSE GRAPH",

    isHealthy: false,
  },
  {
    id: 8,
    name: "SEARCH GRAPH",

    isHealthy: true,
  },
  {
    id: 9,
    name: "TAX",

    isHealthy: false,
  },
  {
    id: 10,
    name: "INVENTORY AVAILABILITY",

    isHealthy: true,
  },
  {
    id: 11,
    name: "INVENTORY RESERVATION",

    isHealthy: true,
  },
  {
    id: 12,
    name: "INVENTORY SVC CONSUMER",

    isHealthy: true,
  },
  {
    id: 13,
    name: "JERRI CONTENT",

    isHealthy: false,
  },
  {
    id: 14,
    name: "JERRI CATALOG",

    isHealthy: true,
  },
  {
    id: 15,
    name: "PERSONALIZATION",

    isHealthy: true,
  },
  {
    id: 16,
    name: "CONTENT EXPERIENCE",

    isHealthy: true,
  },
  {
    id: 17,
    name: "SEPHORA CREDIT CARD",

    isHealthy: true,
  },
  {
    id: 18,
    name: "PROMOTION",

    isHealthy: true,
  },

  {
    id: 19,
    name: "FULFILLMENT",

    isHealthy: true,
  },
  {
    id: 20,
    name: "LOCATION MANAGEMENT",

    isHealthy: true,
  },
  {
    id: 21,
    name: "LOYALTY REWARDS",

    isHealthy: true,
  },

  {
    id: 22,
    name: "COUPON SERVICE",

    isHealthy: true,
  },
  {
    id: 23,
    name: "ENTERPRISE NOTIFICATION",

    isHealthy: true,
  },
  {
    id: 24,
    name: "LOYALTY ORDER",

    isHealthy: true,
  },
  {
    id: 25,
    name: "LOYALTY METADATA",

    isHealthy: true,
  },

  {
    id: 26,
    name: "POINT MANAGEMENT",

    isHealthy: true,
  },
  {
    id: 27,
    name: "PROMISE DATE",

    isHealthy: false,
  },
  {
    id: 28,
    name: "ADVOCACY",

    isHealthy: false,
  },
  {
    id: 29,
    name: "SEGMENTATION",

    isHealthy: true,
  },
  {
    id: 30,
    name: "SUBSCRIPTION",

    isHealthy: true,
  },
];
