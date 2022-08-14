export const transaction = [
  {
    type: 'income',
    value: '200,00',
    currency: 'BRL',
    date: new Date(1315641613).getTime(),
    title: 'Netflix',
    tag: 'diversão',
    isMonth: true,
  },
  {
    type: 'income',
    value: '200,00',
    currency: 'BRL',
    date: new Date(1315641613).getTime(),
    title: 'Netflix',
    tag: 'lazer',
    isMonth: true,
  },
];

export const fullList = {
  indexList: [
    {
      month: 7,
      year: 22,
      index: 1,
    },
  ],

  transactions: [
    {
      month: 7,
      year: 22,
      list: [
        {
          id: 52346902,
          title: 'Pizza no iFood',
          date: '10/08/2022',
          account: {
            name: 'BTG',
            type: 'Credit',
          },
          category: 'Comida',
          status: 'Paid',
          amount: -32,
        },
        {
          id: 14322314,
          title: 'Remédio para pulga dos gatos',
          date: '12/08/2022',
          account: {
            name: 'BTG',
            type: 'Credit',
          },
          category: 'Pets',
          status: 'Paid',
          amount: -24,
        },
        {
          id: 14389494,
          title: 'Salário',
          date: '12/08/2022',
          account: {
            name: 'BTG',
            type: 'Debit',
          },
          category: 'Salário',
          status: 'Paid',
          amount: 1234.60,
        },
      ],
    },
  ],
};

