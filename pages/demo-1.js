import CustomersReviews from "../src/components/CustomersReviews";
import Faq from "../src/components/Faq";
import Features from "../src/components/Features";
import Demo1content1 from "../src/components/ethhar_pages/demo1/Demo1content1";
import Demo1content10 from "../src/components/ethhar_pages/demo1/Demo1content10";
import Demo1content2a from "../src/components/ethhar_pages/demo1/Demo1content2a";
import Demo1content3 from "../src/components/ethhar_pages/demo1/Demo1content3";
import Demo1content4 from "../src/components/ethhar_pages/demo1/Demo1content4";
import Demo1content5 from "../src/components/ethhar_pages/demo1/Demo1content5";
import Demo1content9 from "../src/components/ethhar_pages/demo1/Demo1content9";
import Demo1faqs2 from "../src/components/ethhar_pages/demo1/Demo1faqs2";
import Demo1features2 from "../src/components/ethhar_pages/demo1/Demo1features2";
import Demo1Hero1 from "../src/components/ethhar_pages/demo1/Demo1Hero1";
import ShareFiles from "../src/components/ShareFiles";
import Layout from "../src/layout/Layout";
import Demo3brands1 from "@/src/components/ethhar_pages/demo3/Demo3brands1";
import Testimonios from "@/src/components/ethhar_pages/demo1/Testimonios";
import CustomersReviews_2 from "@/src/components/CustomersReviews_2";
import Price from "@/src/components/Price";

const Demo1 = () => {
  return (
    <Layout navLight getStartText navHoverColor="nav-orange-red-hover">
      <Demo1Hero1 />
      <Demo1content9 />
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
    </Layout>
  );
};

export default Demo1;
