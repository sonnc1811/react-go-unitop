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
      user.skills.some((s) => s.includes("React")) && user.location == "Ha Noi"
    );
  });
  //JSX =>UI
  return (
    <>
      <section className="bg-slate-50 px-6 py-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-balance text-center">
          Danh sach Freelancer
        </h1>
        <div className="max-w-4xl mx-auto flex flex-col gap-5">
          {users?.length > 0 ? (
            users.map((user) => <UserProfile key={user.id} user={user} />)
          ) : (
            <p className="text-center text-slate-500 py-10">
              Khong tim thay du lieu
            </p>
          )}
        </div>
      </section>
    </>
  );
}

export default App;
