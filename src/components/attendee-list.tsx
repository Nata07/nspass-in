import { LucideChevronLeft, LucideChevronRight, LucideChevronsLeft, LucideChevronsRight, LucideMoreHorizontal, LucideSearch } from "lucide-react";
import { ButtonIcon } from "./button-icon";
import { Table } from "./table/table";
import { TableHeader } from "./table/table-header";
import { TableCell } from "./table/table-cell";

export function AttendeeList() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="flex items-center gap-3 px-3 bg-transparent w-72 py-1.5 border border-white/10 rounded-lg text-sm">
          <LucideSearch className="size-4 text-emerald-300" />
          <input className="bg-transparent outline-none p-0 border-0" type="text" placeholder="Buscar participantes" />
        </div>
      </div>
      <div className="border border-white/10 rounded-lg">
        <Table>
          <thead>
            <tr className="border border-white/10">
              <TableHeader style={{ width: 64}}>
                <input type="checkbox" name="check" id="check" className="size-4 bg-black rounded border border-white/10" />
              </TableHeader>
              <TableHeader>Código</TableHeader>
              <TableHeader>Participante</TableHeader>
              <TableHeader>Data de inscrição</TableHeader>
              <TableHeader>Data do check-in</TableHeader>
              <TableHeader style={{ width: 64}}></TableHeader>
            </tr>
          </thead>
          <tbody>
            {Array.from({length: 10}).map(() => (
              <tr key={Math.random().toString()} className="border border-white/10 hover:bg-slate-700/10">
                <TableCell>
                  <input type="checkbox" name="check" id="check" className="size-4 bg-black rounded border border-white/10" />
                </TableCell>
                <TableCell>12356</TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-white">Natnael arno da silva</span>
                    <span>nata.mw@hotmail.com</span>
                  </div>
                </TableCell>
                <TableCell>7 dias</TableCell>
                <TableCell>3 dias atras</TableCell>
                <TableCell>
                  <ButtonIcon transparent>
                    <LucideMoreHorizontal className="size-4" />
                  </ButtonIcon>
                </TableCell>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <TableCell colSpan={3}>
                Mostrando 10 de 100
              </TableCell>
              <TableCell className="text-right" colSpan={3}>
                <div className="inline-flex items-center gap-8">
                  <span>Pagina 1 de 10</span>

                  <div className="flex gap-1.5">
                    <ButtonIcon>
                      <LucideChevronsLeft className="size-4" />
                    </ButtonIcon>
                    <ButtonIcon>
                      <LucideChevronLeft className="size-4" />
                    </ButtonIcon>
                    <ButtonIcon>
                      <LucideChevronRight className="size-4" />
                    </ButtonIcon>
                    <ButtonIcon>
                      <LucideChevronsRight className="size-4" />
                    </ButtonIcon>
                  </div>
                </div>
              </TableCell>
            </tr>
          </tfoot>
        </Table>
      </div>
    </div>
  )
}