import MainLayout from "../components/MainLayout";
import ProductsList from "../components/ProductsList";

export default  function page() {
  return (
    <MainLayout>
      <section className=" max-w-7xl mx-auto pt-8 px-8 xl:px-0">
        <ProductsList/>
      </section>
    </MainLayout>
  )
}

