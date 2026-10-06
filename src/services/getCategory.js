export const getCategory = async ({ urlCategory }) => {
  try {
    const response = await fetch(`${urlCategory}`);
    if (!response.ok) {
      throw new Error("No se pudo acceder a la categoria");
    }
    const data = await response.json();
    const categoryOnj = data.genera.find((g) => g.language.name === "es");
    const category = categoryOnj ? categoryOnj.genus : "Desconocida";

    return category;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
