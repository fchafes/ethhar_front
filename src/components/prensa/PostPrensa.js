const PostPrensa = ({
  medio,
  fecha,
  titulo,
  descripcion,
  link,
  imagen,
  video,
}) => {
  // funcion para formatear la fecha
  const formatearFecha = (fecha) => {
    const date = new Date(fecha);
    const dia = String(date.getDate()).padStart(2, "0");
    const mes = String(date.getMonth() + 1).padStart(2, "0");
    const año = date.getFullYear();

    return `${dia}/${mes}/${año}`;
  };

  // funcion para convertir una URL corta de YouTube en la URL embebida
  const obtenerUrlEmbedYoutube = (url) => {
    // verifica si la URL es de YouTube corta (https://youtu.be/{video_id})
    const regex = /https:\/\/youtu\.be\/([a-zA-Z0-9_-]+)/;
    const match = url.match(regex);
    if (match) {
      const videoId = match[1];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    // si no es una URL corta, devolverla tal cual (se asume que ya está en formato embed)
    return url;
  };

  return (
    <div
      className="rel blog-post-wide featured-post"
      style={{
        width: "90%",
        maxWidth: "950px",
        boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
      }}
    >
      <div
        className="row d-flex align-items-center"
        style={{ backgroundColor: "#fff", padding: "20px" }}
      >
        <div>
          <p style={{ color: "#666" }}>
            {medio} | {formatearFecha(fecha)}
          </p>
        </div>
        <div
          className="post-prensa-contenido"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
          }}
        >
          <div
            className="post-prensa-texto"
            style={{
              width: "50%",
              paddingRight: "20px",
            }}
          >
            <h4
              style={{
                color: "#666",
                marginBottom: "0.5em",
              }}
            >
              {titulo}
            </h4>
            <p
              style={{
                color: "gray",
                marginBottom: "1.2em",
              }}
            >
              {descripcion}
            </p>
            <a href={link} target="_blank" className="button-prensa">
              Visitar artículo
            </a>
          </div>

          {/* contenedor para la imagen o el video */}
          <div
            style={{
              backgroundColor: "white",
              width: "50%",
              position: "relative",
              borderRadius: "20px",
              overflow: "hidden",
              // minHeight: "200px",
              // maxHeight: "300px",
            }}
            className="post-prensa-img"
          >
            {/* verificar si hay video o imagen */}
            {video && video.embed_url ? (
              // si hay un video, lo mostramos con un iframe
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "20px",
                }}
              >
                <iframe
                  src={obtenerUrlEmbedYoutube(video.embed_url)} // uso la función para convertir la URL
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ borderRadius: "20px" }}
                ></iframe>
              </div>
            ) : imagen ? (
              // si hay una imagen, la mostramos normalmente
              <img
                src={imagen}
                alt={titulo}
                style={{
                  width: "100%",
                  // minHeight: "200px",
                  // maxHeight: "300px",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            ) : (
              // si no hay ni imagen ni video, mostramos un mensaje alternativo
              <p>No hay contenido multimedia disponible</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPrensa;
