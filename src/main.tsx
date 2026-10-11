import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const title =
  "परब्रह्मस्वरूपिणी | श्री महालक्ष्मी अंबाबाई मंदिर, कोल्हापूर";

const description =
  "कोल्हापूर श्री महालक्ष्मी अंबाबाई दर्शन, अभिषेक पूजा बुकिंग, पूजा वेळा आणि धार्मिक सेवांची माहिती. Mahalaxmi Puja Booking, Kolhapur Mahalaxmi Abhishek Booking.";

document.title = title;

function setMeta(
  attribute: "name" | "property",
  key: string,
  content: string
) {
  let element = document.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`
  );

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.content = content;
}

setMeta("name", "description", description);

setMeta(
  "name",
  "keywords",
  [
    "परब्रह्मस्वरूपिणी",
    "परब्रम्हस्वरूपिणी",
    "श्री महालक्ष्मी अंबाबाई",
    "कोल्हापूर महालक्ष्मी",
    "कोल्हापूर अंबाबाई मंदिर",
    "महालक्ष्मी पूजा बुकिंग",
    "महालक्ष्मी अभिषेक बुकिंग",
    "महालक्ष्मी दर्शन",
    "कोल्हापूर महालक्ष्मी पूजा",
    "Mahalaxmi website",
    "Mahalaxmi Puja Booking",
    "Mahalaxmi Booking",
    "Kolhapur Mahalaxmi",
    "Kolhapur Ambabai Temple",
    "Mahalaxmi Abhishek Booking",
    "Mahalaxmi Darshan",
    "Mahalaxmi Temple Kolhapur",
    "Ambabai Puja Booking",
    "Abhishek Booking Kolhapur",
    "Parabramhaswarupini",
    "Parabrahmaswaroopini",
    "Shree Mahalaxmi Kolhapur",
    "Shree Devasthan",
  ].join(", ")
);

setMeta("property", "og:title", title);
setMeta("property", "og:description", description);
setMeta("property", "og:type", "website");
setMeta("property", "og:locale", "mr_IN");

setMeta("name", "twitter:card", "summary");
setMeta("name", "twitter:title", title);
setMeta("name", "twitter:description", description);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
