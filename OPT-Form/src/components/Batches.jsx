import React from 'react';

const Batches = () => {
  const batches = [
    {
      title: 'SQL Basics To Advanced Mastery Course',
      startDate: '20 Jul 2024',
      endDate: '28 Jul 2024',
      price: '₹ 0',
      validity: '180 days',
      status: 'Published',
      image: '/image1.webp'
    },
    {
      title: '30 Days Of Javascript Challenge',
      startDate: '13 Jul 2024',
      endDate: '12 Aug 2024',
      price: '₹ 0',
      validity: '33 days',
      status: 'Unpublished',
      image: '/image2.jpg'
    },
    {
      title: 'Interview Preparation With Javascript 2.0',
      startDate: '02 Aug 2024',
      endDate: '15 Sep 2024',
      price: '₹ 10,000',
      validity: '365 days',
      status: 'Published',
      image: '/image3.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-purple-200 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-4xl font-bold text-center text-purple-700 mb-4">Chai aur Code</h1>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Batches</h2>
          <p className="text-gray-700">Create learner's batch and share information at the same time.</p>
        </div>
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Search by Title (alt+k or cmd+k)"
            className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none"
          />
          <button className="bg-purple-500 text-white px-4 py-2 rounded-r-lg">Search</button>
        </div>
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200">Title</th>
              <th className="py-2 px-4 border-b border-gray-200">Start Date</th>
              <th className="py-2 px-4 border-b border-gray-200">End Date</th>
              <th className="py-2 px-4 border-b border-gray-200">Price</th>
              <th className="py-2 px-4 border-b border-gray-200">Validity/Expiry</th>
              <th className="py-2 px-4 border-b border-gray-200">Status</th>
            </tr>
          </thead>
          <tbody>
            {batches.map((batch, index) => (
              <tr key={index} className="text-gray-700">
                <td className="py-2 px-4 border-b border-gray-200 flex items-center">
                  <img src={batch.image} alt={batch.title} className="w-16 h-16 mr-2 rounded-full"/>
                  {batch.title}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">{batch.startDate}</td>
                <td className="py-2 px-4 border-b border-gray-200">{batch.endDate}</td>
                <td className="py-2 px-4 border-b border-gray-200">{batch.price}</td>
                <td className="py-2 px-4 border-b border-gray-200">{batch.validity}</td>
                <td className="py-2 px-4 border-b border-gray-200">
                  <span className={`px-2 py-1 rounded-full text-white ${batch.status === 'Published' ? 'bg-green-500' : 'bg-gray-500'}`}>
                    {batch.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center mt-4">
          <div>Rows per page</div>
          <select className="border border-gray-300 rounded-lg px-2 py-1">
            <option>10</option>
            <option>20</option>
            <option>30</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Batches;