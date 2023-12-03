import React from "react";
import img1 from "../assets/Images/img1.jpg";
import img2 from "../assets/Images/img2.jpg";
import img3 from "../assets/Images/img3.jpg";
import img4 from "../assets/Images/img4.jpg";
import img5 from "../assets/Images/img5.png";
import { HiChevronDoubleDown } from "react-icons/hi2";
import { IoMdArrowForward } from "react-icons/io";
const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl: img1,
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Michael Foster",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl: img4,
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Michael Foster",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl: img3,
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Michael Foster",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  // More posts...
];
const Posts = () => {
  return (
    <div className="mx-auto  flex flex-col  sm:grid  md:gap-2 gap-1 sm:mt-20  lg:grid-cols-4">
      <article
        key={posts[0].id}
        className="relative isolate h-[35rem] sm:h-[25rem]  lg:h-[30rem] flex flex-col justify-end overflow-hidden bg-gray-900  pb-8 pt-80 sm:pt-48 lg:pt-80"
      >
        <img
          src={posts[0].imageUrl}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="m-4">
          <div className="absolute top-0 left-0 text-white m-4 py-2 px-6 border border-white  rounded-full">
            01
          </div>

          <div className="flex ">
            <div className="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-0 xl:mt-4">
              <dt className="sr-only">Users</dt>
              <dd
                x-for="user in project.users"
                className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5"
              >
                <img
                  src={posts[0].author.imageUrl}
                  alt="user.name"
                  className="w-12 h-12 rounded-full bg-slate-100 ring-2 ring-white"
                  loading="lazy"
                />
                <img
                  src={posts[0].author.imageUrl}
                  alt="user.name"
                  className="w-12 h-12 rounded-full bg-slate-100 ring-2 ring-white"
                  loading="lazy"
                />
                <img
                  src={posts[0].author.imageUrl}
                  alt="user.name"
                  className="w-12 h-12 rounded-full bg-slate-100 ring-2 ring-white"
                  loading="lazy"
                />
              </dd>
            </div>
          </div>
          <h3 className="text-white py-6 text-2xl">Learn from best mentors</h3>
          <div className=" text-white group  inline-block text-lg font-semibold  ">
            <a
              href={posts[0].href}
              className="text-white flex flex-row gap-2 px-4 py-1 items-center border rounded-full border-white "
            >
              <div> Start Learning</div>
              <IoMdArrowForward className="rotate-45 text-2xl group-hover:text-blue-400 transition-all " />
            </a>
          </div>
        </div>
      </article>
      <article
        key={posts[1].id}
        className="relative isolate h-[35rem] sm:h-[25rem]  lg:h-[30rem] flex flex-col justify-end overflow-hidden bg-gray-900  pb-8 pt-80 sm:pt-48 lg:pt-80"
      >
        <img
          src={posts[1].imageUrl}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="m-4">
          <div className="absolute top-0 left-0 text-white m-4 py-2 px-6 border border-white  rounded-full">
            02
          </div>

          <div className=" text-white group w-full   text-lg font-semibold  ">
            <a
              href={posts[0].href}
              className="text-white flex flex-row justify-between px-0 py-4  items-center border-b border-gray-300/60 "
            >
              <div>Free Edits</div>
              <IoMdArrowForward className="rotate-45 text-2xl group-hover:text-blue-400 transition-all " />
            </a>
          </div>
          <div className=" text-white group w-full   text-lg font-semibold  ">
            <a
              href={posts[0].href}
              className="text-white flex flex-row justify-between px-0 py-4  items-center border-b border-gray-300/60 "
            >
              <div>Interactive</div>
              <IoMdArrowForward className="rotate-45 text-2xl group-hover:text-blue-400 transition-all " />
            </a>
          </div>
          <div className=" text-white group w-full   text-lg font-semibold  ">
            <a
              href={posts[0].href}
              className="text-white flex flex-row justify-between px-0 py-4  items-center border-b border-gray-300/60 "
            >
              <div>Easy Interface</div>
              <IoMdArrowForward className="rotate-45 text-2xl group-hover:text-blue-400 transition-all " />
            </a>
          </div>
          <div className=" text-white group w-full   text-lg font-semibold  ">
            <a
              href={posts[0].href}
              className="text-white flex flex-row justify-between px-0 py-4  items-center border-b border-gray-300/60 "
            >
              <div>Compare To Others</div>
              <IoMdArrowForward className="rotate-45 text-2xl group-hover:text-blue-400 transition-all " />
            </a>
          </div>
        </div>
      </article>
      <article
        key={posts[2].id}
        className="relative isolate h-[35rem] sm:h-[20rem]  lg:h-[30rem] flex flex-col col-span-2 justify-end overflow-hidden bg-gray-900  pb-8 pt-80 sm:pt-48 lg:pt-80"
      >
        <img
          src={posts[2].imageUrl}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />

        <div className="m-4">
          <div className="absolute top-0 left-0 text-white md:m-4 m-8 py-2 px-6 border border-white  rounded-full">
            02
          </div>
          <div className=" text-white group w-full flex flex-col sm:flex-row gap-3 sm:items-center items-start   text-lg font-semibold  ">
            <div className="text-5xl sm:text-8xl break-keep whitespace-nowrap lg:text-7xl xl:text-7xl 2xl:text-8xl font-medium">
              + 20K
            </div>
            <div className="text-xl sm:text-2xl lg::text-2xl break-words sm:w-[50%] w-3/4">
              Glass Patterns Generated this week in the first Release.
            </div>
          </div>
          <div className="px-6">
            <HiChevronDoubleDown className="absolute bottom-10 right-0 text-white md:m-4 m-8 xl:h-16 xl:w-16 w-10 h-10" />
          </div>
        </div>
      </article>
    </div>
  );
};

export default Posts;
