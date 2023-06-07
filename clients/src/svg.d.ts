declare module '*.svg' {
  import React from 'react'
	// Component로 변경하는 부분. import {ReactComponent as Logo} './logo.svg'
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  // 일반적인 svg파일 내보내기 import logo from './logo.svg'
  const src: string;
  export default src;
}