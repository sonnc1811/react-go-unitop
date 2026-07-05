import Layout from "../components/layout/Layout";
import SectionPage from "../components/layout/Sectionpage";
function Aboutpage() {
  return (
    <Layout>
      <SectionPage title="Gioi thieu ve chung toi">
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aperiam
          omnis est itaque sunt nam numquam debitis neque iure explicabo?
        </p>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aperiam
          omnis est itaque sunt nam numquam debitis neque iure explicabo?
        </p>
      </SectionPage>
      {/* <section className="bg-slate-50 px-6 py-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-balance text-center">
          Gioi thieu ve chung toi
        </h1>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aperiam
          omnis est itaque sunt nam numquam debitis neque iure explicabo?
        </p>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aperiam
          omnis est itaque sunt nam numquam debitis neque iure explicabo?
        </p>
      </section> */}
    </Layout>
  );
}
export default Aboutpage;
