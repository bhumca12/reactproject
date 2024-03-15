import Login from "./components/login/Login"
import Profile from "./components/profile/Profile"
import UserContextProvider from "./context/UserContextProvider"

function App() {


  return (
    <UserContextProvider>
      <h1 className="p-4 bg-green-950 text-white text-center py-4 px-0">Hello</h1>
      <Login/>
      <Profile/>
     
    </UserContextProvider>
  )
}

export default App
