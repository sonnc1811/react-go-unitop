import Layout from "../components/layout/Layout";
import { users } from "../data/users";
import UserProfile from "../components/user/UserProfile";
import SectionPage from "../components/layout/Sectionpage";
function Freelancerpage() {
  //logic
  // const FilteredUser = users.filter((user) => user.location == "Ha Noi");
  // const FilteredUser = users.filter((user) => user.birthYear >= 2000);
  // const FilteredUser = users.filter((user) =>
  //   user.skills.some((s) => s.includes("React")),
  // );
  //   const FilteredUser = users.filter((user) => {
  //     return (
  //       user.skills.some((s) => s.includes("React")) && user.location == "Ha Noi"
  //     );
  //   });
  return (
    <Layout>
      <SectionPage title="Danh sach Freelancer">
        <div className="flex flex-col gap-5">
          {users?.length > 0 ? (
            users.map((user) => <UserProfile key={user.id} user={user} />)
          ) : (
            <p className="text-center text-slate-500 py-10">
              Khong tim thay du lieu
            </p>
          )}
        </div>
      </SectionPage>
      {/* <section className="bg-slate-50 px-6 py-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-balance text-center">
          Danh sach Freelancer
        </h1>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-5">
            {users?.length > 0 ? (
              users.map((user) => <UserProfile key={user.id} user={user} />)
            ) : (
              <p className="text-center text-slate-500 py-10">
                Khong tim thay du lieu
              </p>
            )}
          </div>
        </div>
      </section> */}
    </Layout>
  );
}
export default Freelancerpage;
