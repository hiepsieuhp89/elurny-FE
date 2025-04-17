import { IconInfoCircleFilled } from "@tabler/icons-react";
import { useState, useRef, useEffect } from "react";
type TooltipProps = {
  content: string;
}

export const InfoTooltip = ({ content }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({
    top: true,
    left: true
  });
  const tooltipRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (isVisible && tooltipRef.current && triggerRef.current) {
      const tooltip = tooltipRef.current;
      const trigger = triggerRef.current;
      const tooltipRect = tooltip.getBoundingClientRect();
      const triggerRect = trigger.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      
      // Kiểm tra và điều chỉnh vị trí ngang
      const isOverflowRight = triggerRect.left + tooltipRect.width > viewportWidth;
      
      // Kiểm tra và điều chỉnh vị trí dọc
      const isOverflowBottom = triggerRect.bottom + tooltipRect.height > viewportHeight;
      
      setPosition({
        top: !isOverflowBottom,
        left: !isOverflowRight
      });
    }
  }, [isVisible]);
  
  return (
    <div className="relative">
      <div 
        ref={triggerRef}
        onMouseEnter={() => setIsVisible(true)} 
        onMouseLeave={() => setIsVisible(false)}
      >
        <IconInfoCircleFilled size={16} className="text-[#6C7278] cursor-pointer" />
      </div>
      {isVisible && (
        <div 
          ref={tooltipRef}
          className={`absolute z-50 w-[300px] rounded-[10px] ${
            position.top ? 'top-[25px]' : 'bottom-[25px]'
          } ${
            position.left ? 'left-0' : 'right-0'
          }`}
        >
          <div className="relative">
            <div 
              className={`absolute w-4 h-4 bg-white rotate-45 transform ${
                position.top ? '-top-2' : '-bottom-2'
              } ${
                position.left ? 'left-4' : 'right-4'
              }`}
            ></div>
            <div className="bg-white p-4 rounded-[10px] relative z-10">
              <p className="text-gray-700 text-sm font-medium mb-2">{content}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};