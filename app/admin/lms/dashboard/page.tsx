import ProgramStatus from "../components/program/ProgramStatus";
import PaginationButton from "../components/PaginationButtons";
import EventBlockDisplayer from "../components/event/EventBlockDisplayer";
// Right section
import UserLevelDisplayer from "../components/user/UserLevelDisplayer"
import UserDailyQuestDisplayer from "../components/user/UserDailyQuestDisplayer"
import UserStreakDisplayer from "../components/user/UserStreakDisplayer"

const userId = 0
export default function Dashboard() {
  return (
    // Split Screen Into Two Sections
    <div className="flex h-fit	p-10 bg-indigo-50 pb-40 gap-25">
    
      {/* Left Section with program info */}
      <section className="flex-[7] flex flex-col ">
        {/*Welcome */}
        <h3 className="text-2xl font-bold mb-5 w-full">Welcome back, George!</h3>
        <ProgramStatus courseId={0} />

        {/* Upcoming Events */}
        <div className="mt-10 flex justify-between w-full">
          <h3 className="text-2xl font-bold mb-5">Upcoming Events</h3>
          {/* arrow containers */}
          <div className="flex">
            <PaginationButton/>
          </div>
        </div>

        {/* Events container */}
        <div className="flex gap-5 ">
          <EventBlockDisplayer eventId={0}/>
          <EventBlockDisplayer eventId={1}/>
        </div>
      </section>

      {/* Right Section with Quest Info */}
      <section className="flex-[3] flex flex-col items-center w-full gap-10">
        <UserLevelDisplayer userId={userId} />
        <UserDailyQuestDisplayer userId={userId} />
        <UserStreakDisplayer userId={userId} />

      </section>
    
    </div>


  );
}