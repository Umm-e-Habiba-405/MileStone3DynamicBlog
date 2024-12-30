// pages/subscriptions.js

import React from 'react';

const SubscriptionList = () => {
  const subscriptions = [
    { date: '2024-12-30', action: 'Subscription Added', email: 'john.doe@email.com' },
    { date: '2024-12-30', action: 'Not Added', email: 'jane.smith@email.com' },
    { date: '2024-12-30', action: 'Subscription Added', email: 'david.jones@email.com' },
    { date: '2024-12-30', action: 'Not Added', email: 'emily.brown@email.com' },
    { date: '2024-12-30', action: 'Subscription Added', email: 'michael.davis@email.com' },
    { date: '2024-12-30', action: 'Not Added', email: 'susan.miller@email.com' },
    { date: '2024-12-30', action: 'Subscription Added', email: 'william.garcia@email.com' },
    { date: '2024-12-30', action: 'Not Added', email: 'linda.lee@email.com' },
    { date: '2024-12-30', action: 'Subscription Added', email: 'richard.harris@email.com' },
    { date: '2024-12-30', action: 'Not Added', email: 'patricia.clark@email.com' },
    { date: '2024-12-30', action: 'Subscription Added', email: 'thomas.rodriguez@email.com' },
    { date: '2024-12-30', action: 'Not Added', email: 'nancy.walker@email.com' },
    { date: '2024-12-30', action: 'Subscription Added', email: 'joseph.young@email.com' },
    { date: '2024-12-30', action: 'Not Added', email: 'karen.king@email.com' },
    { date: '2024-12-30', action: 'Subscription Added', email: 'charles.hill@email.com' },
    { date: '2024-12-30', action: 'Not Added', email: 'maria.wright@email.com' },
  ];

  return (
    <div className="container mx-auto p-6 w-[70%]">
      <h1 className="text-3xl font-bold mb-4 text-center">Subscription List</h1>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Date</th>
            <th className="border border-gray-300 px-4 py-2">Action</th>
            <th className="border border-gray-300 px-4 py-2">Email Address</th>
          </tr>
        </thead>
        <tbody>
          {subscriptions.map((subscription, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2 text-center ">{subscription.date}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{subscription.action}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{subscription.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubscriptionList;
