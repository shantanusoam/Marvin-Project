import Posts from "./Posts";

const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
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
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
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
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
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

export default function ModelSection() {
  return (
    <div className="">
      <div className="mx-auto  px-6 lg:px-8">
        <div className="lg:grid flex w-full mb-5 lg:grid-cols-9">
          <div className="2xl:col-span-5 xl:col-span-6 lg:col-span-7 flex flex-col lg:justify-start justify-center lg:items-start items-center col-span-8">
            <div className="  sm:flex ">
              <div className="text-thin text-2xl mb-6">Revolutionize Your</div>
            </div>
            <div>
              <div className="leading-relaxed  lg:mt-24 xl:text-5xl lg:text-4xl text-3xl lg:inline  text-center lg:text-start font-mono font-extrabold tracking-tight text-gray-900   relative rounded-full py-1  w-full">
                Creative Projects with the Ultimate AI-Powered Patterns
                <span className="lg:inline flex flex-col items-center">
                  <div className="rounded-full  lg:my-0 my-6 lg:inline  xl:px-10 lg:px-6 cursor-pointer bg-black text-white mx-10 xl:py-4 lg:py-2 text-lg lg:text-xl xl:text-2xl">
                    <span className="whitespace-nowrap px-8">Read More</span>
                  </div>
                  <span className="text-lg font-normal inline-block text-gray-400">
                    <p>The Next Generation</p>
                    <p>
                      <span className="text-black inline-block pr-2">
                        Production
                      </span>
                      For Designers
                    </p>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="-mx-8 ">
          <Posts />
        </div>
      </div>
    </div>
  );
}
