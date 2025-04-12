import { create } from 'zustand'

interface GlobalState {
  count: number
  todos: string[]
  isDark: boolean
  name: string  // 新增的name状态
  increaseCount: () => void
  addTodo: (todo: string) => void
  toggleTheme: () => void
  setName: (name: string) => void  // 新增的setName方法
}

const useStore = create<GlobalState>((set) => ({
  count: 0,
  todos: [],
  isDark: false,
  name: '',  // 初始值为空字符串
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
  addTodo: (todo: string) => set((state) => ({ todos: [...state.todos, todo] })),
  toggleTheme: () => set((state) => ({ isDark: !state.isDark })),
  setName: (name: string) => set({ name })  // 新增的setName方法实现
}))

export default useStore