
  export const getAllSports = async () => {
    const res = await fetch("/sports.json", {
      cache: "no-store"
    });
    return res.json();
  };
  