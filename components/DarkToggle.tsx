import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { IoMoonSharp, IoSunnyOutline } from 'react-icons/io5';

export default function DarkToggle(props) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <>
      <span
        className="flex"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {mounted && theme === 'dark' ? (
          <IoSunnyOutline className="text-2xl dark:text-yellow-300 " />
        ) : (
          <IoMoonSharp className={`text-2xl  ${props.classE}`} />
        )}
        {props.children}
      </span>
    </>
  );
}
