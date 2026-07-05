export function getInitials(name){
    if(!name) return "?";
  return name
        .split(" ")
        .map((w) => w[0])
        .join("")
        .slice(-2)
        .toUpperCase();
    }
    
export function getAgeText(birthYear){
        if (!birthYear) return "Chưa cập nhật tuổi";
        const currentYear= new Date().getFullYear;
        return `${currentYear-birthYear} tuổi`;
    }
    