import { chartData } from '../../data/mock';
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
} from 'recharts';

export default function GoalProgress() {
  return (
    <section className='rounded-xl bg-white px-8 py-6 shadow-sm ring-1 ring-slate-100'>
      <div className='mb-3 flex items-center justify-between'>
        <h3 className='text-base font-bold text-secondary mb-8'>
          Goal Progress
        </h3>
        <button className='rounded-md border px-3 py-1 text-xs font-medium text-muted'>
          Weekly ▾
        </button>
      </div>

      <div className='h-60 w-full'>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart
            data={chartData}
            margin={{ top: 4, right: 8, left: -12, bottom: 0 }}
          >
            <CartesianGrid
              stroke='#e2e8f0'
              strokeDasharray='3 3'
              vertical={false}
            />
            <XAxis
              dataKey='day'
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#64748b' }}
            />
            <YAxis
              domain={[0, 100]}
              ticks={[0, 20, 40, 60, 80, 100]}
              tickFormatter={(v) => `${v}%`}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#94a3b8' }}
            />
            <Tooltip
              cursor={{ fill: 'rgba(148,163,184,0.12)' }}
              formatter={(value: number) => [`${value}%`, '']}
              contentStyle={{ borderRadius: 8, border: '1px solid #e2e8f0' }}
            />
            <Bar
              dataKey='workout'
              name='Workout'
              fill='#06b6d4'
              barSize={14}
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey='calories'
              name='Calories'
              fill='#f59e0b'
              barSize={14}
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey='steps'
              name='Steps'
              fill='#7c3aed'
              barSize={14}
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className='mt-3 flex items-center gap-8 text-xs font-normal text-secondary'>
        <div className='flex items-center gap-2'>
          <span
            className='inline-block h-2 w-2 rounded-full '
            style={{ background: '#06b6d4' }}
          ></span>{' '}
          Workout
        </div>
        <div className='flex items-center gap-1'>
          <span
            className='inline-block h-2 w-2 rounded-full'
            style={{ background: '#f59e0b' }}
          ></span>{' '}
          Calories
        </div>
        <div className='flex items-center gap-1'>
          <span
            className='inline-block h-2 w-2 rounded-full'
            style={{ background: '#7c3aed' }}
          ></span>{' '}
          Steps
        </div>
      </div>
    </section>
  );
}
