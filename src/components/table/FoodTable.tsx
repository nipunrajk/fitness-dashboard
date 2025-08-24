import { foods } from '../../data/mock';

export default function FoodTable() {
  return (
    <section className="rounded-xl bg-white p-2 shadow-sm ring-1 ring-slate-100">
      <table className="w-full table-fixed text-left text-sm">
        <thead>
          <tr className="text-slate-500">
            <th className="p-3 font-medium">Food</th>
            <th className="p-3 font-medium">Meal</th>
            <th className="p-3 font-medium">Priorities</th>
            <th className="p-3 font-medium">Carbs</th>
          </tr>
        </thead>
        <tbody>
          {foods.map((row, i) => (
            <tr key={i} className="border-t">
              <td className="p-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-amber-700">{row.food}</span>
              </td>
              <td className="p-3 text-slate-700">{row.meal}</td>
              <td className="p-3 text-slate-700">{row.priority}</td>
              <td className="p-3 text-slate-700">{row.carbs}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
