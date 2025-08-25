import { foods } from '../../data/mock';

export default function FoodTable() {
  return (
    <section>
      <div
        className='grid grid-cols-5 gap-4 px-2 text-sm
 font-bold text-secondary mb-4'
      >
        <div>Food</div>
        <div>Meal</div>
        <div>Calories</div>
        <div>Priorities</div>
        <div>Carbs</div>
      </div>

      {/* Rows */}
      <div className='mt-3 space-y-3'>
        {foods.map((row, i) => (
          <div
            key={i}
            className='grid grid-cols-5 items-center gap-4 rounded-xl bg-white px-4 py-[10px] shadow-sm ring-1 ring-slate-100 text-sm text-secondary'
          >

            <div className='flex items-center gap-4'>
              <span className='inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary-hover)] border-[0.5px] border-[var(--color-primary-border)]'>
                <img
                  src={
                    row.food.includes('Burrito')
                      ? '/food-table/buritto.png'
                      : '/food-table/burger.png'
                  }
                  alt={row.food}
                  className='h-6 w-6 object-contain'
                />
              </span>
              <span className='font-bold'>{row.food}</span>
            </div>

            <div className='font-medium'>{row.meal}</div>
            <div className='font-medium'>Receiving</div>
            <div className='font-medium'>{row.priority}</div>
            <div className='font-medium'>{row.carbs}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
