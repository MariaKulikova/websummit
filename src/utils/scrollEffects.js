/**
 * Add scroll-based opacity effect to hero blob
 */
export const initBlobScrollEffect = () => {
  const blob = document.querySelector('.hero__circle-inner');
  if (!blob) return;

  let isHovered = false;
  let currentScale = 1;
  let isDragging = false;
  let dragStartX = 0;
  let dragStartY = 0;
  let clickPosX = 0;
  let clickPosY = 0;
  let centerX = 0;
  let centerY = 0;
  let currentWidth = null;
  let currentHeight = null;
  let currentBorderRadius = '63% 37% 54% 46% / 55% 32% 52% 45%';

  const handleScroll = () => {
    if (isDragging) return; // Don't interfere during drag

    const scrollY = window.scrollY;
    const maxScroll = 1000; // Distance in pixels for effects (увеличено для медленного исчезновения)
    const minOpacity = 0.15; // Minimum opacity (15% - still visible)

    // Calculate opacity
    const opacity = Math.max(minOpacity, 1 - (scrollY / maxScroll));

    // No scale or translation - keep blob fixed in position
    blob.style.opacity = opacity;
  };

  const handleMouseEnter = () => {
    isHovered = true;
    blob.style.cursor = 'grab';
  };

  const handleMouseLeave = () => {
    if (!isDragging) {
      isHovered = false;
      blob.style.cursor = 'default';
    }
  };

  const handleMouseDown = (e) => {
    isDragging = true;
    blob.style.cursor = 'grabbing';

    const rect = blob.getBoundingClientRect();

    // Store current size if not already stored
    if (currentWidth === null) {
      currentWidth = rect.width;
      currentHeight = rect.height;
    }

    // Get center of blob
    centerX = rect.left + rect.width / 2;
    centerY = rect.top + rect.height / 2;

    // Store click position relative to blob center
    clickPosX = (e.clientX - centerX) / rect.width;
    clickPosY = (e.clientY - centerY) / rect.height;

    dragStartX = e.clientX;
    dragStartY = e.clientY;

    // Disable transitions during drag
    blob.style.transition = 'none';

    console.log('Drag started at:', clickPosX, clickPosY, 'Current size:', currentWidth, currentHeight);

    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    // Calculate how much mouse moved
    const deltaX = e.clientX - dragStartX;
    const deltaY = e.clientY - dragStartY;

    const rect = blob.getBoundingClientRect();

    // Determine which part of blob was grabbed
    const isTop = clickPosY < -0.2;
    const isBottom = clickPosY > 0.2;
    const isLeft = clickPosX < -0.2;
    const isRight = clickPosX > 0.2;

    console.log('Dragging - isRight:', isRight, 'isLeft:', isLeft, 'isTop:', isTop, 'isBottom:', isBottom);
    console.log('Delta:', deltaX, deltaY);

    // Calculate deformation based on direction from CURRENT size
    const stretchX = deltaX / 2; // pixels to stretch
    const stretchY = deltaY / 2;

    let newWidth = currentWidth;
    let newHeight = currentHeight;

    // Allow stretching in ANY direction
    if (isRight) {
      newWidth = currentWidth + stretchX;
    } else if (isLeft) {
      newWidth = currentWidth - stretchX;
    }

    if (isBottom) {
      newHeight = currentHeight + stretchY;
    } else if (isTop) {
      newHeight = currentHeight - stretchY;
    }

    console.log('New size:', newWidth, newHeight);

    blob.style.width = `${newWidth}px`;
    blob.style.height = `${newHeight}px`;

    // Also apply border-radius deformation
    const deformX = Math.min(Math.max(deltaX / rect.width * 200, -100), 100);
    const deformY = Math.min(Math.max(deltaY / rect.height * 200, -100), 100);

    // Parse current border radius to get base values
    const radiusMatch = currentBorderRadius.match(/(\d+)% (\d+)% (\d+)% (\d+)% \/ (\d+)% (\d+)% (\d+)% (\d+)%/);
    let topLeft1, topRight1, bottomRight1, bottomLeft1, topLeft2, topRight2, bottomRight2, bottomLeft2;

    if (radiusMatch) {
      [, topLeft1, topRight1, bottomRight1, bottomLeft1, topLeft2, topRight2, bottomRight2, bottomLeft2] = radiusMatch.map(Number);
    } else {
      // Fallback to defaults
      topLeft1 = 63; topRight1 = 37; bottomRight1 = 54; bottomLeft1 = 46;
      topLeft2 = 55; topRight2 = 32; bottomRight2 = 52; bottomLeft2 = 45;
    }

    if (isRight) {
      topRight1 = Math.max(10, Math.min(90, topRight1 - deformX));
      bottomRight1 = Math.max(10, Math.min(90, bottomRight1 - deformX));
    } else if (isLeft) {
      topLeft1 = Math.max(10, Math.min(90, topLeft1 + deformX));
      bottomLeft1 = Math.max(10, Math.min(90, bottomLeft1 + deformX));
    }

    if (isBottom) {
      bottomRight1 = Math.max(10, Math.min(90, bottomRight1 - deformY));
      bottomLeft1 = Math.max(10, Math.min(90, bottomLeft1 - deformY));
    } else if (isTop) {
      topLeft1 = Math.max(10, Math.min(90, topLeft1 + deformY));
      topRight1 = Math.max(10, Math.min(90, topRight1 + deformY));
    }

    const newBorderRadius = `${topLeft1}% ${topRight1}% ${bottomRight1}% ${bottomLeft1}% / ${topLeft2}% ${topRight2}% ${bottomRight2}% ${bottomLeft2}%`;
    blob.style.borderRadius = newBorderRadius;
  };

  const handleMouseUp = () => {
    if (!isDragging) return;

    isDragging = false;
    blob.style.cursor = isHovered ? 'grab' : 'default';

    // Save current state for next drag
    const rect = blob.getBoundingClientRect();
    currentWidth = rect.width;
    currentHeight = rect.height;
    currentBorderRadius = blob.style.borderRadius;

    console.log('Drag ended - saved new size:', currentWidth, currentHeight);
    console.log('Saved border-radius:', currentBorderRadius);

    // Re-enable transitions but keep the deformed state
    blob.style.transition = 'opacity 0.1s ease-out, cursor 0.2s ease';

    // Don't reset size or border-radius - keep the deformed state
  };

  const handleClick = (e) => {
    // Only trigger click animation if not dragging (movement < 5px)
    const deltaX = Math.abs(e.clientX - dragStartX);
    const deltaY = Math.abs(e.clientY - dragStartY);

    if (deltaX < 5 && deltaY < 5) {
      // Add click animation
      blob.style.animation = 'none';
      setTimeout(() => {
        blob.style.animation = 'blob-morph 20s ease-in-out infinite, blob-click 0.6s ease-out';
      }, 10);

      // Reset animation after click effect
      setTimeout(() => {
        blob.style.animation = 'blob-morph 20s ease-in-out infinite';
      }, 600);
    }
  };

  // Initial scroll call
  handleScroll();

  window.addEventListener('scroll', handleScroll);
  blob.addEventListener('mouseenter', handleMouseEnter);
  blob.addEventListener('mouseleave', handleMouseLeave);
  blob.addEventListener('mousedown', handleMouseDown);
  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('mouseup', handleMouseUp);
  blob.addEventListener('click', handleClick);

  // Cleanup function
  return () => {
    window.removeEventListener('scroll', handleScroll);
    blob.removeEventListener('mouseenter', handleMouseEnter);
    blob.removeEventListener('mouseleave', handleMouseLeave);
    blob.removeEventListener('mousedown', handleMouseDown);
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
    blob.removeEventListener('click', handleClick);
  };
};
