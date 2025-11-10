// import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start mb-16">
        <h1 className="text-4xl font-extrabold italic">
          Hi There!
        </h1>
        <ol className="font-mono list-inside list-decimal text-sm/6 text-left">

          <ul className="mb-2 tracking-[-.01em]">
            - Blog:{" "}
            <a href="https://blog.isaacbao.cn/" className="text-link">
              blog.isaacbao.cn
            </a>
          </ul>

          <ul className="mb-2 tracking-[-.01em]">
            - Bio:{" "}
            <a
              href="https://bonjour.bio/ganzhe"
              className="font-bold text-link"
            >
              Bonjour!
            </a>
          </ul>

          <ul className="mb-2 tracking-[-.01em]">
            - CV:{" "}
            <a
              href="https://m0dorknyq14.feishu.cn/docx/G4xZdiskLo2Xk4xnas7cgIgInod?from=from_copylink"
              className="text-link"
            >
              Feishu Docs
            </a>
          </ul>

          <ul className="mb-2 tracking-[-.01em]">
            -{" "}
            <a
              href="https://github.com/ganzhe2028"
              className="text-link"
            >
              GitHub
            </a>
          </ul>
          <ul className="mb-2 tracking-[-.01em]">
            - Feel free to contact me:&nbsp;
            <a
              href="mailto:isaacbao2025@outlook.com"
              className="font-bold text-link"
            >
              contact@ganzhe.site
            </a>
          </ul>
          <ul className="mb-4 tracking-[-.01em] font-bold mt-4">
            Have a nice day!
          </ul>
        </ol>
      </main>
    </div>
  );
}
