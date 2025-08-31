import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start mb-16">
        {/* <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        /> */}
        <h2 className="text-3xl font-bold mb-2">
          Hi There! My Name is Isaac Bao.
        </h2>
        {/* <div className=""> */}
        <ol className="font-mono list-inside list-decimal text-sm/6 text-left">
          <ul className="mb-2 tracking-[-.01em]">
            This is my first Next.js website. Hope to learn more about it!
            {/* <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
              src/app/page.js
            </code> */}
            {/* . */}
          </ul>
          <ul className="mb-2 tracking-[-.01em]">
            - check my bio:{" "}
            <a
              href="https://bonjour.bio/ganzhe"
              className="font-bold text-[#008CFF]"
            >
              Bonjour!
            </a>
          </ul>
          <ul className="mb-2 tracking-[-.01em]">
            - blog:{" "}
            <a href="https://blog.isaacbao.cn/" className="text-[#008CFF]">
              CN-site
            </a>{" "}
            |{" "}
            <a href="https://ganzhe.site" className="text-[#008CFF]">
              EN-site
            </a>
          </ul>
          <ul className="mb-2 tracking-[-.01em]">
            -{" "}
            <a href="https://github.com/ganzhe2028" className="text-[#008CFF]">
              GitHub
            </a>
          </ul>
          <ul className="mb-2 tracking-[-.01em]">
            - Feel free to contact me:
            <ul>
              &nbsp; -{" "}
              <a
                href="mailto:isaacbao2025@outlook.com"
                className="text-[#008CFF]"
              >
                isaacbao2025@outlook.com
              </a>{" "}
            </ul>
            <ul>
              &nbsp; -{" "}
              <a
                href="mailto:isaacbao2028@gmail.com"
                className="text-[#008CFF]"
              >
                isaacbao2028@gmail.com
              </a>
            </ul>
          </ul>
          <ul className="mb-4 tracking-[-.01em] font-bold">Have a nice day!</ul>
        </ol>
        {/* </div> */}

        {/* <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div> */}
      </main>
      {/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}
    </div>
  );
}
