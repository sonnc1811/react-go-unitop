import { getInitials, getAgeText } from "../../utils/users";
import UserAvatar from "./UserAvatar";

export default function UserProfile({ user }) {
  const ageText = getAgeText(user.birthYear);
  const initials = getInitials(user.name);
  return (
    <div className="bg-white border hover:shadow border-slate-200 rounded-xl p-5 flex gap-5">
      {/* avatar */}
      <UserAvatar avatarUrl={user.avatarUrl} name={user.name} size="lg" />
      {/* Info */}
      <div className="flex-1">
        {/* Name+button */}
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-base font-semibold text-slate-800 truncate">
            {user.name ?? "An danh"}
          </h2>
          <button className="shrink-0 px-3 py-1 text-xs font-medium text-blue-600 border border-blue-200 cursor-pointer rounded-full hover:bg-blue-50 transition-colors">
            Nhan tin
          </button>
        </div>
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-1">
          {user.location && (
            <span className="text-xs text-slate-400">{user.location}</span>
          )}
          {user.location && user.birthYear && (
            <span className="text-xs text-slate-200">.</span>
          )}
          {user.birthYear && (
            <span className="text-xs text-slate-400">{ageText}</span>
          )}
        </div>
        {/* skill */}
        {user.skills?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {user.skills.map((skill, index) => (
              <span
                key={index}
                className="px-2 py-0.5 text-xs text-slate-500 bg-slate-100 rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
