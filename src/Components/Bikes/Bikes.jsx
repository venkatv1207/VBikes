import { useState } from "react";
import BikesData from "./BikesData";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Pagination from "../Pagination";

function Bikes() {
  const nav = useNavigate();
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState(null);
  const [inp, setInp] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsperPage] = useState(6);

  const searchTerm = data.filter((item) =>
    item.model_name.toLowerCase().includes(inp.toLowerCase())
  );

  const indexofLastItem = currentPage * itemsperPage;
  const indexofFirstItem = indexofLastItem - itemsperPage;
  const currentItems = searchTerm.slice(indexofFirstItem, indexofLastItem);

  useEffect(() => {
    const fetchingdata = async () => {
      try {
        setLoad(true);
        setErr(null);
        const res = await fetch("http://localhost:3000/Bikes");
        const d = await res.json();
        const Bikesdata = d[1] ? d[1].fastBikes : [];
        setData(Bikesdata);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoad(false);
      }
    };
    fetchingdata();
  }, []);
  return (
    <div>
      <form action="">
        <input
          className="input"
          type="text"
          onChange={(e) => setInp(e.target.value)}
          value={inp}
          placeholder="search your product"
        />
      </form>
      {load && <div className="item1"></div>}
      {err && <h1>error...{err}</h1>}

      <BikesData data={currentItems} />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalItems={searchTerm.length}
        itemsPerPage={itemsperPage}
      />
      <button id="back" onClick={() => nav(-1)}>
        Back
      </button>
    </div>
  );
}

export default Bikes;
