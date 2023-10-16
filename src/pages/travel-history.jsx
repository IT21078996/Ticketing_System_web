import { Helmet } from 'react-helmet-async';

import HistoryView from 'src/sections/timetable/view/travel-history';

// ----------------------------------------------------------------------

export default function HistoryPage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <HistoryView />
    </>
  );
}
