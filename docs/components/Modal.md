# Modal Component

A reusable modal dialog component with animations, backdrop, and keyboard support.

## Features
- Smooth enter/exit animations
- Backdrop with blur effect
- Keyboard support (Escape to close)
- Accessible by default
- TypeScript support
- Customizable title and content

## Usage

```tsx
import Modal from '@/components/ui/Modal';

// Basic usage
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Welcome"
>
  <p>This is the modal content.</p>
</Modal>

// Without title
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
>
  <div className="text-center">
    <h3 className="text-xl font-bold mb-4">Custom Content</h3>
    <p>This modal has no title prop but custom content.</p>
  </div>
</Modal>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | `boolean` | Required | Controls modal visibility |
| `onClose` | `() => void` | Required | Function to close modal |
| `title` | `string` | - | Modal title (optional) |
| `children` | `React.ReactNode` | Required | Modal content |

## Animations

The modal uses Framer Motion for smooth animations:

- Backdrop: Fade in/out
- Modal: Scale and slide up/down
- Spring animation for natural feel

```tsx
// Backdrop animation
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  className="fixed inset-0 bg-black/50 backdrop-blur-sm"
/>

// Modal animation
<motion.div
  initial={{ opacity: 0, scale: 0.95, y: 20 }}
  animate={{ opacity: 1, scale: 1, y: 0 }}
  exit={{ opacity: 0, scale: 0.95, y: 20 }}
  transition={{ type: 'spring', duration: 0.5 }}
/>
```

## Accessibility

- Proper ARIA attributes
- Focus management
- Keyboard navigation
- Screen reader support
- Click outside to close
- Escape key to close

## Best Practices

1. Always provide an `onClose` handler
2. Use semantic HTML for content
3. Keep modal content focused and concise
4. Implement proper focus trapping
5. Consider mobile responsiveness

## Examples

### Form Modal
```tsx
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Contact Form"
>
  <form onSubmit={handleSubmit} className="space-y-4">
    <Input
      label="Name"
      type="text"
      required
    />
    <Input
      label="Email"
      type="email"
      required
    />
    <textarea
      className="w-full p-2 rounded-lg bg-gray-800 border border-gray-700"
      rows={4}
      placeholder="Your message"
    />
    <Button type="submit">Send Message</Button>
  </form>
</Modal>
```

### Confirmation Modal
```tsx
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Confirm Action"
>
  <div className="text-center">
    <p className="mb-4">Are you sure you want to proceed?</p>
    <div className="flex justify-center gap-4">
      <Button
        variant="outline"
        onClick={() => setIsOpen(false)}
      >
        Cancel
      </Button>
      <Button
        variant="danger"
        onClick={handleConfirm}
      >
        Confirm
      </Button>
    </div>
  </div>
</Modal>
```

### Loading Modal
```tsx
<Modal
  isOpen={isLoading}
  onClose={() => {}}
>
  <div className="flex flex-col items-center">
    <div className="animate-spin rounded-full h-12 w-12 border-4 border-cyan-500 border-t-transparent" />
    <p className="mt-4 text-gray-300">Loading...</p>
  </div>
</Modal>
```

## Styling

The modal uses Tailwind CSS classes for styling:

- Container: `fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`
- Backdrop: `fixed inset-0 bg-black/50 backdrop-blur-sm`
- Modal: `w-full max-w-lg bg-gray-900 rounded-lg shadow-xl border border-gray-700`
- Header: `flex items-center justify-between p-4 border-b border-gray-700`
- Content: `p-4` 