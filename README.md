# 🚀 Shopify Components

Bienvenido a **QiangTheme**, una colección de componentes reutilizables y gratuitos para mejorar tu tienda en Shopify. Estos componentes están diseñados para ser fáciles de integrar y altamente personalizables.

## 📌 Características
✅ 100% gratuitos y de código abierto.  
✅ Compatibles con **Online Store 2.0**.  
✅ Personalizables con CSS y Liquid.  
✅ Fácil instalación e integración.  

---

## 📥 Instalación

### 1️⃣ Clonar el repositorio
```sh
git clone https://github.com/CarlosQiang/Shopify-Header
cd shopify-components
```

### 2️⃣ Copiar los archivos a tu tema
Ubica los archivos del componente que quieres usar en la carpeta `snippets` o `sections` de tu tema de Shopify:

```sh
cp snippets/mi-componente.liquid /ruta/de/tu/tema/snippets/
```
O si es una sección:
```sh
cp sections/mi-componente.liquid /ruta/de/tu/tema/sections/
```

---

## 🛠 Uso en Shopify

### 🔹 Agregar un **Snippet**
Para usar un snippet en tu tema, edita el archivo donde lo quieras incluir (`product.liquid`, `index.liquid`, etc.) y añade:
```liquid
{% include 'mi-componente' %}
```

### 🔹 Agregar una **Sección**
Si es una sección, agrégala directamente desde el editor de temas de Shopify:
1. Ve a **Tienda online** > **Temas** > **Personalizar**.
2. Haz clic en **Agregar sección** y selecciona `mi-componente`.
3. Guarda los cambios y personalízalo a tu gusto.

---

## 🎨 Personalización
Los componentes incluyen opciones de personalización a través de:
- **Ajustes en el editor de temas** (si es una sección).
- **Variables en Liquid**.
- **Clases CSS** en tu archivo `theme.css` o `base.css`.

Ejemplo de edición CSS:
```css
.mi-componente {
  background-color: #f8f8f8;
  padding: 20px;
}
```

---

## 📌 Requisitos
- Shopify con soporte para **Online Store 2.0**.
- Acceso al código del tema (requiere plan Shopify básico o superior).

---

## 🤝 Contribuciones
¡Las contribuciones son bienvenidas! Si deseas mejorar un componente o agregar uno nuevo:
1. Haz un **fork** del repositorio.
2. Crea una nueva rama (`feature/nuevo-componente`).
3. Envía un **pull request** con tus mejoras.

---

## 📄 Licencia
Este proyecto está bajo la licencia de **MIT**, lo que significa que puedes usarlo libremente en tus proyectos de Shopify.

---

## 📧 Contacto
Si tienes preguntas o sugerencias, puedes contactarme en:
📩 [carloscampospazos@gmail.com](mailto:tu-email@example.com)  
📌 GitHub: [github.com/CarlosQiang](https://github.com/tu-usuario)

---

⭐ ¡No olvides darle una estrella al repositorio si te ha sido útil! ⭐
