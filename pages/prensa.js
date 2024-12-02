import { createClient } from "../src/prismicio";
import LayoutPrensa from "../src/layout/LayoutPrensa";
import PostPrensa from "@/src/components/prensa/PostPrensa";

export async function getStaticProps() {
  const client = createClient();

  // Obtén los artículos de prensa desde Prismic
  const articulosPrensa = await client.getAllByType("articulo_prensa");

  // Ordena los artículos por el campo `orden` definido por el cliente
  const articulosOrdenados = articulosPrensa.sort((a, b) => {
    const ordenA = parseInt(a.data.orden || 1000, 10); // Default a 1000 si no tiene valor
    const ordenB = parseInt(b.data.orden || 1000, 10);
    return ordenA - ordenB; // Orden ascendente
  });

  return {
    props: {
      articulos: articulosOrdenados,
    },
    revalidate: 10,
  };
}

const Prensa = ({ articulos }) => {
  return (
    <LayoutPrensa navLight getStartText navHoverColor="nav-orange-red-hover">
      <section
        id="hero-1"
        className="bg-scroll hero-section division pb-4 hero-1-custom-resp"
        style={{ paddingTop: "140px", overflow: "visible" }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* TITLE */}
          <div>
            <h2
              className="h2-md titulo-prensa"
              style={{
                fontSize: "2rem",
                fontWeight: "700",
                textAlign: "center",
                marginBottom: "1em",
              }}
            >
              Nuestros artículos de prensa
            </h2>
          </div>

          {/* Map de los artículos ordenados */}
          {articulos.map((articulo) => {
            const { medio, fecha, titulo, descripcion, link, imagen, video } =
              articulo.data;

            return (
              <PostPrensa
                key={articulo.id}
                medio={medio}
                fecha={fecha}
                titulo={titulo}
                descripcion={descripcion}
                link={link?.url}
                imagen={imagen?.url}
                video={video}
              />
            );
          })}
        </div>
      </section>
      <hr className="divider" style={{ marginBottom: "20px" }} />
    </LayoutPrensa>
  );
};

export default Prensa;
