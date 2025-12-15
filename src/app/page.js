import BlogSection from "@/components/BlogSection/BlogSection"
import Hero from "@/components/Hero/Hero"
import CategoriesPage from "./categories/page"

const page = () => {
  return (
    <>
      <Hero />
      <BlogSection />
      <CategoriesPage />
    </>
  )
}

export default page