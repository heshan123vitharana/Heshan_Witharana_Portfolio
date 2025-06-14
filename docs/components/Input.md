# Input Component

A reusable input component with variants, animations, and error handling.

## Features
- Multiple variants (default, outline)
- Form validation support
- Error message display
- Animated focus states
- Accessible by default
- TypeScript support

## Usage

```tsx
import Input from '@/components/ui/Input';

// Basic usage
<Input
  label="Username"
  placeholder="Enter your username"
  type="text"
/>

// With error handling
<Input
  label="Email"
  type="email"
  error="Please enter a valid email address"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

// Outline variant
<Input
  label="Password"
  type="password"
  variant="outline"
  placeholder="Enter your password"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Input label text |
| `error` | `string` | - | Error message to display |
| `variant` | `'default' \| 'outline'` | `'default'` | Visual style variant |
| `className` | `string` | `''` | Additional CSS classes |
| `...props` | `HTMLInputElement` | - | All standard input props |

## Variants

### Default
```tsx
<Input
  label="Default Input"
  placeholder="Default variant"
/>
```

### Outline
```tsx
<Input
  label="Outline Input"
  variant="outline"
  placeholder="Outline variant"
/>
```

## Styling

The component uses Tailwind CSS classes for styling. Key classes include:

- Base styles: `w-full px-4 py-2 rounded-lg transition-all duration-300`
- Default variant: `bg-gray-800 border border-gray-700 text-white`
- Outline variant: `bg-transparent border-2 border-gray-700 text-white`
- Focus states: `focus:border-cyan-500 focus:outline-none`
- Error states: `border-red-500`

## Accessibility

- Proper label association using `htmlFor` and `id`
- Error messages linked to inputs using `aria-describedby`
- Keyboard navigation support
- Focus states for better visibility

## Best Practices

1. Always provide a label for better accessibility
2. Use appropriate input types (email, password, etc.)
3. Implement proper form validation
4. Handle error states appropriately
5. Use the outline variant for form-heavy interfaces

## Examples

### Form Integration
```tsx
const [formData, setFormData] = useState({
  username: '',
  email: '',
  password: ''
});

const [errors, setErrors] = useState({});

return (
  <form onSubmit={handleSubmit}>
    <Input
      label="Username"
      value={formData.username}
      onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      error={errors.username}
    />
    <Input
      label="Email"
      type="email"
      value={formData.email}
      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      error={errors.email}
    />
    <Input
      label="Password"
      type="password"
      value={formData.password}
      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      error={errors.password}
    />
  </form>
);
```

### Custom Styling
```tsx
<Input
  label="Custom Input"
  className="bg-gray-900 border-purple-500"
  placeholder="Custom styled input"
/>
``` 