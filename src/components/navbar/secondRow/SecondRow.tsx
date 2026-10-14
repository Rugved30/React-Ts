import { useNavigate } from "react-router-dom"
import SearchInput from "./SearchInput"

function SecondRow() {

  const navigate = useNavigate();

  return (
    <div className="flex w-full items-center gap-4 bg-white px-4 py-3 md:px-8">
        <SearchInput />
        <button className="shrink-0 rounded-lg border border-blue-600 px-4 py-2.5 text-sm font-semibold text-blue-600 transition hover:bg-blue-50 md:px-6"
          onClick={()=>navigate('/login')}>
            Login
        </button>
        <button className="shrink-0 rounded-lg border border-blue-600 px-4 py-2.5 text-sm font-semibold text-blue-600 transition hover:bg-blue-50 md:px-6"
          onClick={()=>navigate('/signup')}>
            Signup
        </button>
    </div>
  )
}

export default SecondRow