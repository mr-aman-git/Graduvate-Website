interface Props {
  score: number;
  category: string;
}

export default function CRSScoreCard({
  score,
  category,
}: Props) {
  return (
    <div className="overflow-hidden rounded-3xl bg-linear-to-br from-slate-950 to-blue-950 p-7 text-white shadow-xl">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
            CRS Score
          </p>

          <p className="mt-3 text-6xl font-black">
            {score}
          </p>
        </div>

        <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-bold">
          {category}
        </span>
      </div>

      <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-linear-to-r from-red-500 to-blue-400"
          style={{
            width: `${Math.min(
              (score / 600) * 100,
              100
            )}%`,
          }}
        />
      </div>

      <p className="mt-3 text-xs text-blue-100/70">
        Estimated score based on the information entered.
      </p>
    </div>
  );
}