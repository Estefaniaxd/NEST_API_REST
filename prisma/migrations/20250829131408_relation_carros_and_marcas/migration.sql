-- CreateTable
CREATE TABLE "carros" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "modelo" TEXT NOT NULL,
    "fecha_fabricacion" DATETIME NOT NULL,
    "disponibilidad" BOOLEAN NOT NULL DEFAULT true,
    "precio" DECIMAL NOT NULL,
    "marca_id" INTEGER NOT NULL,
    CONSTRAINT "carros_marca_id_fkey" FOREIGN KEY ("marca_id") REFERENCES "marcas" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
