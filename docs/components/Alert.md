# Alert Component

A reusable alert component with different variants, icons, and animations.

## Features
- Multiple variants (success, error, warning, info)
- Animated enter/exit transitions
- Dismissible alerts
- Custom icons for each variant
- TypeScript support
- Accessible by default

## Usage

```tsx
import Alert from '@/components/ui/Alert';

// Success alert
<Alert
  type="success"
  message="Your changes have been saved successfully!"
/>

// Error alert with close button
<Alert
  type="error"
  message="An error occurred while saving your changes."
  onClose={() => setShowError(false)}
/>

// Warning alert
<Alert
  type="warning"
  message="Please review your changes before submitting."
/>

// Info alert
<Alert
  type="info"
  message="New features are available!"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'success' \| 'error' \| 'warning' \| 'info'` | Required | Alert variant |
| `message` | `string` | Required | Alert message |
| `onClose` | `() => void` | - | Function to close alert |
| `className` | `string` | `''` | Additional CSS classes |

## Variants

### Success
```tsx
<Alert
  type="success"
  message="Operation completed successfully!"
/>
```

### Error
```tsx
<Alert
  type="error"
  message="Something went wrong!"
/>
```

### Warning
```tsx
<Alert
  type="warning"
  message="Please be careful!"
/>
```

### Info
```tsx
<Alert
  type="info"
  message="Here's some information."
/>
```

## Styling

The component uses Tailwind CSS classes for styling:

- Base styles: `p-4 rounded-lg border`
- Success: `bg-green-500/10 border-green-500/20 text-green-400`
- Error: `bg-red-500/10 border-red-500/20 text-red-400`
- Warning: `bg-yellow-500/10 border-yellow-500/20 text-yellow-400`
- Info: `bg-blue-500/10 border-blue-500/20 text-blue-400`

## Accessibility

- Proper ARIA roles and attributes
- Dismissible alerts with keyboard support
- Color contrast meets WCAG guidelines
- Screen reader friendly

## Best Practices

1. Use appropriate alert types for different situations
2. Keep messages clear and concise
3. Provide a way to dismiss alerts when appropriate
4. Consider auto-dismissing for non-critical alerts
5. Use consistent styling across variants

## Examples

### Auto-dismissing Alert
```tsx
const [showAlert, setShowAlert] = useState(false);

useEffect(() => {
  if (showAlert) {
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 5000);
    return () => clearTimeout(timer);
  }
}, [showAlert]);

return (
  <AnimatePresence>
    {showAlert && (
      <Alert
        type="success"
        message="Changes saved!"
        onClose={() => setShowAlert(false)}
      />
    )}
  </AnimatePresence>
);
```

### Form Validation Alerts
```tsx
const [errors, setErrors] = useState<string[]>([]);

return (
  <div className="space-y-4">
    {errors.map((error, index) => (
      <Alert
        key={index}
        type="error"
        message={error}
        onClose={() => setErrors(errors.filter((_, i) => i !== index))}
      />
    ))}
  </div>
);
```

### Custom Styling
```tsx
<Alert
  type="info"
  message="Custom styled alert"
  className="bg-purple-500/10 border-purple-500/20 text-purple-400"
/>
```

## Animations

The alert uses Framer Motion for smooth animations:

```tsx
<motion.div
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -10 }}
  className="p-4 rounded-lg border"
>
  {/* Alert content */}
</motion.div>
```

## Icons

Each variant comes with a specific icon:

- Success: `CheckCircle`
- Error: `XCircle`
- Warning: `AlertCircle`
- Info: `Info`

These icons are imported from `lucide-react` and styled according to the alert variant. 