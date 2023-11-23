'use client';

import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  LineChart,
  CartesianGrid,
  Line,
  Tooltip,
} from 'recharts';
import React from 'react';
import { randomColor } from '../utils/generators';
import { TKSType } from '../types';

const Chart = ({ tks }: {tks: TKSType[]}) => {
  const data = [0, 5, 15, 25, 35, 45, 55].map((value: number, i: number) => {
      const charts = tks.reduce((acc: any, [key, chart]: TKSType[]) => ({...acc, [key]: chart.values[i]}), {});
      return {
        value,
        ...charts
      }
  })

  const lines = tks.map(([metric,]: TKSType[]) => metric)

  return (
    <ResponsiveContainer className='mt-10 border-2 border-indigo-600 ' width="100%" height={300}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="value" />
          <YAxis />
          <Tooltip />
          {lines.map((line: string, i: number) => <Line key={i} type="monotone" dataKey={line} stroke={randomColor()} activeDot={{ r: 8 }} />)}
        </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;