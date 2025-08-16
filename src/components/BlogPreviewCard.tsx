const BlogPreviewCard = () => {
  return (
    <div className="p-6 bg-white w-[327px] h-[501px] rounded-card border border-Grey-950 flex flex-col gap-6 shadow-card">
      <img
        src="illustration-article.svg"
        alt="Hero image"
        className="rounded-hero"
      />
      <div className="flex flex-col gap-4">
        <p className="p-1 bg-Yellow w-[73px] rounded-category flex items-center justify-center text-Grey-950 font-extrabold text-xs leading-[18px]">Learning</p>
        <p className="font-medium text-xs leading-[18px]">Published 21 Dec 2023</p>
        <h1 className="font-extrabold text-xl leading-[30px] hover:cursor-pointer hover:text-Yellow">HTML & CSS foundations</h1>{" "}
        <p className="font-medium text-sm text-Grey-500 leading-[1.5]">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
      </div>
      <article className="flex justify-start items-center gap-3">
        <img src="image-avatar.webp" alt="avatar image" className="w-8 h-8 rounded-4xl"/>
        <p className="font-extrabold leading-[21px] text-sm">Greg Hooper</p>
      </article>
    </div>
  );
};

export default BlogPreviewCard;
