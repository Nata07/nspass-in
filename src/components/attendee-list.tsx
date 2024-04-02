import { LucideSearch } from "lucide-react";

export function AttendeeList() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="flex items-center gap-3 px-3 bg-transparent w-72 py-1.5 border border-white/10 rounded-lg text-sm">
          <LucideSearch className="size-4 text-emerald-300" />
          <input className="bg-transparent outline-none" type="text" placeholder="Buscar participantes" />
        </div>
      </div>
      <div className="border border-white/10 rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="border border-white/10">
              <th className="py-3 px-4 text-sm font-semibold text-left" />
              <th className="py-3 px-4 text-sm font-semibold text-left">Código</th>
              <th className="py-3 px-4 text-sm font-semibold text-left">Participante</th>
              <th className="py-3 px-4 text-sm font-semibold text-left">Data de inscrição</th>
              <th className="py-3 px-4 text-sm font-semibold text-left">Data do check-in</th>
              <th className="py-3 px-4 text-sm font-semibold text-left"></th>
            </tr>
          </thead>
          <tbody>
            {Array.from({length: 10}).map(() => (
              <tr key={Math.random().toString()} className="border border-white/10">
                <td className="py-3 px-4 text-sm text-zinc-300">
                  <input type="checkbox" name="check" id="check" />
                </td>
                <td className="py-3 px-4 text-sm text-zinc-300">12356</td>
                <td className="py-3 px-4 text-sm text-zinc-300">
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-white">Natnael arno da silva</span>
                    <span>nata.mw@hotmail.com</span>
                  </div>
                </td>
                <td className="py-3 px-4 text-sm text-zinc-300">7 dias</td>
                <td className="py-3 px-4 text-sm text-zinc-300">3 dias atras</td>
                <td className="py-3 px-4 text-sm text-zinc-300"></td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className="py-3 px-4 text-sm text-zinc-300" colSpan={3}>
                Mostrando 10 de 100
              </td>
              <td className="py-3 px-4 text-sm text-zinc-300 text-right" colSpan={3}>
                Pagina 1 de 10
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}