import { LucideChevronLeft, LucideChevronRight, LucideChevronsLeft, LucideChevronsRight, LucideMoreHorizontal, LucideSearch } from "lucide-react";
import { ButtonIcon } from "./button-icon";
import { Table } from "./table/table";
import { TableHeader } from "./table/table-header";
import { TableCell } from "./table/table-cell";
import { attendees } from "../data/attendee";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/pt-br"
import { useState } from "react";
dayjs.extend(relativeTime)
dayjs.locale('pt-br')

export function AttendeeList() {
  const [page, setPage] = useState(1)

  const totalPages = Math.ceil(attendees.length / 10);

  function onFirstPage() {
    setPage(1);
  }

  function onPreviousPage() {
    setPage(page - 1);
  }
  
  function onNextPage() {
    setPage(page + 1);
  }

  function onLastPage() {
    setPage(totalPages);
  }


  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="flex items-center gap-3 px-3 bg-transparent w-72 py-1.5 border border-white/10 rounded-lg text-sm">
          <LucideSearch className="size-4 text-emerald-300" />
          <input className="bg-transparent outline-none p-0 border-0 focus:ring-transparent" type="text" placeholder="Buscar participantes" />
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
            {attendees.slice((page - 1) * 10, page * 10).map((attendee) => (
              <tr key={attendee.id} className="border border-white/10 hover:bg-slate-700/10">
                <TableCell>
                  <input type="checkbox" name="check" id="check" className="size-4 bg-black rounded border border-white/10" />
                </TableCell>
                <TableCell>{attendee.id}</TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-white">{attendee.name}</span>
                    <span>{attendee.email}</span>
                  </div>
                </TableCell>
                <TableCell>{dayjs().to(attendee.createdAt)}</TableCell>
                <TableCell>{dayjs().to(attendee.checkInAt)}</TableCell>
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
                Mostrando 10 de {attendees.length}
              </TableCell>
              <TableCell className="text-right" colSpan={3}>
                <div className="inline-flex items-center gap-8">
                  <span>Pagina {page} de {Math.ceil(attendees.length / 10)}</span>

                  <div className="flex gap-1.5">
                    <ButtonIcon onClick={onFirstPage} disabled={page === 1}>
                      <LucideChevronsLeft className="size-4" />
                    </ButtonIcon>
                    <ButtonIcon onClick={onPreviousPage} disabled={page === 1}>
                      <LucideChevronLeft className="size-4" />
                    </ButtonIcon>
                    <ButtonIcon onClick={onNextPage} disabled={page === totalPages}>
                      <LucideChevronRight className="size-4" />
                    </ButtonIcon>
                    <ButtonIcon onClick={onLastPage} disabled={page === totalPages}>
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