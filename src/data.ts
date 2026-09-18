export interface ProductItem {
  id: string;
  name: string;
  description: string;
  isSignature?: boolean;
  tag?: string;
  placeholderAlt: string;
  iconType: 'ghee' | 'milk' | 'curd' | 'buttermilk';
}

export const BUSINESS_INFO = {
  name: "Queen Milk & Milk Products",
  shortName: "Queen Milk",
  address: "No 153/9, Palakadu Main Road, 1st Floor, near C Indicate Bank, Kunniyamuthur, Coimbatore – 641008, Tamil Nadu, India",
  shortAddress: "Palakadu Main Rd, Kunniyamuthur, Coimbatore",
  phonePlaceholder: "+91 XXXXX XXXXX",
  hoursPlaceholder: "Hours: confirm with shop",
  whatsappUrl: "https://wa.me/91XXXXXXXXXX",
  mapQuery: "No 153/9, Palakadu Main Road, near Canara Bank, Kunniyamuthur, Coimbatore 641008",
  googleMapsEmbedUrl: "https://maps.google.com/maps?q=No+153%2F9%2C+Palakadu+Main+Road%2C+Kunniyamuthur%2C+Coimbatore+641008+Tamil+Nadu&t=&z=16&ie=UTF8&iwloc=&output=embed",
  googleMapsDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=No+153%2F9%2C+Palakadu+Main+Road%2C+Kunniyamuthur%2C+Coimbatore+641008+Tamil+Nadu",
};

export const PRODUCTS: ProductItem[] = [
  {
    id: "buffalo-ghee",
    name: "Buffalo Ghee",
    description: "Slow-simmered from fresh cream, small batches. Prepared in the time-tested traditional way with a rich, authentic aroma and granular texture.",
    isSignature: true,
    tag: "Signature Product",
    placeholderAlt: "replace-with-ghee-photo",
    iconType: "ghee",
  },
  {
    id: "fresh-milk",
    name: "Fresh Milk",
    description: "Full cream and toned, brought in daily. Pure, wholesome milk delivered straight from local sources every single morning.",
    placeholderAlt: "replace-with-milk-photo",
    iconType: "milk",
  },
  {
    id: "curd",
    name: "Curd",
    description: "Set the traditional way, thick and mildly tangy. Natural culture fermentation with zero gelatin, stabilizers, or additives.",
    placeholderAlt: "replace-with-curd-photo",
    iconType: "curd",
  },
  {
    id: "buttermilk",
    name: "Buttermilk",
    description: "Lightly spiced, made fresh through the week. A refreshing, cooling traditional drink churned fresh from whole curd.",
    placeholderAlt: "replace-with-buttermilk-photo",
    iconType: "buttermilk",
  },
];

export const WHY_CHOOSE_US = [
  {
    id: "same-day",
    title: "Sourced Same Day",
    description: "Not stored stock. Fresh daily supplies brought straight to the counter every morning so you receive peak quality.",
  },
  {
    id: "no-preservatives",
    title: "No Preservatives",
    description: "Zero chemical preservatives, additives, or artificial stabilizers. Just honest, unadulterated traditional dairy.",
  },
  {
    id: "real-shop",
    title: "A Real Shop You Can Walk Into",
    description: "Visit our counter on Palakadu Main Road, meet the team, inspect the freshness yourself, and pick up your daily requirements.",
  },
];
