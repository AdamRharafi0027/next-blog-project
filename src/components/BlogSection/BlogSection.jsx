import Link from "next/link";
import BlogPage from "../../app/blog/page";


const BlogSection = () => {
  return (
    <>
      <BlogPage cardNum={6} hideSearch={true} />

      <div className="flex justify-center mt-14">
        <Link href={"/blog"}>
          <button className="px-6 py-3 rounded-full border border-black text-sm font-medium hover:bg-black hover:text-white transition">
            View All Articles
          </button>
        </Link>
      </div>
    </>
  );
};

export default BlogSection;
