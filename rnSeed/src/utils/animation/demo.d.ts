// 泛型约束
// interface Lengthwise {
//     length: number
// }
// declare const _default: <T extends Lengthwise> (val: T ) => T
// export default _default

// 泛型
// declare const _default: <T>(val: T ) => T
// export default _default

// 联合类型
declare const _default: (v: string, p: string | number) => void
export default _default

// 基本导出
// export const data: string
// export const data1: string
// export const data2: string
