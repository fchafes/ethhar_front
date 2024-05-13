import CustomersReviews from "../src/components/CustomersReviews";
import Demo1content5 from "../src/components/ethhar_pages/demo1/Demo1content5";
import Demo1content9 from "../src/components/ethhar_pages/demo1/Demo1content9";
import Demo1features2 from "../src/components/ethhar_pages/demo1/Demo1features2";
import Demo1Hero1 from "../src/components/ethhar_pages/demo1/Demo1Hero1";
import ShareFiles from "../src/components/ShareFiles";
import Layout from "../src/layout/Layout";
import Demo3brands1 from "@/src/components/ethhar_pages/demo3/Demo3brands1";
import Testimonios from "@/src/components/ethhar_pages/demo1/Testimonios";
import CustomersReviews_2 from "@/src/components/CustomersReviews_2";
import Price from "@/src/components/Price";
import ContactForm from "@/src/components/ContactForm";
import { useState } from "react";

const Index = () => {
  const [reproducirVideo, setReproducirVideo] = useState(false);
  const handleReproducirVideo = () => {
    setReproducirVideo(true);
  };

  return (
    <Layout navLight getStartText navHoverColor="nav-orange-red-hover">
      <Demo1Hero1 onReproducirVideo={handleReproducirVideo} />
      <hr className="divider" />
      <Demo1content9 reproducir={reproducirVideo} />
      <hr className="divider" />
      <ShareFiles />
      <Demo3brands1 />
      <CustomersReviews />
      <Demo1features2 />
      <Demo1content5 />
      <Testimonios />
      <CustomersReviews_2 />
      <hr className="divider" />
      <Price />
      <hr className="divider" />
      <ContactForm />
    </Layout>
  );
};

export default Index;
