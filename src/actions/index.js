export const counterTypes = {
  increment: 'INCREMENTAR',
  decrement: 'DECREMENTAR'
}

export const increment = () => ({
  type: counterTypes.increment
})
export const decrement = () => ({
  type: counterTypes.decrement
})
