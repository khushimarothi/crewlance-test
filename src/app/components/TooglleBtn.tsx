"use client"
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'

const TooglleBtn = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const search = searchParams.get('userType')


  return (
    <label className="relative inline-flex items-center mx-5 cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        onClick={() => router.push(`${search == "freelance" ? "/" : "/?userType=freelance"}`)}
        checked={search === 'freelance'}
        readOnly
      />
      <div className="w-11 h-6 bg-black  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white peer-checked:after:bg-black after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-white"></div>
    </label>
  );
};

export default TooglleBtn;
