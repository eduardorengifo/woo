# Nav

> Basic styled Nav. Extends Flex.

To implement Nav component into your project you'll need to add the import:

```jsx
import { Nav, Box } from '../components/basics';
```

After adding import into your project you can use it simply like:

```jsx
<Nav
  as="header"
  justifyContent="space-between"
  alignItems="center"
  borderBottom="1px solid"
  borderColor="border"
>
  <Box>Item</Box>
  <Box>Item</Box>
  <Box>Item</Box>
</Nav>
```
