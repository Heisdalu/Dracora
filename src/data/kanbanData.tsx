/*
[
    {title: 'Inprogress', message: [
        {messageTitle: 'Todo List', messageText: ''}
    ]},

]

*/

export const kanbanData: { 
  title: string;
  message: {
    id: string;
    messageTitle: string;
    messageText: string;
  }[];
}[] = [
  {
    title: "To Do",
    message: [
      {
        id: "1",
        messageTitle: "Holiday Sale",
        messageText:
          "Don't miss our special holiday sale! Get discounts on a wide range of products.",
      },
      {
        id: "2",
        messageTitle: "System Maintenance",
        messageText:
          "Our website will undergo maintenance on August 25th. Expect temporary downtime.",
      },
    ],
  },
  {
    title: "In Progress",
    message: [
      {
        id: "3",
        messageTitle: "Welcome",
        messageText:
          "Thank you for visiting our website. We're glad to have you here!",
      },
      {
        id: "4",
        messageTitle: "New Feature",
        messageText:
          "Introducing our latest feature that will make your life easier.",
      },
      {
        id: "5",
        messageTitle: "Important Notice",
        messageText:
          "Please be advised of the upcoming maintenance schedule on August 25th.",
      },
    ],
  },
  {
    title: "Done",
    message: [
      {
        id: "6",
        messageTitle: "Product Launch",
        messageText:
          "Exciting news! We're launching a new product next week. Stay tuned!",
      },
      {
        id: "7",
        messageTitle: "Customer Survey",
        messageText:
          "We value your feedback. Please take a moment to complete our customer survey.",
      },
      {
        id: "8",
        messageTitle: "Summer Promotion",
        messageText:
          "Celebrate summer with our exclusive promotion. Limited-time offers available.",
      },
    ],
  },
  {
    title: "Backlog",
    message: [
      {
        id: "9",
        messageTitle: "Thank You!",
        messageText:
          "We appreciate your continued support. Thank you for being a part of our community.",
      },
      {
        id: "10",
        messageTitle: "Account Security",
        messageText:
          "Enhance your account security by enabling two-factor authentication.",
      },
    ],
  },
];
