type ListTypes = {
  path: string;
  pathColor: string;
  title: string;
  subTitle: string;
  isRed: boolean;
  price: number;
}[];

export const transactionData: ListTypes = [
  {
    path: "/transactIcon/Dollar.svg",
    pathColor: "blue",
    title: "Paypal Transfer",
    subTitle: "Money Added",
    isRed: false,
    price: 350,
  },
  {
    path: "/transactIcon/Wallet.svg",
    pathColor: "blue",
    title: "Wallet",
    subTitle: "Bill Payments",
    isRed: true,
    price: 590,
  },
  {
    path: "/transactIcon/CreditCard.svg",
    pathColor: "yellow",
    title: "Wallet",
    subTitle: "Money reversed",
    isRed: false,
    price: 860,
  },
  {
    path: "/transactIcon/BankTransfer.svg",
    pathColor: "pink",
    title: "Wallet",
    subTitle: "Money Added",
    isRed: false,
    price: 430,
  },
  {
    path: "/transactIcon/Dollar.svg",
    pathColor: "blue",
    title: "Wallet",
    subTitle: "Payment Sent",
    isRed: true,
    price: 90,
  },
];

export const weeklyList: ListTypes = [
  {
    path: "/weekly/sales.svg",
    pathColor: "darkPink",
    title: "Top Sales",
    subTitle: "Jospeh Doyin",
    isRed: false,
    price: 750,
  },
  {
    path: "/weekly/star.svg",
    pathColor: "yellow",
    title: "Best Seller",
    subTitle: "Williams Chukwuma",
    isRed: false,
    price: 490,
  },
  {
    path: "/weekly/chat.svg",
    pathColor: "green",
    title: "Top Loss",
    subTitle: "Adewale Ajayi",
    isRed: true,
    price: 890,
  },
];

export const LeaderIcons = [
  { path: "/headerIcon/divineAvi.jpg" },
  { path: "/Leader/av1.jpg" },
  { path: "/Leader/av2.jpg" },
  { path: "/Leader/av3.jpg" },
  { path: "/Leader/av4.jpg" },
];
