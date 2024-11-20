const PostInves = ({ autor, ano, titulo, descripcion, link }) => {
  return (
    <div
      className="rel blog-post-wide featured-post"
      style={{
        width: "90%",
        maxWidth: "950px",
        boxShadow: "0px 7px 35px -6px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
      }}
    >
      <div
        className="row d-flex align-items-center"
        style={{ backgroundColor: "fff", padding: "20px 30px" }}
      >
        <div>
          <p style={{ color: "#666" }}>
            {autor} | {ano}
          </p>
        </div>
        <div
          className="post-prensa-contenido"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center"
          }}
        >
          <div
            className="post-prensa-texto"
            style={{
              width: "100%"
            }}
          >
            <h4
              style={{
                color: "#666",
                marginBottom: "0.5em",
                fontStyle: "italic",
              }}
            >
              {titulo}
            </h4>
            <p
              style={{
                color: "gray",
                marginBottom: "1em",
              }}
            >
              {descripcion}
            </p>
            <a href={link} target="_blank" className="button-inves">
              Visitar artículo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostInves;
