import { Helmet } from 'react-helmet-async';

import AdminAppView from 'src/sections/overview/view/admin-app-view';

// ----------------------------------------------------------------------

export default function AdminAppPage() {
  return (
    <>
      <Helmet>
        <title> Admin Dashboard </title>
      </Helmet>

      <AdminAppView />
    </>
  );
}
