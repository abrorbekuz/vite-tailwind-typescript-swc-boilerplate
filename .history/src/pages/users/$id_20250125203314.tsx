import { useParams } from "react-router-dom";

const DynamicUser = () => {
  const { id } = useParams();

  return <div>Dynamic Page, Param: {id}</div>;
};

export default DynamicUser;