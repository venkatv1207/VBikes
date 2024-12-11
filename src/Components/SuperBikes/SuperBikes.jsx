import { useEffect } from "react";
import { useState } from "react";
import Pagination from "../Pagination";
import SuperBikesData from "./SuperBikesData";
import { useNavigate } from "react-router-dom";

function SuperBikes() {
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
        const Scooterdata = d[2] ? d[2].superBikes : [];
        setData(Scooterdata);
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

      <SuperBikesData data={currentItems} />
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

export default SuperBikes;
