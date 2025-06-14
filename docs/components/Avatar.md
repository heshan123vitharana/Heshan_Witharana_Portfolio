# Avatar Component

A reusable avatar component with image support, fallback, and animations.

## Features
- Multiple size variants
- Image loading with fallback
- Hover animations
- TypeScript support
- Accessible by default
- Customizable styling

## Usage

```tsx
import Avatar from '@/components/ui/Avatar';

// Basic usage with image
<Avatar
  src="/path/to/image.jpg"
  alt="User avatar"
/>

// Different sizes
<Avatar
  src="/path/to/image.jpg"
  alt="User avatar"
  size="sm"
/>

<Avatar
  src="/path/to/image.jpg"
  alt="User avatar"
  size="lg"
/>

// Fallback when image fails to load
<Avatar
  src="/invalid/path.jpg"
  alt="User avatar"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | - | Image source URL |
| `alt` | `string` | `'Avatar'` | Alt text for image |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Avatar size |
| `className` | `string` | `''` | Additional CSS classes |

## Sizes

The component supports three size variants:

- Small (`sm`): 32x32 pixels
- Medium (`md`): 48x48 pixels
- Large (`lg`): 64x64 pixels

```tsx
// Size variants
<div className="flex items-center gap-4">
  <Avatar size="sm" src="/avatar.jpg" alt="Small avatar" />
  <Avatar size="md" src="/avatar.jpg" alt="Medium avatar" />
  <Avatar size="lg" src="/avatar.jpg" alt="Large avatar" />
</div>
```

## Styling

The component uses Tailwind CSS classes for styling:

- Base styles: `relative rounded-full overflow-hidden`
- Size classes:
  - Small: `w-8 h-8`
  - Medium: `w-12 h-12`
  - Large: `w-16 h-16`
- Fallback styles: `bg-gray-800 flex items-center justify-center`
- Icon styles: `w-1/2 h-1/2 text-gray-400`

## Accessibility

- Proper alt text for images
- Fallback content for screen readers
- Semantic HTML structure
- Focus management

## Best Practices

1. Always provide meaningful alt text
2. Use appropriate image sizes
3. Implement proper fallback
4. Consider loading states
5. Maintain consistent sizing

## Examples

### User Profile
```tsx
<div className="flex items-center gap-4">
  <Avatar
    src={user.avatar}
    alt={`${user.name}'s avatar`}
    size="lg"
  />
  <div>
    <h3 className="text-lg font-semibold">{user.name}</h3>
    <p className="text-gray-400">{user.role}</p>
  </div>
</div>
```

### Avatar Group
```tsx
<div className="flex -space-x-2">
  {users.map((user) => (
    <Avatar
      key={user.id}
      src={user.avatar}
      alt={user.name}
      size="sm"
      className="border-2 border-gray-900"
    />
  ))}
</div>
```

### Custom Styling
```tsx
<Avatar
  src="/avatar.jpg"
  alt="Custom styled avatar"
  className="border-2 border-cyan-500 shadow-lg"
/>
```

## Animations

The avatar uses Framer Motion for hover animations:

```tsx
<motion.div
  whileHover={{ scale: 1.05 }}
  className="relative rounded-full overflow-hidden"
>
  {/* Avatar content */}
</motion.div>
```

## Fallback

When the image fails to load or no source is provided, the component displays a fallback icon:

```tsx
<div className="w-full h-full bg-gray-800 flex items-center justify-center">
  <User className="w-1/2 h-1/2 text-gray-400" />
</div>
```

## Error Handling

The component handles image loading errors gracefully:

```tsx
const [error, setError] = React.useState(false);

return (
  <motion.div className="relative rounded-full overflow-hidden">
    {src && !error ? (
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        onError={() => setError(true)}
      />
    ) : (
      <div className="w-full h-full bg-gray-800 flex items-center justify-center">
        <User className="w-1/2 h-1/2 text-gray-400" />
      </div>
    )}
  </motion.div>
);
``` 