import antiAcne from "./assets/zestonaAntiAcne.jpeg";
import antiWrinklle from "./assets/AntiWrinkle.jpeg";
import vitaminC from "./assets/vitaminc.jpeg";
import facemask from "./assets/facemask.jpeg";

const products = [
  {
    id: 1,
    image: facemask,
    title: "Korean Sheet Mask (Pack of 4)",
    originalPrice: 1800,
    discountedPrice: 1200,

    description:
      "A deep-cleansing face mask that removes impurities, minimizes pores, and refreshes the skin for a healthy glow.",
    usage1: "⁠⁠Begin with a thorough deep cleanse to refresh and purify the skin.",
    usage2:
      "⁠Gently apply the face mask, allowing its soothing properties to envelop your skin.",
    usage3:
      "⁠Leave the mask to work its magic for 15 minutes, letting it nourish and rejuvenate.",
    usage4: "⁠⁠Rinse your face once more, revealing a beautifully revitalized complexion.",
    sold : 147
  },
  {
    id: 2,
    image: facemask,
    title: "Korean Sheet Mask (Pack of 1)",
    originalPrice: 600,
    discountedPrice: 400,

    description:
      "A deep-cleansing face mask that removes impurities, minimizes pores, and refreshes the skin for a healthy glow.",
    usage1: "⁠⁠Begin with a thorough deep cleanse to refresh and purify the skin.",
    usage2:
      "⁠Gently apply the face mask, allowing its soothing properties to envelop your skin.",
    usage3:
      "⁠Leave the mask to work its magic for 15 minutes, letting it nourish and rejuvenate.",
    usage4: "⁠⁠Rinse your face once more, revealing a beautifully revitalized complexion.",
    sold : 97
  },
  {
    id: 3,
    image: antiAcne,
    title: "Anti Acne",
    originalPrice: 1500,
    discountedPrice: 1200,
    description:
      "A powerful acne-fighting formula that helps reduce breakouts, unclogs pores, and soothes inflamed skin.",
    usage1: "⁠Gently cleanse your face with lukewarm water.",
    usage2:
      "Delicately apply a few drops of Zestona Serum, allowing it to absorb fully.",
    usage3:
      "Let the serum rest on your skin for a few minutes to work its magic.",
    usage4: "⁠Rinse your face thoroughly to reveal refreshed, clear skin.",
    sold : 52
  },
  {
    id: 4,
    image: antiWrinklle,
    title: "Anti Wrinkle",
    originalPrice: 1600,
    discountedPrice: 1200,
    description:
      "A rejuvenating anti-aging cream designed to reduce fine lines, boost collagen production, and hydrate the skin.",
    usage1: "⁠Gently cleanse your face with lukewarm water.",
    usage2:
      "Delicately apply a few drops of Zestona Serum, allowing it to absorb fully.",
    usage3:
      "Let the serum rest on your skin for a few minutes to work its magic.",
    usage4: "⁠Rinse your face thoroughly to reveal refreshed, clear skin.",
    sold : 69
  },
  {
    id: 5,
    image: vitaminC,
    title: "Vitamin C Serum",
    originalPrice: 1800,
    discountedPrice: 1200,
    description:
      "An antioxidant-rich serum that brightens skin, evens out skin tone, and protects against environmental damage.",
    usage1: "⁠Gently cleanse your face with lukewarm water.",
    usage2:
      "Delicately apply a few drops of Zestona Serum, allowing it to absorb fully.",
    usage3:
      "Let the serum rest on your skin for a few minutes to work its magic.",
    usage4: "⁠Rinse your face thoroughly to reveal refreshed, clear skin.",
    sold : 73
  }
];

export default products;
