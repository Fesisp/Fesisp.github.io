import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { FiCircle, FiCode, FiFileText, FiLayers, FiLayout, FiGithub, FiExternalLink } from 'react-icons/fi';

import './Carousel.css';

const DEFAULT_ITEMS = [
  {
    title: 'Text Animations',
    description: 'Cool text animations for your projects.',
    id: 1,
    icon: <FiFileText className="carousel-icon" />,
    links: { repo: '#', demo: '#' }
  },
  {
    title: 'Animations',
    description: 'Smooth animations for your projects.',
    id: 2,
    icon: <FiCircle className="carousel-icon" />,
    links: { repo: '#', demo: '#' }
  },
  {
    title: 'Components',
    description: 'Reusable components for your projects.',
    id: 3,
    icon: <FiLayers className="carousel-icon" />,
    links: { repo: '#', demo: '#' }
  },
  {
    title: 'Backgrounds',
    description: 'Beautiful backgrounds and patterns for your projects.',
    id: 4,
    icon: <FiLayout className="carousel-icon" />,
    links: { repo: '#', demo: '#' }
  },
  {
    title: 'Common UI',
    description: 'Common UI components are coming soon!',
    id: 5,
    icon: <FiCode className="carousel-icon" />,
    links: { repo: '#', demo: '#' }
  }
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: 'spring', stiffness: 300, damping: 30 };

/**
 * Carousel Component
 * 
 * @param {Object} props
 * @param {Array} [props.items=DEFAULT_ITEMS] - An array of carousel items. Each item must include title, description, links, id, and icon.
 * @param {number} [props.baseWidth=300] - Total width (in px) of the carousel container. Effective item width is baseWidth minus padding.
 * @param {boolean} [props.autoplay=true] - Enables automatic scrolling to the next item at a fixed interval.
 * @param {number} [props.autoplayDelay=3000] - Delay in milliseconds between automatic scrolls when autoplay is enabled.
 * @param {boolean} [props.pauseOnHover=true] - Pauses the autoplay functionality when the carousel is hovered.
 * @param {boolean} [props.loop=false] - Whether the carousel should loop infinitely.
 * @param {boolean} [props.round=false] - Whether the carousel items should be round.
 */
export default function Carousel({
  items = DEFAULT_ITEMS,
  baseWidth = 300,
  autoplay = true,
  autoplayDelay = 3000,
  pauseOnHover = true,
  loop = false,
  round = false,
  onIndexChange
}) {
  const containerPadding = 16;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;

  const carouselItems = loop ? [...items, ...items, ...items] : items;
  const [currentIndex, setCurrentIndex] = useState(items.length);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  useEffect(() => {
    if (onIndexChange && items.length > 0) {
      onIndexChange(currentIndex % items.length);
    }
  }, [currentIndex, items.length, onIndexChange]);

  const containerRef = useRef(null);
  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex(prev => {
          if (prev >= items.length * 2) {
            return loop ? items.length : prev;
          }
          return prev + 1;
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [autoplay, autoplayDelay, isHovered, loop, items.length, carouselItems.length, pauseOnHover]);

  const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (loop) {
      if (currentIndex >= items.length * 2) {
        setIsResetting(true);
        x.set(-items.length * trackItemOffset);
        setCurrentIndex(items.length);
        setTimeout(() => setIsResetting(false), 50);
      } else if (currentIndex < items.length) {
        setIsResetting(true);
        const newIndex = items.length + (currentIndex % items.length);
        x.set(-newIndex * trackItemOffset);
        setCurrentIndex(newIndex);
        setTimeout(() => setIsResetting(false), 50);
      }
    }
  };

  const handleDragEnd = (_, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      setCurrentIndex(prev => prev + 1);
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * (carouselItems.length - 1),
          right: 0
        }
      };

  return (
    <div
      ref={containerRef}
      className={`carousel-container ${round ? 'round' : ''}`}
      style={{
        width: `${baseWidth}px`,
        ...(round && { height: `${baseWidth}px`, borderRadius: '50%' })
      }}
    >
      <motion.div
        className="carousel-track"
        drag="x"
        {...dragProps}
        style={{
          width: itemWidth,
          gap: `${GAP}px`,
          perspective: '1000px',
          perspectiveOrigin: `${currentIndex * trackItemOffset + itemWidth / 2}px 50%`,
          x
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(currentIndex * trackItemOffset) }}
        transition={effectiveTransition}
        onAnimationComplete={handleAnimationComplete}
      >
        {carouselItems.map((item, index) => {
          const range = [-(index + 1) * trackItemOffset, -index * trackItemOffset, -(index - 1) * trackItemOffset];
          const outputRange = [35, 0, -35];
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const rotateY = useTransform(x, range, outputRange, { clamp: false });
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const scale = useTransform(x, range, [0.85, 1, 0.85], { clamp: false });
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const opacity = useTransform(x, range, [0.6, 1, 0.6], { clamp: false });

          return (
            <motion.div
              key={index}
              className={`carousel-item ${round ? 'round' : ''}`}
              style={{
                width: itemWidth,
                height: round ? itemWidth : '100%',
                rotateY: rotateY,
                scale: scale,
                opacity: opacity,
                ...(round && { borderRadius: '50%' })
              }}
              transition={effectiveTransition}
            >
              <div className={`carousel-item-header ${round ? 'round' : ''}`}>
                <span className="carousel-icon-container">{item.icon}</span>
              </div>
              <div className="carousel-item-content">
                {item.name && <div className="text-xs font-bold text-primary mb-1 uppercase tracking-wide">{item.name}</div>}
                <div className="carousel-item-title">{item.title}</div>
                <p className="carousel-item-description">{item.description}</p>
                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2 mb-2">
                    {item.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-primary/20 text-primary border border-primary/30 backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                {item.links && (
                  <div className="carousel-item-links">
                    {item.links.repo && (
                      <a href={item.links.repo} target="_blank" rel="noopener noreferrer" className="carousel-link" title="Ver Código">
                        <FiGithub />
                      </a>
                    )}
                    {item.links.demo && item.links.demo !== '#' && (
                      <a href={item.links.demo} target="_blank" rel="noopener noreferrer" className="carousel-link" title="Ver Demo">
                        <FiExternalLink />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      <div className={`carousel-indicators-container ${round ? 'round' : ''}`}>
        <div className="carousel-indicators">
          {items.map((_, index) => (
            <motion.div
              key={index}
              className={`carousel-indicator ${currentIndex % items.length === index ? 'active' : 'inactive'}`}
              animate={{
                scale: currentIndex % items.length === index ? 1.2 : 1
              }}
              onClick={() => setCurrentIndex(index)}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
