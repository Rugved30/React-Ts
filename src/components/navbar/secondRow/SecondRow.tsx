import Login from "./Login"
import SearchInput from "./SearchInput"
import SignUp from "./SignUp"

function SecondRow() {
  return (
    <div className="flex w-full items-center gap-4 bg-white px-4 py-3 md:px-8">
        <SearchInput />
        <Login />
        <SignUp />
    </div>
  )
}

export default SecondRow