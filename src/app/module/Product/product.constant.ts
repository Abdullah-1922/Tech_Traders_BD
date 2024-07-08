export type TPurpose = {
  id: number;
  title: string;
  description: string;
};
export type TValidFeatures = {
  id: number;
  title: string;
  description: string;
};
export type TPortable = {
  isPortable: boolean;
  description:
    | `I'll use it mainly at home or in the office`
    | `I need it to be lightweight and compact`;
};

export const validFeatures = [
    { id: 1, title: "Backlit Keyboard", description: "For gaming atmosphere and aesthetics" },
    { id: 2, title: "Fingerprint Sensor", description: "For quick and secure access" },
    { id: 3, title: "Touchscreen", description: "For intuitive screen interaction" },
    { id: 4, title: "360° Convertible", description: "Laptop turns into a tablet" },
    { id: 5, title: "Detachable", description: "Removable screen for ultimate portability" },
    { id: 6, title: "Dual Display", description: "Two screens for multitasking" },
    { id: 7, title: "Metal Build", description: "Durable and high-quality laptop" },
    { id: 8, title: "Privacy Shutter Webcam", description: "For enhanced privacy" },
    { id: 9, title: "Original Operating System", description: "Genuine and reliable software" },
  ];

export const purposes: TPurpose[] = [
  {
    id: 1,
    title: "Basic Home Use",
    description: "Everyday tasks like browsing and entertainment",
  },
  {
    id: 2,
    title: "Basic Office Use",
    description: "Word processing, spreadsheets, communication",
  },
  {
    id: 3,
    title: "Study",
    description: "For academic study, research, and online learning",
  },
  { id: 4, title: "Freelancing", description: "For various freelance work" },
  { id: 5, title: "Basic Programming", description: "Suitable for coding" },
  {
    id: 6,
    title: "Software Development",
    description: "Complex software coding",
  },
  {
    id: 7,
    title: "Graphic Design",
    description: "Digital art and design work",
  },
  {
    id: 8,
    title: "Video Editing",
    description: "Video editing and rendering tasks",
  },
  { id: 9, title: "Gaming", description: "High-end gaming experience" },
  {
    id: 10,
    title: "Streaming",
    description: "For online video and live broadcasts",
  },
  {
    id: 11,
    title: "Gaming & Streaming",
    description: "Simultaneous gaming and streaming",
  },
];
