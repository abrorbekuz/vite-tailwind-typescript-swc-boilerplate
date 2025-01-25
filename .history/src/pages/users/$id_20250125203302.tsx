import { useParams } from "react-router-dom";

const DynamicDashboard = () => {
  const { id } = useParams();

  return <div>Dynamic Page, Param: {id}</div>;
};

export default DynamicDashboard;