export default function SummaryCard({ title, count, color }) {
  return (
    <div className={`p-4 rounded shadow ${color || 'bg-white'}`}>
      <h3 className="font-bold">{title}</h3>
      <p className="text-2xl">{count}</p>
    </div>
  )
}
