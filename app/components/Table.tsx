import React from 'react';
import { TKSType } from '../types';

interface Props {
  tks: TKSType[]; 
}

const Table = ({ tks }: Props) => {
  return (
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Metric
            </th>
            <th scope="col" className="px-6 py-3">
              Color
            </th>
          </tr>
        </thead>
        <tbody>
          {tks?.map(([metric, eu]: TKSType[]) => 
            eu.values.map((value: number, i: number) => {
              return (
                <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {metric}
                  </td>
                  <td className="px-6 py-4">
                    {value}
                  </td>
                </tr>
              )
            })
          )}
        </tbody>
      </table>
  );
};

export default Table;