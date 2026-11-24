import type { Accommodation, WeddingData } from "../../types";

// Fictional content only. Never use the private event data in this demo.
export const fallbackWedding: WeddingData = {
  date: "2030-06-15T15:00:00Z",
  displayDate: "15 June 2030",
  location: "Sample Garden Venue - fictional demonstration",
  venue: {
    name: "Sample Garden Venue",
    receptionAddress: "Fictional demo venue - no real address",
    arrivalTime: "14:00",
    ceremonyTime: "15:00",
    receptionTime: "Sample reception programme",
    parking: "Demonstration content only."
  },
  story: {
    title: "Our Story",
    howWeMet: "Alex and Taylor are fictional characters used to demonstrate the story section. Replace this sample text with content you have permission to publish.",
    proposal: "This sample story demonstrates the page layout and typography. No personal story from the original private project is included."
  },
  schedule: [
    { time: "14:00", title: "Arrival", details: "Sample welcome programme." },
    { time: "15:00", title: "Ceremony", details: "Fictional ceremony schedule." },
    { time: "16:00", title: "Reception", details: "Sample refreshments and conversation." },
    { time: "18:00", title: "Dinner", details: "Fictional dinner programme." },
    { time: "20:00", title: "Celebration", details: "Sample evening programme." }
  ]
};

export const fallbackAccommodation: Accommodation[] = [
  { name: "Sample Garden Stay", distance: "Sample distance", rating: 4.5, description: "A fictional accommodation card for the portfolio demo.", phone: "" },
  { name: "Sample City Lodge", distance: "Sample distance", rating: 4.2, description: "No real bookings, website or contact number is connected.", phone: "" }
];
