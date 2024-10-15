// components/AnimatedComponent.tsx
import { ReactNode } from 'react';
import { useAnimateOnScroll } from '@/hooks/useAnimateOnScroll';

interface AnimatedComponentProps {
  children: ReactNode;
  animationClass?: string;
}

const AnimatedComponent: React.FC<AnimatedComponentProps> = ({ children, animationClass = 'fade-in' }) => {
  const animatedRef = useAnimateOnScroll(animationClass);

  return (
    <div ref={animatedRef} className="animate-on-scroll">
      {children}
    </div>
  );
};

export default AnimatedComponent;
