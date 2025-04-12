import {
  img1,
  img3,
  MFSM,
  edunet,
  mathwork,
  eduskill,
  OpenFOAM,
  Maede,
  Javad,
  Navid,
  Shivesh,
  Ansys,
  WRF,
  TF,
  PyTorch,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "team",
    title: "Team",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "Neighborhood", icon: img1 },
  { title: "High-rise building", icon: img3},

];

export const technologies = [
  { name: "OpenFOAM", icon: OpenFOAM },
  { name: "Ansys", icon: Ansys },
  { name: "WRF", icon: WRF },
  { name: "PyTorch", icon: PyTorch },
  { name: "TF", icon: TF },
];

export const members = [
  {
    name: "Maede",
    description:
      "A Multi-Fidelity Surrogate Model for the prediction of wind loads on high-rise buildings using OpenFOAM and PyTorch.",
    tags: [
      { name: "OpenFOAM", color: "blue-text-gradient" },
      { name: "PyTorch", color: "green-text-gradient" },
    ],
    image: Maede,
   // source_code_link: "https://github.com/lohitkolluri/WeatherPedia",
  },
  {
    name: "Shivesh",
    description:
      "Bio",
    tags: [
      { name: "OpenFOAM", color: "blue-text-gradient" },
      { name: "PyTorch", color: "green-text-gradient" },
    ],
    image: Shivesh,
   // source_code_link: "https://github.com/lohitkolluri/WeatherPedia",
  },
  {
    name: "Javad",
    description:
      "Bio",
    tags: [
      { name: "OpenFOAM", color: "blue-text-gradient" },
      { name: "PyTorch", color: "green-text-gradient" },
    ],
    image: Javad,
   // source_code_link: "https://github.com/lohitkolluri/WeatherPedia",
  },
  {
    name: "Navid",
    description:
      "Bio",
    tags: [
      { name: "OpenFOAM", color: "blue-text-gradient" },
      { name: "PyTorch", color: "green-text-gradient" },
    ],
    image: Navid,
   // source_code_link: "https://github.com/lohitkolluri/WeatherPedia",
  },
];

export const projects = [
  {
    name: "MFSM",
    description:
      "A Multi-Fidelity Surrogate Model for the prediction of wind loads on high-rise buildings using OpenFOAM and PyTorch.",
    tags: [
      { name: "OpenFOAM", color: "blue-text-gradient" },
      { name: "PyTorch", color: "green-text-gradient" },
    ],
    image: MFSM,
   // source_code_link: "https://github.com/lohitkolluri/WeatherPedia",
  },
];
