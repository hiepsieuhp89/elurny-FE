import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useMobile } from './useMobile';

type MenuItemType = {
  path: string;
  active: boolean;
};

export const useSidebarMenu = () => {
  const location = useLocation();
  const isMobile = useMobile(768);
  const storageKey = isMobile ? 'mobileSidebarMenuItems' : 'sidebarMenuItems';
  
  const [menuItems, setMenuItems] = useState<MenuItemType[]>(() => {
    const savedItems = localStorage.getItem(storageKey);
    return savedItems ? JSON.parse(savedItems) : [
      { path: '/', active: true },
      { path: '/create', active: false },
      { path: '/my-box', active: false },
      { path: '/channels', active: false },
      { path: '/feed', active: false },
      { path: '/quest-list', active: false },
    ];
  });

  useEffect(() => {
    const currentPath = location.pathname;
    
    setMenuItems(prevItems => {
      const updatedItems = prevItems.map(item => {
        const isExactMatch = item.path === currentPath;
        const isActive = isExactMatch;
        return {
          ...item,
          active: isActive
        };
      });
      
      localStorage.setItem(storageKey, JSON.stringify(updatedItems));
      
      return updatedItems;
    });
  }, [location.pathname, storageKey, isMobile]);

  const setActive = (path: string) => {
    const normalizedPath = path.startsWith('/quest-list/') ? '/quest-list' : path;
    
    setMenuItems(prevItems => {
      let updatedItems = prevItems.map(item => ({
        ...item,
        active: false
      }));
      
      updatedItems = updatedItems.map(item => {
        const isExactMatch = item.path === normalizedPath;
        const isQuestPath = normalizedPath.startsWith('/quest-list');
        const shouldActivateQuest = item.path === '/quest-list' && isQuestPath;
        
        const isActive = isExactMatch || shouldActivateQuest;
        return {
          ...item,
          active: isActive
        };
      });
      
      localStorage.setItem(storageKey, JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  return {
    menuItems,
    setActive
  };
};

export default useSidebarMenu; 