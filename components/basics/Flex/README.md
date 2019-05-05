# Flex

> Responsive flexbox layout component. Extends: Box.

To implement Flex component into your project you'll need to add the import:

```jsx
import { Flex, Box } from '../components/basics';
```

After adding import into your project you can use it simply like:

```jsx
<Flex>
  <Box p={3} width={1 / 2} color="white" bg="secondary">
    Flex
  </Box>
  <Box p={3} width={1 / 2} color="white" bg="primary">
    Box
  </Box>
</Flex>
```
