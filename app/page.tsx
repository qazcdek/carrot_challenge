import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-6">
      <div className="my-auto flex flex-col items-center gap-2 *:font-medium">
        <span className="text-9xl">🥕</span>
        <h2 className="mt-4 text-3xl">당근 마겟에 어서오세요!</h2>
      </div>
      <div className="flex flex-col items-center gap-3 w-full">
        <Link
          href="/create-account"
          className="w-full bg-orange-500 text-white text-lg font-semibold py-2.5 rounded-md text-center hover:bg-orange-400 transition-colors sm:w-96"
        >
          시작하기
        </Link>
        <div className="flex gap-2">
          <span>이미 계정이 있나요?</span>
          <Link
            href="/login"
            className="hover:underline text-customred font-semibold"
          >
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
}
