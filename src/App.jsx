import UserProfile from "./components/UserProfile";
import { users } from "./data/users";
import Button from "./components/Button";
import "./App.css";

function App() {
  //logic
  // const FilteredUser = users.filter((user) => user.location == "Ha Noi");
  // const FilteredUser = users.filter((user) => user.birthYear >= 2000);
  // const FilteredUser = users.filter((user) =>
  //   user.skills.some((s) => s.includes("React")),
  // );
  const FilteredUser = users.filter((user) => {
    return (
      user.skills.some((s) => s.includes("React")) && user.location == "Nghe An"
    );
  });
  //JSX =>UI
  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <button className="bg-pink-500 text-white py-2 px-4 rounded-full hover:bg-pink-600 md:py-3 md:px-5 lg:px-8 cursor-pointer">
          Click me
        </button>
      </div>
      {/* <h1 className="text-2xl text-red-900 hover:text-blue-700">
        Hello Tailwind - React Go
      </h1> */}
      {/* <Button>
        👉Dang ky <strong>nhan uu dai ngay</strong>
      </Button>
      <Button>🔑Dang nhap</Button> */}
      {/* {FilteredUser?.length > 0 ? (
        FilteredUser.map((user) => <UserProfile key={user.id} user={user} />)
      ) : (
        <p>Khong tim thay du lieu</p>
      )} */}
    </>
  );
}

export default App;
