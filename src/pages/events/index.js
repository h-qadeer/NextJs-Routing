import { useRouter } from "next/router";
import { Fragment } from "react";
import EventList from "../../../components/events/event-list";
import EventsSearch from "../../../components/events/event-seach";
import { getAllEvents } from "../../../dummy-data";

const AllEventsPage = () => {
  const router = useRouter();
  const events = getAllEvents();
  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };
  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
};

export default AllEventsPage;
