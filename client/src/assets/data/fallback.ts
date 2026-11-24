import type { Accommodation, WeddingData } from "../../types";

// All people, venues and event information in this portfolio edition are fictional.
export const fallbackWedding: WeddingData = {
  date: "2030-06-15T15:00:00+02:00",
  displayDate: "15 June 2030",
  location: "Willowmere Garden Estate · Rosewood Valley",
  venue: {
    name: "Willowmere Garden Estate",
    receptionAddress: "18 Willow Lane, Rosewood Valley (fictional venue)",
    arrivalTime: "14:00",
    ceremonyTime: "15:00",
    receptionTime: "Dinner at 18:00 in the Glasshouse",
    parking: "Guest parking is beside the garden entrance. Follow the signs to the courtyard."
  },
  story: {
    title: "Our Story",
    howWeMet: "We met at a friend's games night in 2024. Alex arrived with a board game nobody knew how to play; Taylor volunteered to read the rules. One very competitive evening turned into a coffee the following weekend, and before long we were sharing Sunday walks, new recipes and a growing list of places to explore.",
    proposal: "On a quiet weekend away, Alex suggested an early walk to watch the sunrise. Taylor thought the picnic basket was the surprise. At the lookout, with two mugs of coffee and a handwritten note, Alex asked the question. The answer was yes before the coffee had a chance to go cold."
  },
  schedule: [
    { time: "14:00", title: "Welcome drinks", details: "Arrive through the courtyard, find your seat and enjoy a warm welcome drink." },
    { time: "15:00", title: "The ceremony", details: "Join us in the garden chapel as we exchange our vows." },
    { time: "16:00", title: "Canapés & photographs", details: "Enjoy garden canapés while we capture a few memories with family and friends." },
    { time: "18:00", title: "Dinner & speeches", details: "A three-course dinner in the Glasshouse, followed by a few words from our favourite people." },
    { time: "20:00", title: "First dance", details: "The music starts, the cake is cut, and the dance floor is yours." },
    { time: "23:30", title: "A fond farewell", details: "One last song before we send you home with something sweet for the journey." }
  ]
};

export const fallbackAccommodation: Accommodation[] = [
  { name: "Willow Lane Guesthouse", distance: "5 minutes from the estate", rating: 4.5, description: "A small garden guesthouse with cosy rooms, breakfast on the terrace and secure parking. A comfortable option for couples staying overnight.", phone: "" },
  { name: "Rosewood Country Lodge", distance: "12 minutes from the estate", rating: 4.2, description: "Spacious family rooms and self-catering cottages overlooking the valley. Ideal for guests making a weekend of the celebration.", phone: "" }
];
