import React from 'react';
import { ChevronRight } from 'lucide-react';

type Props = {
  title: string;
  onViewAll?: () => void;
  rightSlot?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

export default function ListSection({ title, onViewAll, rightSlot, children, className }: Props) {
  return (
    <section className={['space-y-7 mb-[50px]', className].filter(Boolean).join(' ')}>
      <div className='flex items-center justify-between mb-6'>
        <h3 className='text-xl font-bold text-secondary'>{title}</h3>
        {rightSlot ?? (
          <button
            type='button'
            onClick={onViewAll}
            className='inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline'
          >
            <span>View All</span>
            <ChevronRight className='h-4 w-4' aria-hidden='true' />
          </button>
        )}
      </div>
      {children}
    </section>
  );
}
