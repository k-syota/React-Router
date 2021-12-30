import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  console.log(query);
  return (
    <>
      <div>
        <h1>URLparameterです</h1>
        <p>パラメーター：{id}</p>
        <p>クエリパラメーター：{query.get("name")}</p>
      </div>
    </>
  );
};
