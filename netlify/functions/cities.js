// domain/.netlify/functions/jobs
require("dotenv").config();

exports.handler = async function (event, context) {
  const db = {
    cities: [
      {
        id: "92be",
        cityName: "Accra",
        country: "Ghana",
        emoji: "🇬🇭",
        date: "2024-06-09T22:35:48.146Z",
        notes: "",
        position: {
          lat: "5.659718554577286",
          lng: "-0.17578125",
        },
      },
      {
        id: "058d",
        cityName: "Quintana Redonda",
        country: "Spain",
        emoji: "🇪🇸",
        date: "2024-06-17T02:19:20.902Z",
        notes: "",
        position: {
          lat: "41.623655390686395",
          lng: "-2.5488281250000004",
        },
      },
      {
        id: "6b99",
        cityName: "Rehoboth District",
        country: "United States of America (the)",
        emoji: "🇺🇸",
        date: "2024-06-17T02:22:33.954Z",
        notes: "",
        position: {
          lat: "36.96744946416934",
          lng: "-78.4423828125",
        },
      },
    ],
  };
  return {
    statusCode: 200,
    body: JSON.stringify(db),
  };
};
