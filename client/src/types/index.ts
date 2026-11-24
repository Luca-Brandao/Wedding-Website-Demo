export type Accommodation = {
  name: string;
  distance: string;
  rating: number;
  website?: string;
  description: string;
  phone: string;
};

export type GalleryImage = {
  id: number;
  src: string;
  highResSrc?: string;
  alt: string;
};

export type ScheduleItem = {
  time: string;
  title: string;
  details: string;
};

export type WeddingData = {
  date: string;
  displayDate: string;
  location: string;
  venue: {
    name: string;
    receptionAddress: string;
    arrivalTime: string;
    ceremonyTime: string;
    receptionTime: string;
    parking: string;
  };
  story: {
    title: string;
    howWeMet: string;
    proposal: string;
  };
  schedule: ScheduleItem[];
};
