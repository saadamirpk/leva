/**
 * Type tests (run them with yarn test:types)
 */
import { folder } from './helpers'
import { useControls } from './useControls'

declare function expectType<T>(
  v: T
): void

/**
 * numbers
 */
;(() => {
  expectType<{ a: number }>(useControls({ a: 10 }))
  expectType<{ a: number }>(useControls({ a: { value: 10 } }))
  expectType<{ a: number }>(useControls({ a: { value: 10, min: 0 } }))
  expectType<{ a: number }>(useControls({ a: { value: 10, min: 0, max: 20 } }))
  // @ts-expect-error
  expectType<{ a: string }>(useControls({ a: { value: 10, min: 0, max: 20 } }))
})()

/**
 * strings
 */
;(() => {
  expectType<{ a: string }>(useControls({ a: 'some string' }))
  // @ts-expect-error
  expectType<{ a: number }>(useControls({ a: 'some string' }))
})()

/**
 * selects
 */
;(() => {
  expectType<{ a: string }>(useControls({ a: { options: ['foo', 'bar'] } }))
  // @ts-expect-error
  expectType<{ a: number }>(useControls({ a: { options: ['foo', 'bar'] } }))
  expectType<{ a: number }>(useControls({ a: { options: [1, 2] } }))

  expectType<{ a: string | string[] }>(useControls({ a: { options: ['foo', 'bar', ['foo', 'bar']] } }))
  // @ts-expect-error
  expectType<{ a: string }>(useControls({ a: { options: ['foo', 'bar', ['foo', 'bar']] } }))

  expectType<{ a: string | number | Array<string | number> }>(
    useControls({ a: { options: ['foo', 1, ['foo', 'bar']] } })
  )

  expectType<{ a: string | number }>(
    // @ts-expect-error
    useControls({ a: { options: ['foo', 1, ['foo', 'bar']] } })
  )

  expectType<{ a: string | number }>(useControls({ a: { options: ['foo', 10] } }))
  // @ts-expect-error
  expectType<{ a: string }>(useControls({ a: { options: ['foo', 10] } }))

  expectType<{ a: string }>(useControls({ a: { options: { foo: 1, bar: true } } }))
})()

/**
 * images
 */
;(() => {
  expectType<{ a: string | undefined }>(useControls({ a: { image: undefined } }))
  // @ts-expect-error
  expectType<{ a: string }>(useControls({ a: { image: undefined } }))
})()

/**
 * color objects
 * @note: colors represented as strings are already covered by string.
 */
;(() => {
  expectType<{ a: { r: number; g: number; b: number } }>(useControls({ a: { r: 10, g: 10, b: 10 } }))
  // @ts-expect-error
  expectType<{ a: { r: number; g: number; b: number; a: number } }>(useControls({ a: { r: 10, g: 10, b: 10 } }))

  expectType<{ a: { r: number; g: number; b: number; a: number } }>(useControls({ a: { r: 10, g: 10, b: 10, a: 1 } }))
})()

/**
 * booleans
 */
;(() => {
  expectType<{ a: boolean }>(useControls({ a: true }))
  expectType<{ a: boolean }>(useControls({ a: false }))
  // @ts-expect-error
  expectType<{ a: string }>(useControls({ a: false }))
})()

/**
 * intervals
 */
;(() => {
  expectType<{ a: [number, number] }>(useControls({ a: { value: [0, 10], min: 0, max: 20 } }))
  // @ts-expect-error
  expectType<{ a: [number, number] }>(useControls({ a: { value: [0, 10] } }))
  // @ts-expect-error
  expectType<{ a: [number, number] }>(useControls({ a: { value: [0, 10], min: 0 } }))
  // @ts-expect-error
  expectType<{ a: [number, number] }>(useControls({ a: { value: [0, 10], max: 0 } }))
  // @ts-expect-error
  expectType<{ a: [string, number] }>(useControls({ a: { value: [0, 10], min: 0, max: 20 } }))
})()

/**
 * point2d
 */
;(() => {
  /**
   * object format
   */
  ;(() => {
    expectType<{ a: { x: number; y: number } }>(useControls({ a: { x: 10, y: 10 } }))
    // @ts-expect-error
    expectType<{ a: { x: number; y: number } }>(useControls({ a: { x: 10, y: '10' } }))

    expectType<{ a: { x: number; y: number } }>(useControls({ a: { x: { value: 10, min: 10 }, y: 10 } }))
    expectType<{ a: { x: number; y: number } }>(useControls({ a: { x: { value: 10 }, y: 10 } }))
  })()

  /**
   * array format
   */
  ;(() => {
    expectType<{ a: [number, number] }>(useControls({ a: [0, 0] }))
    expectType<{ a: [number, number] }>(useControls({ a: [0, { value: 0, min: 0 }] }))

    // @ts-expect-error
    expectType<{ a: [number, number] }>(useControls({ a: [0, { value: '0' }] }))
    // @ts-expect-error
    expectType<{ a: [number, number] }>(useControls({ a: ['0', 0] }))
  })()
})()

/**
 * point3d
 */
;(() => {
  /**
   * object format
   */
  ;(() => {
    expectType<{ a: { x: number; y: number; z: number } }>(useControls({ a: { x: 10, y: 10, z: 0 } }))
    // @ts-expect-error
    expectType<{ a: { x: number; y: number; z: number } }>(useControls({ a: { x: 10, y: '10', z: 0 } }))

    expectType<{ a: { x: number; y: number; z: number } }>(
      useControls({ a: { x: { value: 10, min: 10 }, y: 10, z: 10 } })
    )
    expectType<{ a: { x: number; y: number; z: number } }>(useControls({ a: { x: { value: 10 }, y: 10, z: 10 } }))
  })()

  /**
   * array format
   */
  ;(() => {
    expectType<{ a: [number, number, number] }>(useControls({ a: [0, 0, 0] }))
    expectType<{ a: [number, number, number] }>(useControls({ a: [0, 0, { value: 0, min: -5 }] }))

    // @ts-expect-error
    expectType<{ a: [number, number, number] }>(useControls({ a: [0, { value: '0' }, 0] }))
    // @ts-expect-error
    expectType<{ a: [number, number, number] }>(useControls({ a: ['0', 0, 0] }))
  })()
})()

/**
 * spring
 */
;(() => {
  expectType<{ a: { tension: number; friction: number; mass: number } }>(
    useControls({ a: { tension: 10, friction: 10 } })
  )

  expectType<{ a: { tension: number; friction: number; mass: number } }>(
    useControls({ a: { tension: 10, friction: 10, mass: 1 } })
  )
})()

/**
 * folders
 */
;(() => {
  expectType<{}>(useControls({ a: folder({}) }))

  expectType<{
    a1: number
    b1: number
  }>(
    useControls({
      a: folder({
        a1: 1,
        b: folder({
          b1: { value: 10 },
        }),
      }),
    })
  )

  expectType<{
    a1: number
    b1: string
  }>(
    // @ts-expect-error
    useControls({
      a: folder({
        a1: 1,
        b: folder({
          b1: { value: 10 },
        }),
      }),
    })
  )
})()
