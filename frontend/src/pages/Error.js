import { useRouteError } from 'react-router-dom';
import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  const error = useRouteError();

  let title = 'An error occurred!';
  let message = 'Something went wrong!';

  if (error.status === 500) {
    title = error.data.message;
    message = error.data?.message || 'A server error occurred.';
  } else if (error.status === 404) {
    title = 'Not Found!';
    message = 'Could not find the resource or page.';
  } else if (error.status === 403) {
    title = 'Forbidden!';
    message = 'You do not have permission to access this resource.';
  }


  return (
      <>
        <MainNavigation/>
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
      </>
  );
}

export default ErrorPage;