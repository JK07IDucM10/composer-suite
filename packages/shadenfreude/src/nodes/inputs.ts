import { Float, GLSLType, Variable } from "../variables"

export const Uniform = <T extends GLSLType>(type: T, name: string) =>
  Variable<T>(type, name, {
    title: `Uniform: ${name}`,
    vertexHeader: `uniform ${type} ${name};`,
    fragmentHeader: `uniform ${type} ${name};`
  })

export const Time = Uniform("float", "u_time")

const Attribute = <T extends GLSLType>(type: T, name: string) =>
  Variable(type, name, { varying: true })
