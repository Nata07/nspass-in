import { LucideChevronLeft, LucideChevronRight, LucideChevronsLeft, LucideChevronsRight, LucideMoreHorizontal, LucideSearch } from "lucide-react";
import { ButtonIcon } from "./button-icon";
import { Table } from "./table/table";
import { TableHeader } from "./table/table-header";
import { TableCell } from "./table/table-cell";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/pt-br"
import { ChangeEvent, useEffect, useState } from "react";
dayjs.extend(relativeTime)
dayjs.locale('pt-br')

interface Attendee {
  id: string
  name: string
  email: string
  createdAt: string
  checkedInAt: string | null
}

export function AttendeeList() {
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(() => {
    const url = new URL(window.location.toString())
    if(url.searchParams.has('page')) {
      return Number(url.searchParams.get('page'))
    }

    return 1
  })
  const [data, setData] = useState<Attendee[]>([]);
  // const page = 1;
  const [total, setTotal] = useState(0)
  const totalPages = Math.ceil(total / 10);

  useEffect(() => {
    const url = new URL('http://localhost:3333/events/9e9bd979-9d10-4915-b339-3786b1634f33/attendees')
    url.searchParams.set('pageIndex', String(page - 1))
    if(search.length > 0) {
      url.searchParams.set('query', search)
    }
    fetch(url)
    .then(response => response.json())
    .then(data => {
      setData(data.attendees)
      setTotal(data.total)
    })
  }, [page, search])

  function setCurrentPage(page: number) {
    const url = new URL(window.location.toString())
    url.searchParams.set('pageIndex', String(page))
    window.history.pushState({}, "", url)
    setPage(page)
  }

  function onFirstPage() {
    setCurrentPage(1);
  }

  function onPreviousPage() {
    setCurrentPage(page - 1);
  }
  
  function onNextPage() {
    setCurrentPage(page + 1);
  }

  function onLastPage() {
    setCurrentPage(totalPages);
  }

  function handleFilterAttendees(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value)
    setCurrentPage(1);
  }


  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="flex items-center gap-3 px-3 bg-transparent w-72 py-1.5 border border-white/10 rounded-lg text-sm">
          <LucideSearch className="size-4 text-emerald-300" />
          <input onChange={handleFilterAttendees} className="bg-transparent outline-none p-0 border-0 focus:ring-transparent" type="text" placeholder="Buscar participantes" />
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
            {data.map((attendee) => (
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
                <TableCell>{!attendee.checkedInAt ? <span className="text-zinc-500">Não fez check-in</span> : dayjs().to(attendee.checkedInAt)}</TableCell>
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
                Mostrando {data.length} de {total} itens
              </TableCell>
              <TableCell className="text-right" colSpan={3}>
                <div className="inline-flex items-center gap-8">
                  <span>Pagina {page} de {totalPages}</span>

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