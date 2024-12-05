# PokéSearch

**PokéSearch** es una aplicación web que permite a los usuarios buscar información sobre Pokémon utilizando la API oficial de [PokeAPI](https://pokeapi.co/). La aplicación está desarrollada con **React** y **TypeScript** en **Next.js**, utilizando **Axios** para las solicitudes HTTP y **TailwindCSS** para el diseño.

## Requisitos

Para ejecutar este proyecto, asegúrate de tener lo siguiente instalado en tu máquina:

- **Node.js** (v22.11.0 o superior). Puedes verificar tu versión con:

    ```bash
    node -v
    ```

- **npm** (v10.9.0 o superior) Puedes verificar tu versión con:

    ```bash
    npm -v
    ```

**Nota:** El proyecto está diseñado para ejecutarse con las versiones mencionadas. No se garantiza la compatibilidad con versiones anteriores.


## ¿Cómo ejecutar este proyecto?

Sigue los pasos a continuación para clonar y ejecutar el proyecto en tu entorno local:


1. **Clonar el repositorio:**
    ```bash
    git clone https://github.com/ChunchoMetalero/poke_search.git
    cd poke_search
    ```
2. **Instalar las dependencias:** Ejecuta el siguiente comando en la raíz del proyecto para instalar todas las dependencias necesarias.
    ```bash
    npm install
    ```
3. **Ejecutar el proyecto:** Inicia el servidor de desarrollo con el siguiente comando:
    ```bash
    npm run dev
    ```
4. **Acceder a la aplicación:** Abre tu navegador y dirígete a http://localhost:3000. (El puerto puede variar si el 3000 no está disponible).

## Uso
1. **Buscar un Pokémon:**
    - Escribe el nombre de un Pokémon en la barra de búsqueda.
    - Presiona "Search" o la tecla enter para buscar.


2. **Resultados de la búsqueda:**
    - **Nombre:** Nombre del Pokémon.
    - **Pokédex Number:** ID del Pokémon (Su número en la Pokédex).
    - **Weight:** Peso del Pokémon.
    - **Types:** Los tipos a los que pertenece el Pokémon.
    - **Abilities:** Lista de Habilidades del Pokémon.