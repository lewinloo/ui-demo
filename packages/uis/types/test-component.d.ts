import { FunctionComponent } from 'react'

export interface TestComponentProps {
  color?: string
}

declare const TestComponent: FunctionComponent<TestComponentProps>

export { TestComponent }
