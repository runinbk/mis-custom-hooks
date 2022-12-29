# Custom Hooks

## Algo de este Repositorio

Este repositorio contiene varios Custom Hooks que pueden ser reutilizados en otros proyectos.

## ¿Cómo usarlos?

Para usar un Custom Hook, debemos importarlo en el componente donde queremos usarlo y luego invocarlo. Por ejemplo, si queremos usar el Custom Hook `useCounter` en un componente, podemos hacerlo de la siguiente manera:

```js
import useCounter from "./useCounter";

function Counter() {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}
```

## Custom Hooks disponibles

- `useCounter`: Permite manejar un contador.
- `useFetch`: Permite hacer peticiones HTTP.
- `useForm`: Permite manejar formularios.
- `useIntersectionObserver`: Permite manejar el Intersection Observer.
- `useTodo`: Permite manejar una lista de tareas.

## Custom Hooks en desarrollo

- `useLocalStorage`: Permite manejar el Local Storage.
- `useModal`: Permite manejar modales.
- `useScroll`: Permite manejar el scroll de la página.
- `useTheme`: Permite manejar el tema de la página.

## Un poco de informacion de los Custom Hooks

Los Custom Hooks son funciones que permiten reutilizar el estado lógico entre componentes. Esto nos permite separar la lógica de los componentes y reutilizarla en otros componentes.
