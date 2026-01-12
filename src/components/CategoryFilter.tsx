"use client";

interface Props {
  categories: string[];
  active: string;
  onChange: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  active,
  onChange,
}: Props) {
  return (
    <div className="flex gap-3 overflow-x-auto pb-4 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`px-4 py-2 rounded-full whitespace-nowrap text-sm border transition ${
            active === category
              ? "bg-[var(--primary)] text-white border-[var(--primary)]"
              : "bg-[var(--surface)] border-[var(--border)] text-[var(--muted)] hover:text-white"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
