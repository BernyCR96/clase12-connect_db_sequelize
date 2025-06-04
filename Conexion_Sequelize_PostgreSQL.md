# Conexión a PostgreSQL con Sequelize (sin modelos)

Este ejemplo muestra cómo conectar una aplicación Node.js a una base de datos PostgreSQL utilizando Sequelize sin definir modelos.

## Instalación de dependencias

Primero, deben instalar Sequelize y el paquete del dialecto de PostgreSQL:

```bash
npm install sequelize @sequelize/postgres
```

## Configuración de la conexión

Crear un archivo llamado `database.js` con el siguiente contenido:

```javascript
// database.js
import { Sequelize } from '@sequelize';

// Configurar los parámetros de conexión
const sequelize = new Sequelize({
  dialect: 'postgres',
  database: 'nombre_de_la_base_de_datos',
  username: 'tu_usuario',
  password: 'tu_contraseña',
  host: 'localhost',
  port: 5432,
  logging: false, // Desactivar el registro de consultas SQL
});

// Función para probar la conexión
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Conexión establecida exitosamente.');
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
}

testConnection();
```

## 🔗 Documentación oficial

Para obtener más información sobre cómo definir modelos y trabajar con Sequelize, consulta la documentación oficial:

- [Documentación de Sequelize para PostgreSQL](https://sequelize.org/docs/v7/databases/postgres/)
- [Guía de inicio de Sequelize](https://sequelize.org/docs/v7/getting-started/)


## Repositorio
- [Código trabajado en clase](https://github.com/BernyCR96/clase12-connect_db_sequelize.git)
