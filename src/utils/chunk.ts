export const renderTypeAdmin = (type: number) => {
  if (type === 1) {
    return "Super Admin";
  } if (type === 2) {
    return "System Admin";
  } if (type === 3) {
    return "School Admin";
  } if (type === 4) {
    return "Teacher";
  } 
    return "Student";
  
};
