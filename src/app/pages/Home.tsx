import MainLayout from "../components/MainLayout";

export default function page() {
  return (
    <MainLayout>
      <section className=" max-w-7xl mx-auto pt-8 px-8 xl:px-0">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6">
          <li>card</li>
          <li>card</li>
          <li>card</li>
          <li>card</li>
          <li>card</li>
          <li>card</li>
          <li>card</li>
          <li>card</li>
        </ul>
      </section>
    </MainLayout>
  )
}