import { getInitials } from "../../utils/users";

function UserAvatar({ avatarUrl, name, size = "md" }) {
  //size: sm,md,lg
  const sizes = { sm: "w-8 h-8", md: "w-16 h-16", lg: "w-24 h-24" };
  const initials = getInitials(name);
  return (
    <div
      className={`${sizes[size]} rounded-full overflow-hidden bg-slate-200 flex items-center justify-center`}
    >
      {avatarUrl ? (
        <img
          src={avatarUrl}
          alt={name ?? "Avatar"}
          className="w-full object-cover"
        />
      ) : (
        <span className="text-lg font-semibold text-slate-500">{initials}</span>
      )}
    </div>
  );
}
export default UserAvatar;
