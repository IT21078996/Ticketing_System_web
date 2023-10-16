import { Helmet } from 'react-helmet-async';

import { TimetableView } from 'src/sections/timetable/view';


// ----------------------------------------------------------------------

export default function TimetablePage() {
  return (
    <>
      <Helmet>
        <title> Timetable</title>
      </Helmet>

      <TimetableView />
    </>
  );
}
