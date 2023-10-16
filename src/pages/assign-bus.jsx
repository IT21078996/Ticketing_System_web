import { Helmet } from 'react-helmet-async';

import AssignBusView from 'src/sections/timetable/view/assign-bus';

// ----------------------------------------------------------------------

export default function AssignBusPage() {
  return (
    <>
      <Helmet>
        <title>Assign Bus</title>
      </Helmet>

      <AssignBusView />
    </>
  );
}
