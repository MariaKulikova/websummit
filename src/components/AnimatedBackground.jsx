import { useEffect, useRef, useState } from 'react';
import './AnimatedBackground.scss';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);
  const [micIcon, setMicIcon] = useState(null);

  // Загружаем иконку микрофона
  useEffect(() => {
    const img = new Image();
    img.src = '/assets/Mic.svg';
    img.onload = () => setMicIcon(img);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;

    // Цвета из CSS переменных
    const PRIMARY_COLOR = '#2A01F8';
    const SECONDARY_COLOR = '#2F83FF';

    // Конвертация hex в rgba
    const hexToRgba = (hex, alpha) => {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    // Настройка размеров canvas
    const resizeCanvas = () => {
      const container = canvas.parentElement;
      const size = Math.min(container.offsetWidth, container.offsetHeight);
      canvas.width = size;
      canvas.height = size;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Параметры анимации
    const centerX = () => canvas.width / 2;
    const centerY = () => canvas.height / 2;
    const baseRadius = () => Math.min(canvas.width, canvas.height) * 0.25;

    // Расходящиеся круги (звуковые волны) - бесшовная анимация
    const soundWaves = [];

    // Создаем начальные волны для бесшовности
    for (let i = 0; i < 3; i++) {
      soundWaves.push({
        radius: 50 + i * 60,
        opacity: 1,
        maxRadius: baseRadius() * 2,
      });
    }

    const createSoundWave = () => {
      soundWaves.push({
        radius: 50,
        opacity: 1,
        maxRadius: baseRadius() * 2,
      });
    };

    // Создаем волны периодически для бесшовности
    const waveInterval = setInterval(() => createSoundWave(), 1200);

    // Карточки движущиеся по кругу - всегда видимые
    const cards = Array.from({ length: 6 }, (_, i) => ({
      angle: (Math.PI * 2 * i) / 6,
      size: 30 + Math.random() * 25, // Больше разброс по размеру
      speed: 0.0008, // Увеличена скорость вращения
      opacity: 1, // Всегда видимые
    }));

    const drawMicrophone = (x, y, size, pulse) => {
      const scale = 1 + pulse * 0.15;
      const actualSize = size * scale;

      ctx.save();
      ctx.translate(x, y);
      ctx.scale(scale, scale);

      ctx.strokeStyle = hexToRgba(PRIMARY_COLOR, 0.9);
      ctx.lineWidth = 2.5;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      // Капсула микрофона
      ctx.beginPath();
      ctx.roundRect(-actualSize * 0.15, -actualSize * 0.25, actualSize * 0.3, actualSize * 0.4, actualSize * 0.15);
      ctx.stroke();

      // Держатель
      ctx.beginPath();
      ctx.arc(0, actualSize * 0.15, actualSize * 0.25, 0, Math.PI, false);
      ctx.stroke();

      // Линия вниз
      ctx.beginPath();
      ctx.moveTo(0, actualSize * 0.15);
      ctx.lineTo(0, actualSize * 0.35);
      ctx.stroke();

      ctx.restore();
    };

    const drawCard = (x, y, size, opacity) => {
      ctx.save();
      ctx.translate(x, y);

      const alpha = opacity;

      // Glassmorphism эффект для карточки
      ctx.beginPath();
      ctx.roundRect(-size / 2, -size / 2, size, size * 0.7, 6);

      // Полупрозрачная заливка (стекло)
      const cardGradient = ctx.createLinearGradient(-size / 2, -size / 2, size / 2, size * 0.7 / 2);
      cardGradient.addColorStop(0, `rgba(255, 255, 255, ${alpha * 0.1})`);
      cardGradient.addColorStop(1, `rgba(255, 255, 255, ${alpha * 0.05})`);
      ctx.fillStyle = cardGradient;
      ctx.fill();

      // Обводка карточки
      ctx.strokeStyle = hexToRgba(PRIMARY_COLOR, alpha * 0.4);
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Внутренняя подсветка
      ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.2})`;
      ctx.lineWidth = 0.5;
      ctx.stroke();

      // Точки (header)
      const dotY = -size * 0.3;
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.arc(-size * 0.25 + i * size * 0.15, dotY, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = hexToRgba(SECONDARY_COLOR, alpha * 0.7);
        ctx.fill();
      }

      // Линии контента
      ctx.strokeStyle = hexToRgba(PRIMARY_COLOR, alpha * 0.4);
      ctx.lineWidth = 1;
      for (let i = 0; i < 2; i++) {
        ctx.beginPath();
        ctx.moveTo(-size * 0.3, -size * 0.05 + i * size * 0.15);
        ctx.lineTo(size * 0.3, -size * 0.05 + i * size * 0.15);
        ctx.stroke();
      }

      ctx.restore();
    };

    const animate = () => {
      time += 0.005; // Более плавная анимация

      // Очистка canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cx = centerX();
      const cy = centerY();
      const mainRadius = baseRadius();

      // Растушеванный градиентный фон с очень плавным затуханием
      const outerGradient = ctx.createRadialGradient(cx, cy, mainRadius * 0.3, cx, cy, mainRadius * 2.5);
      outerGradient.addColorStop(0, hexToRgba(PRIMARY_COLOR, 0.15));
      outerGradient.addColorStop(0.25, hexToRgba(SECONDARY_COLOR, 0.08));
      outerGradient.addColorStop(0.4, hexToRgba(SECONDARY_COLOR, 0.05));
      outerGradient.addColorStop(0.55, hexToRgba(SECONDARY_COLOR, 0.03));
      outerGradient.addColorStop(0.7, hexToRgba(SECONDARY_COLOR, 0.015));
      outerGradient.addColorStop(0.82, hexToRgba(SECONDARY_COLOR, 0.008));
      outerGradient.addColorStop(0.92, hexToRgba(SECONDARY_COLOR, 0.003));
      outerGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = outerGradient;
      ctx.beginPath();
      ctx.arc(cx, cy, mainRadius * 2.5, 0, Math.PI * 2);
      ctx.fill();

      // Расходящиеся звуковые волны с заливкой - бесшовная анимация
      for (let i = soundWaves.length - 1; i >= 0; i--) {
        const wave = soundWaves[i];
        wave.radius += 1.5;

        // Удаляем только когда волна выходит за пределы
        if (wave.radius > mainRadius) {
          soundWaves.splice(i, 1);
          continue;
        }

        // Заливка круга с градиентом
        const fillGradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, wave.radius);
        fillGradient.addColorStop(0, hexToRgba(SECONDARY_COLOR, 0.03));
        fillGradient.addColorStop(1, hexToRgba(SECONDARY_COLOR, 0.01));

        ctx.fillStyle = fillGradient;
        ctx.beginPath();
        ctx.arc(cx, cy, wave.radius, 0, Math.PI * 2);
        ctx.fill();

        // Обводка круга (прозрачнее)
        ctx.strokeStyle = hexToRgba(SECONDARY_COLOR, 0.06);
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(cx, cy, wave.radius, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Мягкое внутреннее свечение с очень плавным появлением
      const innerGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, mainRadius);
      innerGlow.addColorStop(0, hexToRgba(PRIMARY_COLOR, 0.08));
      innerGlow.addColorStop(0.3, hexToRgba(SECONDARY_COLOR, 0.05));
      innerGlow.addColorStop(0.5, hexToRgba(SECONDARY_COLOR, 0.03));
      innerGlow.addColorStop(0.7, hexToRgba(SECONDARY_COLOR, 0.015));
      innerGlow.addColorStop(0.85, hexToRgba(SECONDARY_COLOR, 0.008));
      innerGlow.addColorStop(0.95, hexToRgba(SECONDARY_COLOR, 0.003));
      innerGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = innerGlow;
      ctx.beginPath();
      ctx.arc(cx, cy, mainRadius, 0, Math.PI * 2);
      ctx.fill();

      // Пульсация для микрофона (плавнее)
      const micPulse = Math.sin(time * 2) * 0.5 + 0.5;

      // Микрофон из SVG с glassmorphism эффектом на самой фигуре
      if (micIcon) {
        const micWidth = 35;
        const micHeight = 44;
        const scale = 1 + micPulse * 0.08;

        ctx.save();
        ctx.translate(cx, cy);
        ctx.scale(scale, scale);

        // Создаем временный canvas для работы с микрофоном
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = micWidth;
        tempCanvas.height = micHeight;
        const tempCtx = tempCanvas.getContext('2d');

        // Рисуем иконку микрофона в PRIMARY цвете
        tempCtx.filter = 'brightness(0) saturate(100%) invert(11%) sepia(100%) saturate(7426%) hue-rotate(248deg) brightness(98%) contrast(143%)';
        tempCtx.drawImage(micIcon, 0, 0, micWidth, micHeight);
        tempCtx.filter = 'none';

        // Glassmorphism поверх самой фигуры микрофона
        tempCtx.globalCompositeOperation = 'source-atop';

        // Стеклянный градиент поверх микрофона
        const micGlassGradient = tempCtx.createLinearGradient(0, 0, 0, micHeight);
        micGlassGradient.addColorStop(0, 'rgba(255, 255, 255, 0.3)');
        micGlassGradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.1)');
        micGlassGradient.addColorStop(1, 'rgba(255, 255, 255, 0.05)');

        tempCtx.fillStyle = micGlassGradient;
        tempCtx.fillRect(0, 0, micWidth, micHeight);

        // Рисуем результат на основной canvas
        ctx.drawImage(tempCanvas, -micWidth / 2, -micHeight / 2);

        ctx.restore();
      }

      // Карточки движущиеся по кругу снаружи - всегда видимые
      cards.forEach(card => {
        card.angle += card.speed;

        // Радиус орбиты - чуть больше основного круга
        const orbitRadius = mainRadius * 1.15;

        // Вычисляем позицию
        const x = cx + Math.cos(card.angle) * orbitRadius;
        const y = cy + Math.sin(card.angle) * orbitRadius;

        // Рисуем карточку с постоянной непрозрачностью
        drawCard(x, y, card.size, card.opacity);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
      clearInterval(waveInterval);
    };
  }, [micIcon]);

  return <canvas ref={canvasRef} className="animated-background" />;
};

export default AnimatedBackground;
