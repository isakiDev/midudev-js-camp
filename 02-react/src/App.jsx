import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import JobCard from "./components/JobCard.jsx";
import Pagination from "./components/Pagination.jsx";

import data from "./data.json";

const perPage = 5;
const totalPage = Math.floor(data.length / perPage);

function SearchFormSection() {
  return (
    <section className="jobs-search">
      <h1>Encuentra tu proximo trabajo</h1>
      <p>Explora miles de oportunidades en el sector tecnologico</p>

      <form id="jobs-search-form" role="search">
        <div className="search-bar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-search"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
          </svg>

          <input
            id="jobs-search-input"
            required
            type="text"
            placeholder="Busca trabajos, empresas o habilidades"
          />
        </div>

        <div className="search-filters">
          <select name="technology" id="filter-technology">
            <option value="">Tecnología</option>
            <optgroup label="Tecnologías populares">
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="react">React</option>
              <option value="nodejs">Node.js</option>
            </optgroup>
            <option value="java">Java</option>
            <hr />
            <option value="csharp">C#</option>
            <option value="c">C</option>
            <option value="c++">C++</option>
            <hr />
            <option value="ruby">Ruby</option>
            <option value="php">PHP</option>
          </select>

          <select name="location" id="filter-location">
            <option value="">Ubicación</option>
            <option value="remoto">Remoto</option>
            <option value="cdmx">Ciudad de México</option>
            <option value="guadalajara">Guadalajara</option>
            <option value="monterrey">Monterrey</option>
            <option value="barcelona">Barcelona</option>
          </select>

          <select name="experience-level" id="filter-experience-level">
            <option value="">Nivel de experiencia</option>
            <option value="junior">Junior</option>
            <option value="mid">Mid-level</option>
            <option value="senior">Senior</option>
            <option value="lead">Lead</option>
          </select>
        </div>
      </form>
    </section>
  );
}

function JobListings() {
  return (
    <>
      <h2>Resultados de busqueda</h2>

      <div className="jobs-listings">
        {data?.map((job) => (
          <JobCard
            key={job.id}
            data={job.data}
            descripcion={job.descripcion}
            empresa={job.empresa}
            titulo={job.titulo}
            ubicacion={job.ubicacion}
          />
        ))}
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <Header />

      <main>
        <SearchFormSection />

        <section>
          <JobListings />
          <Pagination totalPage={totalPage} />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
