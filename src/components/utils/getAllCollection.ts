export const getAllCollection = async () => {
    const res = await fetch("/collection.json", {
      cache: "no-store"
    });
    return res.json();
}