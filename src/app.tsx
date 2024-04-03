import { AttendeeList } from "./components/attendee-list";
import { Header } from "./components/header";

export function App() {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto py-5 px-4 space-y-4 ">
        <Header />
        <AttendeeList />
      </div>
    </div>
  )
}