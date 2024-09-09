# Usa una imagen base de Python
FROM python:3.11-slim

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /application/src

# Copia el archivo de dependencias (si usas poetry o pip)
COPY requirements.txt .

# Instala las dependencias
RUN pip install --no-cache-dir -r requirements.txt

# Copia el resto del código de la aplicación al contenedor
COPY ./src /application/src

# Expone el puerto que tu aplicación utilizará
EXPOSE 9000

# Ejecuta el servidor de FastHTML usando Uvicorn
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "9000"]