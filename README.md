# JJAN design system

짠(JJAN) 프로젝트 컴포넌트 라이브러리 저장소 입니다.

# Installation

```
npm i jjan-design-system
```

# Storybook

스토리북 UI는 다음 링크를 참조해주세요. https://660669df67ccba61e0a64d14-qfybzaalgc.chromatic.com

# Usage

```tsx
import { Stack, Typo, Button } from 'jjan-design-system'; 

const HelloWorld: React.FC = () => {
  return (
    <Stack>
      <Typo appearance="header1">hello world</Typo>
      <Button appearance="primary">Button</Button>
    <Stack>
  )
}
```
