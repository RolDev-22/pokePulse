class LocalStorageManager {
  constructor() {
    if (LocalStorageManager.instance) {
      //Verificamos si ya habia una instancia creada
      return LocalStorageManager.instance;
    }
    this.prefix = "poke_"; //Para diferenciar el key de datos en LocalStorage
    LocalStorageManager.instance = this;
  }

  /* Metodo para insertar datos en el LocalStorage */
  set(key, value) {
    try {
      localStorage.setItem(this.prefix + key, JSON.stringify(value));
    } catch (error) {
      console.error("Error al guardar en Storage => ", error);
    }
  }
  /* Metodo para obtener los items desde el LocalStorage */
  get(key) {
    try {
      const item = localStorage.getItem(this.prefix + key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error("Error leyendo de localStorage", error);
      return null;
    }
  }

  remove(key) {
    localStorage.removeItem(this.prefix + key);
  }
}

const storage = new LocalStorageManager();
export default storage;
