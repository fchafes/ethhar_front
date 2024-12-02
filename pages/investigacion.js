import LayoutInves from "../src/layout/LayoutInves";
import PostInves from "@/src/components/investigacion/PostInves";
import InvesIntro from "@/src/components/investigacion/InvesIntro";
import CongresoList from "@/src/components/investigacion/CongresoList";
import LogoMarqueeInves from "@/src/components/investigacion/LogoMarqueeInves";
import { createClient } from "../src/prismicio";

// PRISMIC CMS
export async function getStaticProps() {
  const client = createClient();

  // articulos de "articulo_inves"
  const articulos = await client.getAllByType("articulo_inves");

  // articulos de "congresos"
  const congresos = await client.getAllByType("congreso");

  // ordeno los congresos por fecha descendente
  const congresosOrdenados = congresos.sort(
    (a, b) => new Date(b.data.fecha) - new Date(a.data.fecha)
  );

  return {
    props: {
      articulos,
      congresos: congresosOrdenados,
    },
    revalidate: 10,
  };
}
// END PRISMIC CMS

const Investigacion = ({ articulos, congresos }) => {
  return (
    <LayoutInves navLight getStartText navHoverColor="nav-orange-red-hover">
      <section
        id="hero-1"
        className="bg-scroll hero-section division pb-4 hero-1-custom-resp"
        style={{
          paddingTop: "140px",
          overflow: "visible",
          backgroundColor: "#FBFBFD",
        }}
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
          {/* -----------INTRO------------ */}
          <InvesIntro />
          <hr
            className="divider-inves"
            style={{
              marginBottom: "60px",
              width: "100%",
            }}
          />

          {/* -----------LISTA DE CONGRESOS---------- */}
          <CongresoList congresos={congresos} />
        </div>
        <LogoMarqueeInves />
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <hr
            className="divider-inves"
            style={{
              marginBottom: "60px",
              marginTop: "25px",
              width: "100%",
            }}
          />

          {/* -----------ARTICULOS-----------   */}
          {/* TITLE */}
          <div className="congreso-list-title-box">
            <h2
              className="h2-md titulo-congreso-list"
              style={{
                fontSize: "2rem",
                fontWeight: "700",
                textAlign: "center",
                marginBottom: "1em",
              }}
            >
              Algunos de los estudios que forman parte de nuestra investigación:
            </h2>
          </div>

          {/* mapeo de artículos_inves */}
          {articulos.map((articulo) => {
            const { autor, ano, titulo, descripcion, link_al_articulo } =
              articulo.data;

            return (
              <PostInves
                key={articulo.id}
                autor={autor}
                ano={ano}
                titulo={titulo}
                descripcion={descripcion}
                link={link_al_articulo?.url}
              />
            );
          })}
        </div>
      </section>
      <hr className="divider" style={{ marginBottom: "20px" }} />
    </LayoutInves>
  );
};

export default Investigacion;
