"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const activeFilter = searchParams.get("capacity") ?? "all";

  function handleFilterChange(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="border border-primary-800 flex">
      <FilterButton
        filter="all"
        handleFilterChange={handleFilterChange}
        activeFilter={activeFilter}
      >
        All Cabins
      </FilterButton>

      <FilterButton
        filter="small"
        handleFilterChange={handleFilterChange}
        activeFilter={activeFilter}
      >
        1&mdash;3 guests
      </FilterButton>

      <FilterButton
        filter="medium"
        handleFilterChange={handleFilterChange}
        activeFilter={activeFilter}
      >
        4&mdash;7 guests
      </FilterButton>

      <FilterButton
        filter="large"
        handleFilterChange={handleFilterChange}
        activeFilter={activeFilter}
      >
        8&mdash;12 guests
      </FilterButton>
    </div>
  );
}

function FilterButton({ filter, handleFilterChange, activeFilter, children }) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 active:bg-primary-700 ${
        filter === activeFilter ? "bg-primary-700 text-primary-50" : ""
      }`}
      onClick={() => handleFilterChange(filter)}
    >
      {children}
    </button>
  );
}
