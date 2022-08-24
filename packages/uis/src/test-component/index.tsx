import { View } from '@tarojs/components'
import { TestComponentProps } from '../../types/test-component'

function TestComponent(props: TestComponentProps) {
  return <View style={{ color: props.color }}>aaa</View>
}

export default TestComponent
