import { ReleaseCardData } from "../types/type";
import image1 from "../assets/YomeanimoCLONE.png";
import image2 from "../assets/Designo-project.png";
import image3 from "../assets/freemarket-home.png";
import image4 from "../assets/claire-home.png";

export const dataProjectCard: Array<ReleaseCardData> = [
  {
    id: 222,
    title: "YoMeAnimoAPP",
    paragraph:
      "The purpose of giving the exact information in relation to the country of the user and the country where he wants to arrive. These functionalities vary from types of visas, jobs, studies and important data at the time of arrival in a new country. It has personalized services, newsletters, blogs and community.",
    route: "/project",
    links: {
      deploy: "https://yomeanimo-chakra.netlify.app/",
      repository: "https://github.com/DrHeinz11/ReWork-Yomeanimo",
    },
    imgUrl: image1,
    imgAlt: "Yomeanimo-home",
  },
  {
    id: 22,
    title: "Designo-Web site",
    paragraph: "This application is a landing page that serves to publicize both designs and applications already created for our customers around the world, this business has several franchises throughout the world therefore serves as a platform for redirecting customers depending on the country or region where they are.",
    route: "/project",
    links: { deploy: "https://designo-website.netlify.app/", repository: "https://github.com/DrHeinz11/DesignoWebSite" },
    imgUrl: image2,
    imgAlt: "Designo-home",
  },
  {
    id: 23,
    title: "FreeMarket-APP",
    paragraph: "In this case I took the UI design of a very famous ecommerce in Latin America (MercadoLibre) as a reference and made some changes in the layout and styles.",
    route: "/project",
    links: { deploy: "https://freemarket-clone.netlify.app/", repository: "https://github.com/DrHeinz11/MercadoLibreCLONE" },
    imgUrl: image3,
    imgAlt: "FreeMarket-Home",
  },
  {
    id: 24,
    title: "Marie-Claire magazine",
    paragraph:
      "In this case I took the UI design of a very famous fashion magazine in Europe (Marie Claire) which I adapted using different styles and layouts.",
    route: "/project",
    links: { deploy: "https://claire-page.netlify.app/", repository: "https://github.com/DrHeinz11/Claire-page" },
    imgUrl: image4,
    imgAlt: "string",
  },
];
