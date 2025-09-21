import React from 'react';

interface ComparisonTableOGProps {
  headers: string[];
  rows: Array<{ resource: string; [key: string]: string }>;
  uiText: {
    title: string;
  };
}

const ComparisonTableOG: React.FC<ComparisonTableOGProps> = ({ headers, rows, uiText }) => {
  const planKeys = headers.slice(1).map(h => 
    h.toLowerCase().replace(/\s+/g, '_').replace(/_gh$/, '') // handle both 'Simple GH' and 'Simple'
  );
  
  return (
    <section className="py-8 animate-fade-in">
      <h2 className="text-center text-3xl font-bold text-white mb-8"
        dangerouslySetInnerHTML={{ __html: uiText.title }}
      >
      </h2>
      <div className="overflow-x-auto bg-gray-800 p-1 rounded-xl shadow-xl">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-gray-900">
            <tr>
              {headers.map((header, index) => (
                <th
                  key={index}
                  scope="col"
                  className={`px-4 py-3.5 text-left text-sm font-semibold 
                              ${index === 0 ? 'text-white' : 
                                header.toLowerCase().includes('essencial') ? 'text-[#FF0000]' : 'text-gray-300'}`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700 bg-gray-800">
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-700/50 transition-colors">
                <td className="whitespace-nowrap px-4 py-4 text-sm font-medium text-white">
                  {row.resource}
                </td>
                {planKeys.map((planKey, colIndex) => (
                  <td
                    key={colIndex}
                    className={`whitespace-nowrap px-4 py-4 text-sm 
                                ${planKey.includes('essencial') ? 'text-[#FF0000] font-semibold' : 'text-gray-300'}`}
                  >
                    {row[planKey] || '-'}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ComparisonTableOG;
