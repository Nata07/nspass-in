import { LucideSearch } from "lucide-react";

export function AttendeeList() {
  return (
    <div className="flex items-center gap-3">
      <h1 className="text-2xl font-bold">Participantes</h1>
      <div className="flex items-center gap-3 px-3 bg-transparent w-72 py-1.5 border border-white/10 rounded-lg text-sm">
        <LucideSearch className="size-4 text-emerald-300" />
        <input className="bg-transparent outline-none" type="text" placeholder="Buscar participantes" />
      </div>
    </div>
  )
}