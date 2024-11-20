const CongresoList = ({ congresos }) => {
  return (
    <>
      {/* TITLE */}
      <div className="congreso-list-title-box">
        <h2 className="h2-md titulo-congreso-list">
          Congresos en los cuáles participamos:
        </h2>
      </div>
      <div
        className="rel blog-post-wide featured-post"
        style={{
          width: "90%",
          maxWidth: "950px",
          marginBottom: "4em",
          boxShadow: "0px 7px 35px -6px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#fff",
        }}
      >
        <div
          className="row d-flex align-items-center"
          style={{ backgroundColor: "fff", padding: "30px 30px" }}
        >
          <div>
            <ul style={{ color: "#666" }}>
              {congresos.map((congreso) => (
                <li key={congreso.id}>
                  • {congreso.data.nombre}, {congreso.data.ubicacion},{" "}
                  {new Date(congreso.data.fecha).toLocaleDateString("es-ES", {
                    year: "numeric",
                    month: "long",
                  })}
                  .
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CongresoList;
