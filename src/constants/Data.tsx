export const transactionData: {
  path: string;
  pathColor: "blue" | "yellow" | "pink";
  title: string;
  subTitle: string;
  isRed: boolean;
  price: number;
}[] = [
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
