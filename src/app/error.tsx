"use client";

export default function ErrorPage({ reset }: any) {
  return (
    <div className="h-screen flex justify-center items-center font-josefin">
      <div className="">
        <p className="text-5xl text-center font-semibold text-primary">400</p>

        <h1 className="mt-2 text-xl text-center font-semibold tracking-tight md:text-3xl">
          Something went wrong!
        </h1>
        <p className="mt-3 text-base leading-7 text-forth">
          Sorry, we couldn’t find the page you’re looking for.
        </p>

        <div className="flex justify-center pt-4">
          <button
            onClick={() => reset()}
            className="bg-primary  text-white p-1 px-4 w-fit rounded  flex flex-col justify-center items-center size-full space-y-3 "
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}
