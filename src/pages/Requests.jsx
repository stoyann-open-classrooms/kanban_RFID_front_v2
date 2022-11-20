import { useEffect, useContext } from "react";
import RequestsList from "../components/requests/RequestsList";
import Spinner from "../components/shared/spinner/Spinner";

import RequestContext from "../context/request/RequestContext";
function Requests() {
  const { requests, loading, fetchRequests } = useContext(RequestContext);

  useEffect(() => {
    fetchRequests();
  }, []);

  console.log(requests);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
      <div className="title_page">
        <h1>{requests.length} demande(s) à traiter</h1>
      </div>
      <RequestsList requests={requests}/>
      </>
    );
  }
}

export default Requests;
